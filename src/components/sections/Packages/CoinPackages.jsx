import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock3, Coins, Sparkles } from "lucide-react";

/* -------------------------------------------------------------------------
   Content
------------------------------------------------------------------------- */
const PACKAGES = [
  {
    id: "starter",
    number: "01",
    amount: "₹500",
    coins: 18,
    label: "Starter",
    description: "A simple way to jump into the arcade and start playing.",
  },
  {
    id: "best-value",
    number: "02",
    amount: "₹1000",
    coins: 40,
    label: "Best value",
    description: "More coins, more games and more time to make the most of your visit.",
    featured: true,
  },
];

const SOFT_PLAY = {
  price: "₹300",
  duration: "1 hour",
  image: "/images/gallery/soft-play.jpg",
  alt: "Kids playing in the soft play area at SNM Fun World",
};

const PERKS = [
  { icon: Coins, title: "Flexible", text: "Choose the package that suits your visit." },
  { icon: Clock3, title: "More play", text: "More coins mean more chances to play." },
  { icon: Sparkles, title: "All ages", text: "Fun for kids, families and friends." },
];

const CTA_HREF = "#location";
const EASE = [0.22, 1, 0.36, 1];

/* -------------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------- */
function Reveal({ as = "div", y = 28, delay = 0, duration = 0.7, className, children }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

const Eyebrow = ({ children, tone = "text-black/45", bar = "bg-[#f72585]" }) => (
  <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${tone}`}>
    <span aria-hidden className={`h-px w-8 ${bar}`} />
    {children}
  </p>
);

/* -------------------------------------------------------------------------
   Section
------------------------------------------------------------------------- */
function CoinPackages() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="overflow-hidden bg-[#f5f1e8] py-20 text-[#111] lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <Intro />
        <Packs />
        <SoftPlay />
        <Perks />
      </div>
    </section>
  );
}

/* ----------------------------- Intro ------------------------------------ */
function Intro() {
  return (
    <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <Reveal className="lg:col-span-7">
        <Eyebrow>03 / Packages</Eyebrow>
        <h2
          id="packages-heading"
          className="mt-6 text-[clamp(3.25rem,7.5vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]"
        >
          PLAY
          <br />
          <span className="text-[#f72585]">MORE.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9 lg:pb-3">
        <p className="border-l border-black/15 pl-5 text-sm leading-7 text-black/60 sm:text-base">
          Choose your coin package, load up and get straight into the games. Simple, flexible and made for a
          full day of fun.
        </p>
      </Reveal>
    </header>
  );
}

/* ----------------------------- Packages (staggered) --------------------- */
function Packs() {
  const [starter, featured] = PACKAGES;

  return (
    <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-0">
      {/* Smaller card sits lower and tucks under the featured one */}
      <div className="lg:col-span-5 lg:mt-24 lg:pr-0">
        <PackageCard {...starter} index={0} />
      </div>

      {/* Featured card is larger and overlaps the starter card's edge */}
      <div className="lg:relative lg:z-10 lg:col-span-7 lg:-ml-8">
        <PackageCard {...featured} index={1} />
      </div>
    </div>
  );
}

function PackageCard({ number, amount, coins, label, description, featured, index }) {
  const tone = featured
    ? { card: "bg-[#f72585] text-white", muted: "text-white/70", faint: "text-white/50", rule: "border-white/25" }
    : { card: "bg-white text-[#111]", muted: "text-black/55", faint: "text-black/35", rule: "border-black/15" };

  return (
    <Reveal
      as="article"
      delay={index * 0.1}
      className={`flex flex-col p-7 sm:p-10 ${tone.card} ${
        featured ? "min-h-[460px] lg:min-h-[520px] lg:p-12" : "min-h-[400px] lg:min-h-[420px]"
      }`}
    >
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em]">
        <span className={tone.faint}>{number}</span>
        {featured && <span className="bg-white px-3 py-1 text-[10px] font-black text-[#f72585]">Recommended</span>}
      </div>

      <div className="mt-14">
        <p className={`text-xs font-bold uppercase tracking-[0.22em] ${tone.faint}`}>{label}</p>

        <p
          className={`mt-4 font-black leading-[0.85] tracking-[-0.07em] ${
            featured ? "text-[clamp(4.5rem,9vw,8rem)]" : "text-[clamp(3.75rem,6.5vw,6rem)]"
          }`}
        >
          {amount}
        </p>

        <p className="mt-6 flex items-center gap-3 text-2xl font-black tracking-[-0.02em]">
          <Coins size={20} aria-hidden className={featured ? "text-[#ffd43b]" : "text-[#f72585]"} />
          {coins} COINS
        </p>

        <p className={`mt-4 max-w-sm text-sm leading-6 ${tone.muted}`}>{description}</p>
      </div>

      <a
        href={CTA_HREF}
        className={`group mt-auto flex items-center justify-between border-t pt-5 text-xs font-black uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b] ${tone.rule}`}
      >
        <span>Get this package</span>
        <span
          className={`flex h-10 w-10 items-center justify-center transition-colors duration-300 ${
            featured
              ? "bg-white text-[#f72585] group-hover:bg-[#ffd43b] group-hover:text-black"
              : "bg-[#111] text-white group-hover:bg-[#f72585]"
          }`}
        >
          <ArrowUpRight
            size={17}
            aria-hidden
            className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
          />
        </span>
      </a>
    </Reveal>
  );
}

/* ----------------------------- Soft play (overlapping) ------------------ */
function SoftPlay() {
  return (
    <div className="mt-20 grid items-center gap-0 lg:mt-28 lg:grid-cols-12">
      <Reveal className="relative overflow-hidden lg:col-span-5">
        <div className="aspect-[4/3] lg:aspect-[4/5]">
          <img
            src={SOFT_PLAY.image}
            alt={SOFT_PLAY.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>

      {/* Text panel overlaps the photo on desktop and sits slightly off-centre vertically */}
      <Reveal
        delay={0.1}
        className="bg-[#17152b] p-7 text-white sm:p-10 lg:relative lg:z-10 lg:col-span-7 lg:-ml-16 lg:mt-24 lg:p-14"
      >
        <Eyebrow tone="text-white/45" bar="bg-[#ffd43b]">
          Little ones
        </Eyebrow>

        <h3 className="mt-7 text-[clamp(2.75rem,5.5vw,5rem)] font-black leading-[0.9] tracking-[-0.06em]">
          SOFT
          <br />
          <span className="text-[#ffd43b]">PLAY.</span>
        </h3>

        <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base">
          A colourful space where kids can climb, slide, explore and enjoy their own little adventure.
        </p>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Entry</p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-[-0.05em]">{SOFT_PLAY.price}</span>
              <span className="text-sm text-white/45">/ {SOFT_PLAY.duration}</span>
            </p>
          </div>

          <a
            href={CTA_HREF}
            className="group inline-flex items-center gap-3 border border-white/25 px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] transition-colors duration-300 hover:border-[#ffd43b] hover:bg-[#ffd43b] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b]"
          >
            Plan your visit
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Reveal>
    </div>
  );
}

/* ----------------------------- Perks ------------------------------------ */
function Perks() {
  return (
    <ul className="mt-20 grid border-t border-black/10 md:grid-cols-3 lg:mt-28">
      {PERKS.map(({ icon: Icon, title, text }) => (
        <li
          key={title}
          className="flex gap-4 border-b border-black/10 py-6 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
        >
          <Icon size={17} aria-hidden className="mt-0.5 shrink-0 text-[#f72585]" />
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.18em]">{title}</h4>
            <p className="mt-2 max-w-xs text-sm leading-6 text-black/50">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CoinPackages;