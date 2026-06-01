"use client";

import { useEffect, useRef, useState } from "react";

type Role = "user" | "assistant";
interface Message {
  role: Role;
  content: string;
}

const CONTACT = "jon@mancinitechsolutions.com";

// Calm fallback shown when the API errors or rate-limits. Never surface a raw error.
const FALLBACK = `I'm getting a lot of questions right now. Email ${CONTACT} and we'll get right back to you.`;

// Opening assistant line (client-only; not sent to the model as history).
const GREETING: Message = {
  role: "assistant",
  content:
    "Ask me anything about owning your site instead of renting it — how it works, what it costs, or moving off Wix or Squarespace.",
};

const TEXTAREA_MAX_PX = 120; // ~5 lines, then it scrolls

export default function ChatConsole() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const refocusRef = useRef(false);

  // Keep the latest message in view as the conversation grows / streams.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  // Auto-grow the textarea to fit its content (and shrink back when cleared).
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, TEXTAREA_MAX_PX)}px`;
  }, [input]);

  // After a send completes and the textarea is re-enabled, return focus so the
  // user can type the next message immediately. Only fires after a send (guarded
  // by refocusRef), never on initial mount. preventScroll avoids a page jump.
  useEffect(() => {
    if (!loading && refocusRef.current) {
      refocusRef.current = false;
      textareaRef.current?.focus({ preventScroll: true });
    }
  }, [loading]);

  async function submit() {
    const text = input.trim();
    if (!text || loading) return;

    // Restore focus to the textarea once this send finishes (see effect above).
    refocusRef.current = true;

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    // Render the streaming reply into a single assistant bubble.
    let started = false;
    const render = (text: string) => {
      if (!started) {
        started = true;
        setMessages((m) => [...m, { role: "assistant", content: text }]);
      } else {
        setMessages((m) => {
          const copy = m.slice();
          copy[copy.length - 1] = { role: "assistant", content: text };
          return copy;
        });
      }
    };

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        let msg = FALLBACK;
        try {
          const data = await res.json();
          if (data?.message) msg = data.message as string;
        } catch {
          /* keep fallback */
        }
        setMessages((m) => [...m, { role: "assistant", content: msg }]);
        return;
      }

      // Read the stream to completion. decode({stream:true}) buffers partial
      // multibyte chars across chunk boundaries; the final decode() with no
      // args flushes any remaining bytes so the last chunk always renders.
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (value) {
          acc += decoder.decode(value, { stream: true });
          render(acc);
        }
        if (done) break;
      }
      const tail = decoder.decode();
      if (tail) {
        acc += tail;
        render(acc);
      }

      if (!acc.trim()) {
        setMessages((m) => [...m, { role: "assistant", content: FALLBACK }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: FALLBACK }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Enter sends; Shift+Enter inserts a newline.
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  const thread: Message[] = [GREETING, ...messages];
  // Typing indicator shows after the user sends, until the reply starts streaming.
  const showTyping =
    loading && messages.length > 0 && messages[messages.length - 1].role === "user";

  return (
    <div className="overflow-hidden rounded-md border border-white/12 bg-elevated shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-online shadow-[0_0_8px_rgba(63,185,80,0.7)]" />
          <span className="font-mono text-xs tracking-wide text-white/70">
            assistant
          </span>
          <span className="font-mono text-xs text-white/30">/ online</span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-label text-white/30">
          ask&nbsp;anything
        </span>
      </div>

      {/* message list */}
      <div
        ref={scrollRef}
        aria-live="polite"
        className="max-h-[300px] space-y-5 overflow-y-auto px-4 py-5 sm:max-h-[340px] sm:px-5 sm:py-6"
      >
        {thread.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="flex flex-col items-end gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-label text-white/30">
                you
              </span>
              <p className="max-w-[88%] whitespace-pre-wrap rounded-md rounded-tr-sm border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm leading-relaxed text-white/90">
                {m.content}
              </p>
            </div>
          ) : (
            <div key={i} className="flex flex-col items-start gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-label text-accent/80">
                assistant
              </span>
              <p className="max-w-[92%] whitespace-pre-wrap rounded-md rounded-tl-sm border border-accent/25 bg-accent/[0.06] px-3.5 py-2.5 text-sm leading-relaxed text-white/85">
                {m.content}
              </p>
            </div>
          ),
        )}

        {showTyping && (
          <div className="flex flex-col items-start gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-label text-accent/80">
              assistant
            </span>
            <p className="flex items-center gap-1 rounded-md rounded-tl-sm border border-accent/25 bg-accent/[0.06] px-3.5 py-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70 [animation:caret-blink_1s_steps(1)_infinite]" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70 [animation:caret-blink_1s_steps(1)_infinite_0.2s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70 [animation:caret-blink_1s_steps(1)_infinite_0.4s]" />
            </p>
          </div>
        )}
      </div>

      {/* input row */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex items-end gap-2 border-t border-white/10 bg-white/[0.02] px-3 py-3"
      >
        <span
          aria-hidden
          className="flex h-8 items-center pl-1 font-mono text-sm text-accent"
        >
          &gt;
        </span>
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={loading}
            maxLength={1000}
            placeholder="Ask anything about owning your site…"
            aria-label="Ask the assistant a question"
            // Hide the native caret only while empty, where the decorative block
            // caret stands in for it — so there's never two cursors at once.
            className={`block max-h-[120px] w-full resize-none overflow-y-auto bg-transparent py-1 font-mono text-sm leading-6 text-white/90 placeholder:text-white/35 focus:outline-none disabled:opacity-60 ${
              input.length === 0 ? "caret-transparent" : ""
            }`}
          />
          {/* Decorative block caret: only when the textarea is genuinely focused
              and empty. Never shown when unfocused — that was the deceptive bug. */}
          {focused && input.length === 0 && (
            <span
              aria-hidden
              className="caret-blink pointer-events-none absolute left-0 top-1/2 h-4 w-[7px] -translate-y-1/2 bg-accent/80"
            />
          )}
        </div>
        <button
          type="submit"
          disabled={loading || input.trim().length === 0}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/[0.04] text-white/70 transition hover:border-accent/60 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-white/70"
          aria-label="Send"
        >
          <span className="font-mono text-sm">&uarr;</span>
        </button>
      </form>
    </div>
  );
}
