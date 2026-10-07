import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Gamepad2, Trophy } from "lucide-react";

/* -------------------------------------------------------------------------
   Content (edit here — no markup changes needed)
------------------------------------------------------------------------- */
const ARCADE_GAMES = [
  { id: "racing", number: "01", title: "RACING", description: "Feel every turn. Chase every finish line.", color: "#28a9e8" },
  { id: "shooting", number: "02", title: "SHOOTING", description: "Lock in, aim sharp and beat your high score.", color: "#f72585" },
  { id: "sports", number: "03", title: "SPORTS", description: "Compete, score and bring your game face.", color: "#ff8a1f" },
  { id: "classics", number: "04", title: "CLASSICS", description: "Timeless arcade fun for every generation.", color: "#ffd43b" },
];

const MAIN_IMAGE = {
  src: "/images/arcade/arcade-main.webp",
  alt: "Arcade machines on the floor at SNM Fun World",
};

const EASE = [0.22, 1, 0.36, 1];
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b]";

/* -------------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------- */
function Reveal({ as = "div", y = 24, x = 0, delay = 0, className, children }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

function ArcadeImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[#222] text-center text-white/70">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Image not found</span>
        <code className="text-[10px] opacity-70">public{MAIN_IMAGE.src}</code>
      </div>
    );
  }

  return (
    <img
      src={MAIN_IMAGE.src}
      alt={MAIN_IMAGE.alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out motion-safe:group-hover:scale-[1.03]"
    />
  );
}

/* -------------------------------------------------------------------------
   Section — fits a single desktop screen
------------------------------------------------------------------------- */
function ArcadeZone() {
  return (
    <section
      id="games"
      aria-labelledby="arcade-heading"
      className="relative overflow-hidden bg-[#111] text-white lg:flex lg:min-h-[100svh] lg:items-center"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
        {/* ------------------------- Heading row ------------------------- */}
        <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-white/45">
              <span aria-hidden className="h-px w-8 bg-[#f72585]" />
              02 / Arcade
            </p>
            <h2
              id="arcade-heading"
              className="mt-4 text-[clamp(2.75rem,6vw,5.25rem)] font-black leading-[0.9] tracking-[-0.06em]"
            >
              INSERT <span className="text-[#ffd43b]">COIN.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:pb-1">
            <p className="border-l border-white/15 pl-5 text-sm leading-6 text-white/60">
              Step into the arcade and leave the ordinary behind. Race, compete, chase high scores and discover
              something new every time you play.
            </p>
          </Reveal>
        </header>

        {/* ------------------------- Showcase ------------------------- */}
        <Reveal delay={0.1} className="mt-8">
          <div className="group relative overflow-hidden bg-[#1b1b1b]">
            {/* Image area */}
            <div className="relative h-[260px] sm:h-[340px] lg:h-[430px]">
              <ArcadeImage />
              <div aria-hidden className="absolute inset-0 bg-black/20" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <p className="absolute left-5 top-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 sm:left-7 sm:top-6">
                <span aria-hidden className="h-2 w-2 bg-[#f72585]" />
                Arcade floor
              </p>

              <p className="absolute right-5 top-5 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:flex sm:right-7 sm:top-6">
                <Gamepad2 size={15} aria-hidden />
                Ready when you are
              </p>

              <p className="absolute left-5 top-14 text-[clamp(1.75rem,3.6vw,3.25rem)] font-black leading-[0.92] tracking-[-0.05em] sm:left-7 sm:top-16">
                PLAY HARD.
                <br />
                <span className="text-[#f72585]">HAVE FUN.</span>
              </p>
            </div>

            {/* Game types: overlay on desktop, stacked below the image on mobile */}
            <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:absolute lg:inset-x-6 lg:bottom-6 lg:grid-cols-4 lg:gap-3 lg:bg-transparent">
              {ARCADE_GAMES.map((g, i) => (
                <Reveal as="li" key={g.id} y={18} delay={0.12 + i * 0.07} className="list-none">
                  <article className="group/card relative h-full overflow-hidden bg-[#111] p-5 transition-all duration-300 lg:bg-black/55 lg:backdrop-blur-md lg:hover:-translate-y-1.5 lg:hover:bg-black/75">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 transition-transform duration-500 group-hover/card:scale-x-100"
                      style={{ background: g.color }}
                    />

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-[0.2em] text-white/40">{g.number}</span>
                      <Trophy
                        size={15}
                        aria-hidden
                        className="text-white/30 transition-colors duration-300 group-hover/card:text-[color:var(--c)]"
                        style={{ "--c": g.color }}
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-black tracking-[-0.03em]">{g.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-white/55">{g.description}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ------------------------- Bottom row ------------------------- */}
        <Reveal delay={0.2} className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-white/70">
            <span className="mr-3 text-xs font-black uppercase tracking-[0.2em] text-[#ffd43b]">The arcade rule</span>
            One more game. Always.
          </p>

          <a
            href="#packages"
            className={`group inline-flex w-full items-center justify-between gap-4 bg-[#f72585] px-6 py-3.5 text-xs font-black uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-[#ffd43b] hover:text-black sm:w-auto ${focusRing}`}
          >
            Get your coins
            <ArrowUpRight
              size={17}
              aria-hidden
              className="transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default ArcadeZone;