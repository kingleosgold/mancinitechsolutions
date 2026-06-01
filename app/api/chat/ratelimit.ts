import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Per-IP rate limiting for the public chat endpoint.
 *
 * Two modes, chosen automatically:
 *
 * 1. DURABLE (preferred) — if UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
 *    are set, we use Upstash Redis with a sliding-window limiter. This is shared
 *    across every serverless instance and survives cold starts, so it's a real
 *    limit. Free tier is plenty for this.
 *
 * 2. BEST-EFFORT FALLBACK — if those env vars are absent, we fall back to an
 *    in-memory sliding window. Caveat: serverless functions can scale to
 *    multiple instances and recycle on cold start, so each instance counts
 *    independently and counters reset when an instance spins down. It still
 *    blunts a single client hammering a warm instance, but it is NOT a hard
 *    global limit. Add the Upstash env vars to upgrade to durable limiting with
 *    zero code changes.
 */

const WINDOW_SECONDS = 60;
const MAX_REQUESTS = 15; // per IP per window

const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

const upstash = hasUpstash
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(MAX_REQUESTS, `${WINDOW_SECONDS} s`),
      prefix: "mts-chat",
      analytics: false,
    })
  : null;

// In-memory fallback store: ip -> request timestamps (ms)
const memory = new Map<string, number[]>();

function memoryLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = WINDOW_SECONDS * 1000;
  const recent = (memory.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  memory.set(ip, recent);

  // Opportunistic cleanup so the map can't grow unbounded.
  if (memory.size > 5000) {
    for (const [key, times] of memory) {
      if (times.every((t) => now - t >= windowMs)) memory.delete(key);
    }
  }

  return recent.length <= MAX_REQUESTS;
}

export async function checkRateLimit(ip: string): Promise<boolean> {
  if (upstash) {
    const { success } = await upstash.limit(ip);
    return success;
  }
  return memoryLimit(ip);
}

export const rateLimitMode = hasUpstash ? "upstash" : "memory";
