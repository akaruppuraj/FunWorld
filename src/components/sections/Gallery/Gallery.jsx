import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------
   Content
------------------------------------------------------------------------- */
const ITEMS = [
  { id: "world", image: "/images/gallery/fun-world-main.jpg", title: "THE WORLD", category: "SNM Fun World", tint: "#f72585" },
  { id: "arcade", image: "/images/arcade/arcade-main.jpg", title: "GAME ON", category: "Arcade", tint: "#7b4fd6" },
  { id: "rides", image: "/images/rides/kids-rides.jpg", title: "BIG JOY", category: "Kids Rides", tint: "#ff8a1f" },
  { id: "soft-play", image: "/images/gallery/soft-play.jpg", title: "PLAY TIME", category: "Soft Play", tint: "#28a9e8" },
  { id: "gaming", image: "/images/gaming/ps4-games.jpg", title: "LEVEL UP", category: "Gaming", tint: "#2fbf5b" },
];

const CTA_HREF = "#location";
const EASE = [0.22, 1, 0.36, 1];
const pad = (n) => String(n).padStart(2, "0");

/* -------------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------- */
function Reveal({ as = "div", y = 26, delay = 0, className, children }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------
   Section
------------------------------------------------------------------------- */
function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="overflow-hidden bg-[#f5f1e8] text-[#111]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        {/* ------------------------- Intro ------------------------- */}
        <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-black/45">
              <span aria-hidden className="h-px w-8 bg-[#f72585]" />
              08 / Gallery
            </p>

            <h2
              id="gallery-heading"
              className="mt-6 text-[clamp(3.25rem,7.5vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]"
            >
              SEE THE
              <br />
              <Letters word="FUN." />
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4 lg:pb-3">
            <p className="border-l border-black/15 pl-5 text-sm leading-7 text-black/60 sm:text-base">
              A glimpse of the games, rides, colours and moments waiting for you inside SNM Fun World.
            </p>
          </Reveal>
        </header>

        {/* ------------------------- Panels ------------------------- */}
        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <ul className="flex flex-col gap-4 lg:h-[540px] lg:flex-row lg:gap-3">
            {ITEMS.map((item, i) => (
              <Panel
                key={item.id}
                item={item}
                index={i}
                isActive={i === active}
                onActivate={() => setActive(i)}
              />
            ))}
          </ul>
        </Reveal>

        {/* ------------------------- Closing ------------------------- */}
        <div className="mt-20 border-t border-black/10 pt-8 lg:mt-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-black/40">One place</p>
              <p className="mt-3 max-w-3xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                COME FOR THE FUN.
                <br />
                <span className="text-[#f72585]">STAY FOR THE MEMORIES.</span>
              </p>
            </Reveal>

            <a
              href={CTA_HREF}
              className="group inline-flex w-full shrink-0 items-center justify-between gap-4 bg-[#111] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#f72585] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111] md:w-auto"
            >
              Plan your visit
              <ArrowUpRight
                size={17}
                aria-hidden
                className="transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Letters ---------------------------------- */
/** Each letter gets its own colour and lifts on hover. */
const LETTER_COLORS = ["#f72585", "#ffb400", "#28a9e8", "#2fbf5b"];

function Letters({ word }) {
  return (
    <span aria-label={word} className="inline-flex">
      {[...word].map((ch, i) => (
        <span
          key={i}
          aria-hidden
          style={{ color: LETTER_COLORS[i % LETTER_COLORS.length] }}
          className="inline-block transition-transform duration-300 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:-rotate-6"
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/* ----------------------------- Panel ------------------------------------ */
function Panel({ item, index, isActive, onActivate }) {
  const { image, title, category, tint } = item;

  return (
    <li
      className={`group relative min-h-[300px] flex-1 overflow-hidden bg-[#ddd] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:min-h-0 ${
        isActive ? "lg:flex-[4]" : "lg:flex-[1]"
      }`}
      onMouseEnter={onActivate}
    >
      <button
        type="button"
        onFocus={onActivate}
        onClick={onActivate}
        aria-label={`${title} — ${category}`}
        aria-pressed={isActive}
        className="absolute inset-0 z-20 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-[#111]"
      />

      <PanelImage image={image} title={title} isActive={isActive} />

      {/* Tint + legibility */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-0 lg:opacity-0" : "lg:opacity-60"}`}
        style={{ background: tint, mixBlendMode: "multiply" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

      {/* Oversized outlined first letter */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 select-none text-[11rem] font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.55)]"
      >
        {title[0]}
      </span>

      <span className="absolute left-5 top-5 text-xs font-black tracking-[0.2em] text-white/80">
        {pad(index + 1)}
      </span>

      {/* Collapsed: vertical title (desktop only) */}
      <p
        aria-hidden
        className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-3xl font-black tracking-[-0.03em] text-white transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 lg:block ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        {title}
      </p>

      {/* Expanded: horizontal title + category */}
      <div
        className={`absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 transition-all duration-500 sm:inset-x-7 sm:bottom-7 ${
          isActive ? "translate-y-0 opacity-100" : "lg:translate-y-4 lg:opacity-0"
        }`}
      >
        <div>
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/75">{category}</p>
          <h3 className="whitespace-nowrap text-3xl font-black leading-[0.9] tracking-[-0.045em] text-white sm:text-5xl">
            {title}
          </h3>
        </div>

        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-black transition-transform duration-300 group-hover:rotate-45"
        >
          <ArrowUpRight size={18} />
        </span>
      </div>
    </li>
  );
}

function PanelImage({ image, title, isActive }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[#222] p-4 text-center text-white/80">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Image not found</span>
        <code className="text-[10px] opacity-70">public{image}</code>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
        isActive ? "scale-100 lg:grayscale-0" : "lg:scale-110 lg:grayscale"
      }`}
    />
  );
}

export default Gallery;