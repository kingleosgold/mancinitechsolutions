import Image from "next/image";

const CONTACT = "mailto:jon@mancinitechsolutions.com";

const steps = [
  {
    n: "01",
    title: "Tell it what you want, in plain English.",
    body: "No editor to learn, no tickets to file. You describe the change the way you'd say it out loud.",
  },
  {
    n: "02",
    title: "See the change on a preview, before anything goes live.",
    body: "Nothing touches your real site until you've looked at it and decided you like it.",
  },
  {
    n: "03",
    title: "Publish with one click. Undo just as easily.",
    body: "Ship it the moment it's right — and roll it back the moment you change your mind.",
  },
];

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
      className={`group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink transition hover:bg-accent-soft hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">
        &rarr;
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== HERO (dark band, carries the logo) ===== */}
      <section className="relative bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/3 right-[-10%] h-[640px] w-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-content px-6 sm:px-10">
          {/* Header */}
          <header className="flex items-center justify-between py-7">
            <Image
              src="/logo-white.png"
              alt="Mancini Tech Solutions"
              width={180}
              height={40}
              priority
              className="h-9 w-auto"
            />
            <a
              href={CONTACT}
              className="hidden text-sm font-medium text-white/70 transition hover:text-accent sm:inline"
            >
              Let&rsquo;s talk
            </a>
          </header>

          {/* Hero content */}
          <div className="max-w-4xl pb-28 pt-16 sm:pt-24">
            <Eyebrow>Own your website</Eyebrow>
            <h1 className="font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Stop renting your website.{" "}
              <span className="italic text-accent">Own it</span>, and run it by
              talking to AI.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              Wix, Squarespace, and Shopify rent you a site you&rsquo;ll never
              own and can&rsquo;t fully control. We build you one you own
              outright, and you change anything on it just by asking, in plain
              English.
            </p>
            <div className="mt-12">
              <Cta>Let&rsquo;s talk about your site</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="border-b border-black/5 bg-paper">
        <div className="mx-auto max-w-content px-6 py-28 sm:px-10 sm:py-36">
          <div className="max-w-3xl">
            <Eyebrow>The trap</Eyebrow>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              You&rsquo;re renting.
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-black/60 sm:text-2xl sm:leading-relaxed">
              Every month you pay a platform to host a website you don&rsquo;t
              own, built on something you can&rsquo;t leave, with custom pieces
              you can&rsquo;t touch without hiring someone. That isn&rsquo;t your
              website. It&rsquo;s theirs, rented to you.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>The shift</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              We build you a website you own, and you run it by talking to it.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <p className="text-lg leading-relaxed text-black/65 sm:text-xl sm:leading-relaxed">
              The code is yours. The domain is in your name. Instead of fighting
              a page editor or waiting on a developer, you just say what you
              want.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {[
                "Change the headline.",
                "Add an article.",
                "Fix the popup.",
                "Redesign a page.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-lg font-medium text-black/80"
                >
                  <span className="h-px w-6 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg leading-relaxed text-black/65 sm:text-xl sm:leading-relaxed">
              The AI makes the change, shows it to you before it goes live, and
              you publish with one click.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-b border-black/5 bg-paper">
        <div className="mx-auto max-w-content px-6 py-28 sm:px-10 sm:py-36">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Three steps. No code. No waiting.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="bg-paper p-8 sm:p-10">
                <span className="font-display text-2xl text-accent">
                  {step.n}
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-black/55">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 flex items-start gap-3 text-lg font-medium text-black/70">
            <span className="mt-2 h-px w-6 shrink-0 bg-accent" />
            You can&rsquo;t break your live site, and you&rsquo;re never locked
            out of anything.
          </p>
        </div>
      </section>

      {/* ===== WHY IT'S DIFFERENT ===== */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-content px-6 py-28 sm:px-10 sm:py-36">
          <div className="max-w-3xl">
            <Eyebrow>Why it&rsquo;s different</Eyebrow>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              You own it. <span className="text-accent">You control all of it.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/60 sm:text-xl sm:leading-relaxed">
              Change a single word or redesign a whole page, it&rsquo;s the same
              simple thing: ask, preview, publish. No code. No developer on
              retainer. No platform that owns your work. And if you ever want to
              leave, you take your entire site with you, because it was always
              yours.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>The cost</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              One time to own it. Pennies to run it.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p className="text-lg leading-relaxed text-black/65 sm:text-xl sm:leading-relaxed">
              There&rsquo;s a one-time cost to build your site and move you off
              the platform you&rsquo;re renting. After that, you own it, and
              running it costs a few dollars a month instead of the thirty-plus
              you pay now.
            </p>
            <p className="mt-6 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              You stop renting, and you stop paying rent forever.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CLOSING / CTA ===== */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-content px-6 py-32 text-center sm:px-10 sm:py-44">
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            You don&rsquo;t need us for anything. You can ask us for everything.
          </h2>
          <div className="mt-12">
            <Cta className="px-10 py-5 text-lg">
              Let&rsquo;s talk about your site
            </Cta>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-10 sm:flex-row sm:px-10">
          <Image
            src="/logo-white.png"
            alt="Mancini Tech Solutions"
            width={150}
            height={32}
            className="h-7 w-auto opacity-80"
          />
          <p className="text-sm text-white/40">
            &copy; 2026 Mancini Tech Solutions LLC. North Haven, Connecticut.
          </p>
          <a
            href={CONTACT}
            className="text-sm font-medium text-white/60 transition hover:text-accent"
          >
            jon@mancinitechsolutions.com
          </a>
        </div>
      </footer>
    </main>
  );
}
