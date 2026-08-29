import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useReveal } from "@/hooks/use-reveal";
import { CustomCursor } from "@/components/ui/custom-cursor";

const logo = { url: "/forezone-logo.png" };

const MAILTO =
  "mailto:forezoneco@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20ForeZone%20Co.&body=Hi%20ForeZone%20team%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20project.%0A%0AProject%3A%0ATimeline%3A%0ABudget%3A%0A%0AThanks%2C";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ForeZone Co. — Web Development Studio" },
      {
        name: "description",
        content:
          "ForeZone Co. designs and builds fast, scalable and elegant web experiences for ambitious brands.",
      },
      { property: "og:title", content: "ForeZone Co. — Web Development Studio" },
      {
        property: "og:description",
        content: "Elegant interfaces, solid engineering. Web products built end to end.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    no: "01",
    title: "Web Applications",
    text: "Scalable, fast and secure products built with React and modern infrastructure.",
  },
  {
    no: "02",
    title: "Business Websites",
    text: "SEO-friendly, conversion-focused sites that carry your brand identity.",
  },
  {
    no: "03",
    title: "Interface Design",
    text: "Elegant, fluid user experiences grounded in typography and detail.",
  },
  {
    no: "04",
    title: "Care & Growth",
    text: "Performance monitoring, continuous improvement and technical consulting.",
  },
];

const works = [
  { name: "Aurora Finance", tag: "Fintech Dashboard", year: "2026" },
  { name: "Maison Levant", tag: "E-Commerce", year: "2025" },
  { name: "Nord Atlas", tag: "SaaS Platform", year: "2025" },
  { name: "Veda Studio", tag: "Portfolio", year: "2024" },
];

const steps = [
  { title: "Discovery", text: "We clarify goals, audience and scope together." },
  { title: "Design", text: "We shape the flow, typography and interface language." },
  { title: "Build", text: "Clean architecture, fast and accessible code." },
  { title: "Launch", text: "Measurement, optimization and ongoing support." },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sunucu tarafında veya istemci yüklenmeden önce siyah arka plan gösterilir (SSR crash engelleme)
  if (!isMounted) {
    return <div className="min-h-screen bg-[#0d0203]" />;
  }

  // Doğrulama Ekranı (İstemci tarafında güvenle render edilir)
  if (!isVerified) {
    return (
      <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-[#0d0203] px-4 overflow-hidden">
        <CustomCursor />
        <div className="flex flex-col items-center text-center w-full max-w-sm p-8 rounded-lg border border-border bg-card/60 backdrop-blur-md shadow-2xl">
          <img
            src={logo.url}
            alt="ForeZone Co. monogram"
            className="w-14 h-14 rounded-sm mb-5"
          />
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
            Security Check
          </span>
          <h2 className="text-xl font-display mb-2 text-foreground">Verify you are human</h2>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            Please complete the quick verification below to access ForeZone Co.
          </p>
          <div className="flex justify-center items-center w-full min-h-[65px]">
            <Turnstile
              siteKey="0x4AAAAAAEgv14YsSssfSGFu"
              options={{ theme: "dark" }}
              onSuccess={() => setIsVerified(true)}
            />
          </div>
        </div>
      </div>
    );
  }

  // Doğrulama Geçildikten Sonraki Ana Sayfa
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-oxblood-deep/85 backdrop-blur-md py-3" : "py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="ForeZone Co. logo" className="h-10 w-10 rounded-sm" />
            <span className="font-display text-lg tracking-[0.28em] uppercase">ForeZone</span>
          </a>
          <div className="hidden items-center gap-9 text-[13px] tracking-[0.16em] uppercase text-muted-foreground md:flex">
            <a className="link-underline transition-colors hover:text-foreground" href="#services">
              Services
            </a>
            <a className="link-underline transition-colors hover:text-foreground" href="#work">
              Work
            </a>
            <a className="link-underline transition-colors hover:text-foreground" href="#process">
              Process
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="hero-surface relative flex min-h-screen items-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow"
          style={{
            background: "radial-gradient(circle, oklch(0.66 0.13 45 / 25%) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pt-32 pb-24 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p
              className="animate-rise text-[12px] tracking-[0.4em] uppercase text-muted-foreground"
              style={{ animationDelay: "0.05s" }}
            >
              Web Development Studio
            </p>
            <h1
              className="animate-rise mt-7 text-5xl leading-[1.02] sm:text-6xl md:text-7xl"
              style={{ animationDelay: "0.18s" }}
            >
              Elegant interfaces,
              <br />
              <span className="italic text-accent">solid</span> engineering.
            </h1>
            <p
              className="animate-rise mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground"
              style={{ animationDelay: "0.32s" }}
            >
              ForeZone Co. takes your brand where it belongs on the web. One team from design to
              launch, one standard: flawless detail.
            </p>
            <div
              className="animate-rise mt-11 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.46s" }}
            >
              <a
                href={MAILTO}
                className="glow-shadow rounded-sm bg-primary px-8 py-4 text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Tell us about your project
              </a>
              <a
                href="#work"
                className="link-underline text-[12px] tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                See our work
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-10 rounded-full border border-border animate-glow" />
              <img
                src={logo.url}
                alt="ForeZone Co. monogram"
                className="animate-float elegant-shadow relative w-64 rounded-sm md:w-80"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-border py-4">
          <div className="animate-marquee flex w-max gap-14 text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex gap-14">
                <span>React</span>
                <span>TypeScript</span>
                <span>Next Gen UI</span>
                <span>Performance</span>
                <span>SEO</span>
                <span>Accessibility</span>
                <span>Cloud</span>
                <span>Design Systems</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-28">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl">What we do</h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Small team, high standard. Every project is handled on its own terms — never from a
            template.
          </p>
        </div>
        <div className="hairline mt-10" />
        <div className="grid gap-px sm:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.no}
              className="reveal group border-b border-border p-8 transition-colors duration-500 hover:bg-card sm:odd:border-r hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="font-display text-sm text-accent">{s.no}</span>
              <h3 className="mt-5 text-2xl transition-transform duration-500 group-hover:translate-x-1">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <h2 className="reveal text-4xl md:text-5xl">Selected work</h2>
          <ul className="mt-14">
            {works.map((w, i) => (
              <li
                key={w.name}
                className="reveal group border-t border-border last:border-b"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline justify-between gap-6 py-8 transition-all duration-500 group-hover:px-4 hover:translate-x-3 cursor-default">
                  <span className="font-display text-3xl md:text-4xl">{w.name}</span>
                  <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                    {w.tag} · {w.year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="reveal text-4xl md:text-5xl">How we work</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="hairline" />
              <span className="mt-6 block font-display text-4xl text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="hero-surface border-t border-border">
        <div className="reveal mx-auto max-w-3xl px-6 py-32 text-center">
          <img
            src={logo.url}
            alt="ForeZone Co. monogram"
            className="animate-float mx-auto w-20 rounded-sm"
          />
          <h2 className="mt-10 text-4xl md:text-6xl">Let the next project be yours.</h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Tell us your idea and we'll share scope, timeline and our approach within 48 hours.
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href={MAILTO}
              className="glow-shadow inline-block rounded-sm bg-primary px-10 py-4 text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              forezoneco@gmail.com
            </a>

            <a
              href="https://instagram.com/forezoneco"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-shadow inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
        <span>© {new Date().getFullYear()} ForeZone Co.</span>
        <span>Tekirdağ · Working remotely</span>
      </footer>
    </div>
  );
}
