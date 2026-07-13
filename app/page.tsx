import Image from "next/image";
import Reveal from "./_components/Reveal";
import ChatConsole from "./_components/ChatConsole";

const CONTACT = "mailto:jon@mancinitechsolutions.com";

const steps = [
  {
    n: "01",
    title: "We look at how the work happens now.",
    body: "A short discovery across your team's real workflows, not a slide deck about AI.",
  },
  {
    n: "02",
    title: "We pilot on one workflow that matters.",
    body: "You see the change on real work before anything rolls out wider.",
  },
  {
    n: "03",
    title: "We train your team and stay until it sticks.",
    body: "Documentation, training, and support, the part most AI projects skip.",
  },
];

const solutionItems = [
  "Find the workflows where AI saves real hours. Documents, reporting, communications, follow-ups.",
  "Build the automation and connect it to the tools you already use.",
  "Train your people until the new way is the default way.",
  "Show you what changed. Usage, time saved, work shipped.",
];

/* ---------- primitives ---------- */

function Cta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CONTACT}
      className={`group inline-flex items-center gap-2.5 rounded-sm bg-accent px-6 py-3.5 text-[15px] font-semibold text-bg transition-colors duration-200 hover:bg-white ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="font-mono transition-transform duration-200 group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </a>
  );
}

function Kicker({ label, index }: { label: string; index?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs uppercase tracking-label">
        <span className="text-white/30">// </span>
        <span className="text-accent">{label}</span>
      </span>
      {index ? (
        <span className="font-mono text-xs text-white/25">{index}</span>
      ) : null}
    </div>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-20 select-none font-mono text-base leading-none text-white/20 ${className}`}
    >
      +
    </span>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border-b border-white/[0.08] ${className}`}>
      {children}
      <Plus className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <Plus className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
    </section>
  );
}

const PAD = "px-6 sm:px-10 lg:px-14";

/* ---------- page ---------- */

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="mx-auto w-full max-w-frame border-x border-white/[0.08]">
        {/* ===== HEADER ===== */}
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-bg/80 backdrop-blur-md">
          <div className={`flex items-center justify-between py-4 ${PAD}`}>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt="Mancini Tech Solutions"
                width={160}
                height={36}
                priority
                className="h-7 w-auto"
              />
              <span className="hidden font-mono text-xs uppercase tracking-label text-white/55 sm:inline">
                Mancini Tech Solutions
              </span>
            </div>
            <a
              href={CONTACT}
              className="rounded-sm border border-white/15 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide text-white/80 transition-colors hover:border-accent hover:text-accent"
            >
              Let&rsquo;s talk
            </a>
          </div>
        </header>

        {/* ===== HERO ===== */}
        <Section>
          <div className="grid lg:grid-cols-12">
            {/* left: headline */}
            <div
              className={`lg:col-span-7 lg:border-r lg:border-white/[0.08] ${PAD} pb-12 pt-12 lg:py-24`}
            >
              <div className="rise" style={{ animationDelay: "0ms" }}>
                <Kicker label="ai consulting" />
              </div>
              <h1
                className="rise mt-7 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]"
                style={{ animationDelay: "80ms" }}
              >
                Your business has AI.{" "}
                <span className="text-accent">Nobody&rsquo;s using it.</span>
              </h1>
              <p
                className="rise mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                Mancini Tech Solutions is an AI consulting firm in Connecticut.
                We find where AI actually fits your business, build the
                automation, and train your people until it sticks.
              </p>
              <p
                className="rise mt-5 max-w-xl font-mono text-xs leading-relaxed text-white/35"
                style={{ animationDelay: "260ms" }}
              >
                Run by Jon Mancini. 14 years of enterprise IT at Apple, Yale,
                Disney, Raytheon, Netflix, and Kuehne + Nagel.
              </p>
              <div
                className="rise mt-10"
                style={{ animationDelay: "320ms" }}
              >
                <Cta>Let&rsquo;s talk about your business</Cta>
              </div>
            </div>

            {/* right: chat console */}
            <div
              className={`lg:col-span-5 ${PAD} pb-14 pt-2 lg:flex lg:items-center lg:py-16`}
            >
              <div
                className="rise w-full"
                style={{ animationDelay: "240ms" }}
              >
                <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-white/30">
                  <span className="h-px w-6 bg-white/20" />
                  live preview
                </div>
                <ChatConsole />
                <p className="mt-3 font-mono text-[11px] leading-relaxed text-white/35">
                  This assistant is our own build. It runs the same way we set
                  things up for clients.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== PROBLEM ===== */}
        <Section>
          <Reveal className={`${PAD} py-20 lg:py-28`}>
            <Kicker label="the problem" index="01" />
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:col-span-7 lg:text-6xl">
                Everyone bought AI. Almost nobody changed how they work.
              </h2>
              <p className="text-lg leading-relaxed text-white/55 sm:text-xl lg:col-span-5 lg:pt-3">
                Your team has ChatGPT accounts and AI features inside the
                software you already pay for, and the work still gets done the
                old way. That gap between having AI and using it is expensive,
                and closing it takes more than another subscription.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* ===== SOLUTION ===== */}
        <Section>
          <Reveal className={`${PAD} py-20 lg:py-28`}>
            <Kicker label="what we do" index="02" />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:col-span-5 lg:text-[2.9rem]">
                We make AI part of how your business actually runs.
              </h2>
              <div className="lg:col-span-7 lg:pt-1">
                <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                  {solutionItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-bg px-4 py-4 transition-colors duration-200 hover:bg-white/[0.03]"
                    >
                      <span className="font-mono text-sm text-accent">+</span>
                      <span className="text-[15px] font-medium text-white/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-lg leading-relaxed text-white/60">
                  Advisory when you need direction. Hands-on build when you need
                  it done.
                </p>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* ===== HOW IT WORKS ===== */}
        <Section>
          <Reveal className={`${PAD} py-20 lg:py-28`}>
            <Kicker label="how it works" index="03" />
            <h2 className="mt-10 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Three steps. Start small, prove it, make it stick.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="group bg-bg p-6 transition-colors duration-200 hover:bg-white/[0.02] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-accent">
                      {step.n}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-label text-white/20">
                      step
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 flex items-start gap-3 font-mono text-sm leading-relaxed text-white/60">
              <span className="text-accent">//</span>
              <span>
                Every step happens on your real work, with your real team.
              </span>
            </p>
          </Reveal>
        </Section>

        {/* ===== WHY IT'S DIFFERENT ===== */}
        <Section>
          <Reveal className={`${PAD} py-20 lg:py-28`}>
            <Kicker label="who's behind this" index="04" />
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:col-span-7 lg:text-6xl">
                Who&rsquo;s behind this.
              </h2>
              <div className="lg:col-span-5 lg:pt-3">
                <p className="text-lg leading-relaxed text-white/55">
                  Mancini Tech Solutions is Jon Mancini. 14+ years of enterprise
                  IT across Apple, Yale, Yale New Haven Hospital, Travelers,
                  Disney, Raytheon, Netflix, and Kuehne + Nagel. Infrastructure,
                  identity, unified communications, and technology rollouts at
                  scales from hundreds of users to 80,000, including more than
                  500 employees trained through a single nationwide transition.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/55">
                  Today I build with AI every day. Two production iOS apps live
                  in the App Store, a multi-tenant platform for an academic
                  health-sciences client with role-based access control and
                  single sign-on, and AI workflow automation for Connecticut
                  businesses. I also serve as Director of Technology &amp; AI
                  for The Aldrich Group, advising its member companies on
                  automation and technology adoption.
                </p>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* ===== COST ===== */}
        <Section>
          <Reveal className={`${PAD} py-20 lg:py-28`}>
            <Kicker label="we also build" index="05" />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:col-span-5 lg:text-[2.9rem]">
                We build software too.
              </h2>
              <div className="lg:col-span-7 lg:pt-1">
                <p className="text-lg leading-relaxed text-white/60">
                  Websites you own outright and run by talking to AI. Custom
                  apps. Internal tools and ops platforms. If the answer to your
                  problem is software that doesn&rsquo;t exist yet, we build it
                  and hand you the keys.
                </p>
                <p className="mt-8 border-l-2 border-accent pl-5 text-2xl font-semibold leading-snug tracking-[-0.01em] text-white sm:text-[1.75rem]">
                  Domain and code in your name, always.
                </p>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* ===== ENGAGEMENTS ===== */}
        <Section>
          <Reveal className={`${PAD} py-20 lg:py-28`}>
            <Kicker label="engagements" index="06" />
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:col-span-7 lg:text-6xl">
                How engagements work.
              </h2>
              <p className="text-lg leading-relaxed text-white/55 sm:text-xl lg:col-span-5 lg:pt-3">
                Projects are priced as projects, not hours. We start small,
                prove it on real work, and grow from there. You own everything
                we build.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* ===== CLOSING / CTA ===== */}
        <Section className="overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(240,180,60,0.08) 0%, transparent 70%)",
            }}
          />
          <Plus className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
          <Plus className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
          <Reveal className={`relative ${PAD} py-24 lg:py-32`}>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Your business already has AI.{" "}
              <span className="text-accent">
                Let&rsquo;s make it actually work.
              </span>
            </h2>
            <div className="mt-12">
              <Cta className="px-8 py-4 text-base">
                Let&rsquo;s talk about your business
              </Cta>
            </div>
          </Reveal>
        </Section>

        {/* ===== FOOTER ===== */}
        <footer>
          <div
            className={`flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center ${PAD}`}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt="Mancini Tech Solutions"
                width={140}
                height={30}
                className="h-6 w-auto opacity-80"
              />
              <span className="font-mono text-xs text-white/40">
                &copy; 2026 Mancini Tech Solutions LLC. North Haven,
                Connecticut.
              </span>
            </div>
            <a
              href={CONTACT}
              className="font-mono text-xs text-white/50 transition-colors hover:text-accent"
            >
              jon@mancinitechsolutions.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
