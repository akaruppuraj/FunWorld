import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";

/* -------------------------------------------------------------------------
   Content — edit here
------------------------------------------------------------------------- */
const HERO = {
  video: "/videos/funworld-hero.mp4",
  poster: "/images/funworld-hero-poster.webp",
  lines: ["PLAY MORE.", "SMILE MORE."],
  prefix: "Arcade games, kids rides, soft play and PS4 gaming —",
  rotating: ["arcade", "kids rides", "soft play", "PS4 gaming"],
  suffix: "all under one roof, made for the whole family.",
  primary: { label: "Explore the fun", href: "#fun" },
  secondary: { label: "Book on WhatsApp", href: "https://wa.me/919629109053" },
};

/** Letter colours, cycled across the headline (taken from the Fun World logo). */
const LETTER_COLORS = ["#ff4d4d", "#ff8a1f", "#ffd43b", "#3ddc84", "#28a9e8", "#b07bff", "#ff4fa0"];

const EASE = [0.22, 1, 0.36, 1];
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b]";

/* -------------------------------------------------------------------------
   Animated headline: every letter rises in, has its own colour, and lifts on hover
------------------------------------------------------------------------- */
function AnimatedLine({ text, lineIndex, offset, reduce }) {
  return (
    <span className="block overflow-hidden whitespace-nowrap pb-[0.08em]" aria-hidden>
      {[...text].map((ch, i) => {
        const n = offset + i;
        return (
          <motion.span
            key={i}
            className="inline-block cursor-default text-[color:var(--c)] transition-transform duration-300 motion-safe:hover:-translate-y-2 motion-safe:hover:-rotate-3"
            style={{ "--c": ch === "." ? "#ffffff" : LETTER_COLORS[n % LETTER_COLORS.length] }}
            initial={reduce ? false : { y: "110%", rotate: 8 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 + lineIndex * 0.25 + i * 0.045, ease: EASE }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        );
      })}
    </span>
  );
}

/** Cycles through a list of words with a slide transition. */
function RotatingWord({ words, reduce }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length, reduce]);

  return (
    <span className="relative inline-flex h-[1.4em] min-w-[7.5em] items-center overflow-hidden align-middle">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={reduce ? false : { y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="absolute left-0 font-black uppercase tracking-[0.08em]"
          style={{ color: LETTER_COLORS[index % LETTER_COLORS.length] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* -------------------------------------------------------------------------
   Section
------------------------------------------------------------------------- */
function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);

  let offset = 0;

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#111] text-white"
    >
      {/* Media */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 -top-[6%] h-[112%]">
        <video
          className="h-full w-full object-cover"
          src={HERO.video}
          poster={HERO.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </motion.div>

      {/* Treatment */}
      <div aria-hidden className="absolute inset-0 bg-black/25" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#f72585]/20 via-transparent to-[#28a9e8]/20" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-[1180px] px-5 pb-24 pt-28 sm:px-8 lg:px-10">
          <h1 id="hero-heading" className="text-[clamp(3rem,9vw,8.5rem)] font-black leading-[0.9] tracking-[-0.07em]">
            <span className="sr-only">{HERO.lines.join(" ")}</span>
            {HERO.lines.map((line, i) => {
              const el = <AnimatedLine key={line} text={line} lineIndex={i} offset={offset} reduce={reduce} />;
              offset += line.length;
              return el;
            })}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 max-w-xl text-base leading-8 text-white/85 sm:text-lg"
          >
            {HERO.prefix}{" "}
            <span className="sr-only">{HERO.rotating.join(", ")} </span>
            <span aria-hidden className="mx-1 inline-block rounded-sm bg-black/30 px-2 text-base sm:text-lg">
              <RotatingWord words={HERO.rotating} reduce={reduce} />
            </span>{" "}
            {HERO.suffix}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={HERO.primary.href}
              className={`group inline-flex items-center gap-3 bg-[#f72585] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#ffd43b] hover:text-black ${focusRing}`}
            >
              {HERO.primary.label}
              <ArrowRight size={16} aria-hidden className="transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
            </a>

            <a
              href={HERO.secondary.href}
              target="_blank"
              rel="noreferrer"
              className={`group inline-flex items-center gap-3 border border-white/40 bg-black/15 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white hover:text-black ${focusRing}`}
            >
              <MessageCircle size={16} aria-hidden />
              {HERO.secondary.label}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-20 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between">
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 sm:block">SNM Fun World</span>

          <motion.a
            href="#fun"
            animate={reduce ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className={`group mx-auto flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white sm:mx-0 ${focusRing}`}
          >
            Scroll to play
            <span className="flex h-8 w-8 items-center justify-center border border-white/35 transition-colors group-hover:border-white">
              <ArrowDown size={14} aria-hidden />
            </span>
          </motion.a>

          <span className="hidden text-right text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 sm:block">
            Games · Rides · Smiles
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;