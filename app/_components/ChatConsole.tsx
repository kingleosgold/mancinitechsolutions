"use client";

import { useState } from "react";

type Role = "user" | "assistant";
interface Message {
  role: Role;
  content: string;
}

/**
 * STATIC for now — a styled mockup of the visitor-facing assistant.
 *
 * When wiring the real assistant: replace `SAMPLE` with React state
 * (`useState<Message[]>`), append the user's message on submit, POST the
 * conversation to the chat API/route, and stream the assistant reply back
 * into the same array. The markup below — header, message list, input row —
 * is the exact surface the live chat renders into, so no layout changes are
 * needed to make it real.
 */
const SAMPLE: Message[] = [
  {
    role: "user",
    content: "Can I update the site myself after it's built?",
  },
  {
    role: "assistant",
    content:
      'Yes. You tell me what to change in plain English — "swap the headline," "add a post," "fix the popup." I make the edit, show you a preview, and you publish with one click. No code, no waiting on a developer.',
  },
];

export default function ChatConsole() {
  const [input, setInput] = useState("");

  // Intentionally inert until the assistant is wired up.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

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
      <div className="space-y-5 px-4 py-5 sm:px-5 sm:py-6">
        {SAMPLE.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="flex flex-col items-end gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-label text-white/30">
                you
              </span>
              <p className="max-w-[88%] rounded-md rounded-tr-sm border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm leading-relaxed text-white/90">
                {m.content}
              </p>
            </div>
          ) : (
            <div key={i} className="flex flex-col items-start gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-label text-accent/80">
                assistant
              </span>
              <p className="max-w-[92%] rounded-md rounded-tl-sm border border-accent/25 bg-accent/[0.06] px-3.5 py-2.5 text-sm leading-relaxed text-white/85">
                {m.content}
              </p>
            </div>
          ),
        )}
      </div>

      {/* input row (inert mockup) */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-3 py-3"
      >
        <span aria-hidden className="pl-1 font-mono text-sm text-accent">
          &gt;
        </span>
        <div className="relative flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about owning your site…"
            aria-label="Ask the assistant a question"
            className="w-full bg-transparent font-mono text-sm text-white/90 placeholder:text-white/35 focus:outline-none"
          />
          {input.length === 0 && (
            <span
              aria-hidden
              className="caret-blink pointer-events-none absolute left-0 top-1/2 h-4 w-[7px] -translate-y-1/2 bg-accent/80"
            />
          )}
        </div>
        <button
          type="submit"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/[0.04] text-white/70 transition hover:border-accent/60 hover:text-accent"
          aria-label="Send"
        >
          <span className="font-mono text-sm">&uarr;</span>
        </button>
      </form>
    </div>
  );
}
