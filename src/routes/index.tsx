import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/forezone-logo.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ForeZone Co. — Web Geliştirme Stüdyosu" },
      {
        name: "description",
        content:
          "ForeZone Co., markalar için hızlı, ölçeklenebilir ve zarif web deneyimleri tasarlayıp geliştiren bir web development stüdyosudur.",
      },
      { property: "og:title", content: "ForeZone Co. — Web Geliştirme Stüdyosu" },
      {
        property: "og:description",
        content:
          "Zarif arayüzler, sağlam mühendislik. ForeZone Co. ile markanızı web'de öne çıkarın.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    no: "01",
    title: "Web Uygulamaları",
    text: "React ve modern altyapılarla ölçeklenebilir, hızlı ve güvenli ürünler.",
  },
  {
    no: "02",
    title: "Kurumsal Siteler",
    text: "Marka kimliğinizi yansıtan, SEO dostu ve dönüşüm odaklı web siteleri.",
  },
  {
    no: "03",
    title: "Arayüz Tasarımı",
    text: "Tipografi ve detay disiplinine dayanan zarif, akıcı kullanıcı deneyimleri.",
  },
  {
    no: "04",
    title: "Bakım & Büyüme",
    text: "Performans izleme, sürekli iyileştirme ve teknik danışmanlık.",
  },
];

const works = [
  { name: "Aurora Finance", tag: "Fintech Panel", year: "2026" },
  { name: "Maison Levant", tag: "E-Ticaret", year: "2025" },
  { name: "Nord Atlas", tag: "SaaS Platform", year: "2025" },
  { name: "Veda Studio", tag: "Portfolyo", year: "2024" },
];

const steps = [
  { title: "Keşif", text: "Hedefleri, kullanıcıyı ve kapsamı netleştiririz." },
  { title: "Tasarım", text: "Akış, tipografi ve arayüz dilini kurgularız." },
  { title: "Geliştirme", text: "Temiz mimari ile hızlı ve erişilebilir kod." },
  { title: "Yayın", text: "Ölçüm, optimizasyon ve sürekli destek." },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-oxblood-deep/85 backdrop-blur-md py-3" : "py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="ForeZone Co. logosu" className="h-10 w-10 rounded-sm" />
            <span className="font-display text-lg tracking-[0.28em] uppercase">ForeZone</span>
          </a>
          <div className="hidden items-center gap-9 text-[13px] tracking-[0.16em] uppercase text-muted-foreground md:flex">
            <a className="link-underline transition-colors hover:text-foreground" href="#hizmetler">
              Hizmetler
            </a>
            <a className="link-underline transition-colors hover:text-foreground" href="#isler">
              İşler
            </a>
            <a className="link-underline transition-colors hover:text-foreground" href="#surec">
              Süreç
            </a>
          </div>
          <a
            href="#iletisim"
            className="rounded-sm border border-border px-5 py-2 text-[12px] tracking-[0.18em] uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Konuşalım
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="hero-surface relative flex min-h-screen items-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow"
          style={{
            background:
              "radial-gradient(circle, oklch(0.66 0.13 45 / 25%) 0%, transparent 65%)",
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
              Zarif arayüzler,
              <br />
              <span className="italic text-accent">sağlam</span> mühendislik.
            </h1>
            <p
              className="animate-rise mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground"
              style={{ animationDelay: "0.32s" }}
            >
              ForeZone Co. markanızı web'de hak ettiği yere taşır. Tasarımdan yayına kadar tek bir
              ekip, tek bir standart: kusursuz detay.
            </p>
            <div
              className="animate-rise mt-11 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.46s" }}
            >
              <a
                href="#iletisim"
                className="glow-shadow rounded-sm bg-primary px-8 py-4 text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Projenizi anlatın
              </a>
              <a
                href="#isler"
                className="link-underline text-[12px] tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                İşlerimize bakın
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
                <span>Performans</span>
                <span>SEO</span>
                <span>Erişilebilirlik</span>
                <span>Cloud</span>
                <span>Tasarım Sistemleri</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="mx-auto max-w-6xl px-6 py-28">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl">Ne yapıyoruz</h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Küçük ekip, yüksek standart. Her proje tek tek ele alınır, şablonla çalışmayız.
          </p>
        </div>
        <div className="hairline mt-10" />
        <div className="grid gap-px sm:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.no}
              className="reveal group border-b border-border p-8 transition-colors duration-500 hover:bg-card sm:odd:border-r"
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

      {/* İşler */}
      <section id="isler" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <h2 className="reveal text-4xl md:text-5xl">Seçili işler</h2>
          <ul className="mt-14">
            {works.map((w, i) => (
              <li
                key={w.name}
                className="reveal group border-t border-border last:border-b"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <a
                  href="#iletisim"
                  className="flex items-baseline justify-between gap-6 py-8 transition-all duration-500 group-hover:px-4"
                >
                  <span className="font-display text-3xl md:text-4xl">{w.name}</span>
                  <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                    {w.tag} · {w.year}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Süreç */}
      <section id="surec" className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="reveal text-4xl md:text-5xl">Nasıl çalışıyoruz</h2>
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

      {/* İletişim */}
      <section id="iletisim" className="hero-surface border-t border-border">
        <div className="reveal mx-auto max-w-3xl px-6 py-32 text-center">
          <img
            src={logo.url}
            alt="ForeZone Co. monogram"
            className="animate-float mx-auto w-20 rounded-sm"
          />
          <h2 className="mt-10 text-4xl md:text-6xl">Bir sonraki proje sizin olsun.</h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Fikrinizi anlatın; kapsam, süre ve yaklaşımımızı 48 saat içinde paylaşalım.
          </p>
          <a
            href="mailto:hello@forezone.co"
            className="glow-shadow mt-11 inline-block rounded-sm bg-primary px-10 py-4 text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            hello@forezone.co
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
        <span>© {new Date().getFullYear()} ForeZone Co.</span>
        <span>İstanbul · Uzaktan çalışıyoruz</span>
      </footer>
    </div>
  );
}
