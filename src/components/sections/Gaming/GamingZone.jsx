import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Gamepad2, Trophy, Users } from "lucide-react";

/* -------------------------------------------------------------------------
   Content — titles come from the PS4 games poster
------------------------------------------------------------------------- */
const MODES = [
  { id: "all", label: "All", blurb: "Every title on the PS4 lineup." },
  { id: "sports", label: "Sports", blurb: "Compete with friends and settle the score." },
  { id: "racing", label: "Racing", blurb: "Pick your ride and take the lead." },
  { id: "action", label: "Action", blurb: "Fast games, big moments and serious competition." },
];

const LIBRARY = [
  { title: "Sniper Elite 5", mode: "action" },
  { title: "Resident Evil Village", mode: "action" },
  { title: "Prince of Persia: The Lost Crown", mode: "action" },
  { title: "WWE 2K25", mode: "sports" },
  { title: "Ghost Recon", mode: "action" },
  { title: "NFS Heat", mode: "racing" },
  { title: "MotoGP 20", mode: "racing" },
  { title: "Marvel's Spider-Man", mode: "action" },
  { title: "GTA 5", mode: "action" },
  { title: "God of War", mode: "action" },
  { title: "Ghost of Tsushima", mode: "action" },
  { title: "Far Cry 6", mode: "action" },
  { title: "FC 25", mode: "sports" },
  { title: "Devil May Cry 5", mode: "action" },
];

const PERKS = [
  { icon: Gamepad2, title: "Grab a controller", text: "Choose your game and get straight into the action." },
  { icon: Users, title: "Play together", text: "Challenge your friends and turn every match into a memory." },
  { icon: Trophy, title: "Take the win", text: "Play your best, settle the score and claim the bragging rights." },
];

const IMAGE = { src: "/images/gaming/ps4-games.jpg", alt: "PS4 gaming zone at SNM Fun World" };
const CTA_HREF = "#gallery";
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
function GamingZone() {
  const [mode, setMode] = useState("all");
  const reduce = useReducedMotion();

  const visible = useMemo(
    () => (mode === "all" ? LIBRARY : LIBRARY.filter((g) => g.mode === mode)),
    [mode]
  );
  const activeMode = MODES.find((m) => m.id === mode);

  return (
    <section
      id="gaming"
      aria-labelledby="gaming-heading"
      className="overflow-hidden bg-[#0d0d0d] text-white"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ------------------------- Left ------------------------- */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-white/45">
                <span aria-hidden className="h-px w-8 bg-[#f72585]" />
                07 / Gaming Zone
              </p>

              <h2
                id="gaming-heading"
                className="mt-6 text-[clamp(3.25rem,7vw,6.5rem)] font-black leading-[0.88] tracking-[-0.065em]"
              >
                GAME
                <br />
                <span className="text-[#f72585]">ON.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                When the arcade isn't enough, take the competition to the gaming zone. Grab a controller, choose
                your game and challenge your crew.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/35">Choose your mode</p>

              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter games by mode">
                {MODES.map((m) => {
                  const on = m.id === mode;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setMode(m.id)}
                      className={`px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b] ${
                        on
                          ? "bg-[#f72585] text-white"
                          : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                      }`}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>

              <p className="mt-4 min-h-6 text-sm text-white/50" aria-live="polite">
                {activeMode.blurb}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-8">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                <GamingImage />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <p className="absolute bottom-4 left-4 text-2xl font-black leading-[0.9] tracking-[-0.05em]">
                  BRING YOUR <span className="text-[#ffd43b]">GAME.</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* ------------------------- Right: library ------------------------- */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-white/10 bg-[#141414]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em]">
                  <Gamepad2 size={17} aria-hidden className="text-[#f72585]" />
                  PS4 Library
                </p>
                <span className="text-xs font-bold tracking-[0.2em] text-white/40">
                  {pad(visible.length)} / {pad(LIBRARY.length)}
                </span>
              </div>

              <ul>
                <AnimatePresence initial={false} mode="popLayout">
                  {visible.map((game, i) => (
                    <motion.li
                      key={game.title}
                      layout={!reduce}
                      initial={reduce ? false : { opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: 16 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="group flex items-center gap-5 border-b border-white/10 px-5 py-4 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.04] sm:px-7"
                    >
                      <span className="w-7 shrink-0 text-xs font-bold tracking-[0.2em] text-white/30 transition-colors group-hover:text-[#f72585]">
                        {pad(i + 1)}
                      </span>
                      <span className="flex-1 text-lg font-black tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#ffd43b] sm:text-xl">
                        {game.title}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                        {game.mode}
                      </span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>

            <p className="mt-4 text-xs leading-5 text-white/35">
              Game titles are shown for information only. SNM Fun World is not affiliated with or endorsed by
              PlayStation or any game publisher.
            </p>
          </Reveal>
        </div>

        {/* ------------------------- Perks ------------------------- */}
        <ul className="mt-20 grid border-t border-white/10 md:grid-cols-3 lg:mt-24">
          {PERKS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex gap-4 border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
            >
              <Icon size={18} aria-hidden className="mt-0.5 shrink-0 text-[#f72585]" />
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.18em]">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/45">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ------------------------- CTA ------------------------- */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/35">Ready?</p>
            <p className="mt-2 text-xl font-black tracking-[-0.03em]">Pick a game. Pick your opponent.</p>
          </div>

          <a
            href={CTA_HREF}
            className="group inline-flex w-full items-center justify-between gap-4 border border-white/25 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#f72585] hover:bg-[#f72585] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b] md:w-auto"
          >
            See more
            <ArrowUpRight
              size={17}
              aria-hidden
              className="transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function GamingImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#2a1240] p-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em]">Image not found</span>
        <code className="text-[11px] opacity-70">public{IMAGE.src}</code>
      </div>
    );
  }

  return (
    <img
      src={IMAGE.src}
      alt={IMAGE.alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

export default GamingZone;