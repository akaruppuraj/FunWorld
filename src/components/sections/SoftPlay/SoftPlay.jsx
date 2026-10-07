import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock3, ShieldCheck, Users } from "lucide-react";

/* -------------------------------------------------------------------------
   Content
------------------------------------------------------------------------- */
const IMAGE = {
  src: "/images/gallery/soft-play.jpg",
  alt: "Kids playing in the soft play area at SNM Fun World",
};

const OFFER = { price: "₹300", duration: "1 hour", label: "Soft Play Entry" };

const DETAILS = [
  { icon: Clock3, title: "One hour", text: "A simple one-hour play session for kids to explore and enjoy." },
  { icon: Users, title: "For little ones", text: "A dedicated environment designed around active children's play." },
  { icon: ShieldCheck, title: "Play & explore", text: "Climb, slide, move and discover at their own pace." },
];

const ACTIVITIES = ["Climb", "Crawl", "Slide", "Explore", "Repeat"];

const CTA_HREF = "#location";
const EASE = [0.22, 1, 0.36, 1];

/* -------------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------- */
function Reveal({ as = "div", y = 28, x = 0, delay = 0, className, children }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------
   Section
------------------------------------------------------------------------- */
function SoftPlay() {
  return (
    <section
      id="soft-play"
      aria-labelledby="soft-play-heading"
      className="overflow-hidden bg-white text-[#111]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <Copy />
          <Visual />
        </div>
      </div>

      <ActivityStrip />
    </section>
  );
}

/* ----------------------------- Copy column ------------------------------ */
function Copy() {
  return (
    <div className="lg:col-span-6">
      <Reveal>
        <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-black/45">
          <span aria-hidden className="h-px w-8 bg-[#28a9e8]" />
          05 / Soft Play
        </p>

        <h2
          id="soft-play-heading"
          className="mt-6 text-[clamp(3.25rem,7vw,6.5rem)] font-black leading-[0.88] tracking-[-0.065em]"
        >
          CLIMB.
          <br />
          <span className="text-[#28a9e8]">PLAY.</span>
          <br />
          REPEAT.
        </h2>

        <p className="mt-7 max-w-md text-sm leading-7 text-black/60 sm:text-base">
          A dedicated play space for little adventurers to climb, crawl, slide and explore at their own pace.
        </p>
      </Reveal>

      <ul className="mt-10 space-y-3">
        {DETAILS.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={0.08 * i} y={20} className="list-none">
            <div className="group flex items-start gap-5 border border-black/10 bg-[#f4fbff] p-5 transition-colors duration-300 hover:border-[#28a9e8] sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#28a9e8] text-white">
                <Icon size={20} aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.16em]">{title}</h3>
                <p className="mt-1.5 max-w-sm text-sm leading-6 text-black/55">{text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------- Visual column ---------------------------- */
function Visual() {
  return (
    <Reveal x={24} y={0} delay={0.1} className="relative lg:col-span-6 lg:pl-6">
      {/* Offset colour block behind the photo */}
      <div aria-hidden className="absolute -right-3 top-6 hidden h-full w-[88%] bg-[#ffd43b] sm:block lg:-right-5" />

      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e8f4fb] sm:aspect-[5/6]">
          <SoftPlayImage />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          <p className="absolute left-5 top-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/85">
            <span aria-hidden className="h-2 w-2 bg-[#28a9e8]" />
            Soft Play Zone
          </p>

          <p className="absolute bottom-6 left-5 text-3xl font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-4xl">
            BIG
            <br />
            <span className="text-[#ffd43b]">ADVENTURES.</span>
          </p>
        </div>

        <PriceTicket />
      </div>
    </Reveal>
  );
}

/** Overlaps the bottom-left corner of the photo on larger screens. */
function PriceTicket() {
  return (
    <div className="relative z-10 -mt-px bg-[#111] p-6 text-white sm:p-7 lg:absolute lg:-bottom-8 lg:-left-14 lg:mt-0 lg:w-[290px]">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/50">{OFFER.label}</p>

      <p className="mt-2 flex items-baseline gap-2">
        <span className="text-5xl font-black tracking-[-0.06em]">{OFFER.price}</span>
        <span className="text-sm text-white/55">/ {OFFER.duration}</span>
      </p>

      {/* Ticket perforation */}
      <div aria-hidden className="my-5 border-t border-dashed border-white/25" />

      <a
        href={CTA_HREF}
        className="group inline-flex w-full items-center justify-between bg-[#28a9e8] px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#ffd43b] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#28a9e8]"
      >
        Plan your visit
        <ArrowUpRight
          size={17}
          aria-hidden
          className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
        />
      </a>
    </div>
  );
}

function SoftPlayImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#28a9e8] p-6 text-center text-white">
        <span className="text-xs font-bold uppercase tracking-[0.2em]">Image not found</span>
        <code className="text-[11px] opacity-80">public{IMAGE.src}</code>
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

/* ----------------------------- Activity strip --------------------------- */
function ActivityStrip() {
  return (
    <div className="bg-[#28a9e8] text-white">
      <ul className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-6 sm:px-8 lg:px-10">
        {ACTIVITIES.map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-8 text-2xl font-black uppercase tracking-[-0.03em] sm:text-4xl"
          >
            {item}
            {i < ACTIVITIES.length - 1 && (
              <span aria-hidden className="hidden h-2 w-2 bg-[#ffd43b] sm:block" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SoftPlay;