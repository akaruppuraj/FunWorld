import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MoveRight } from "lucide-react";

/* -------------------------------------------------------------------------
   Content
------------------------------------------------------------------------- */
const RIDES = [
  {
    id: "little-adventures",
    number: "01",
    title: "LITTLE ADVENTURES",
    note: "Gentle rides for first-time explorers.",
    image: "/images/rides/kids-rides1.jpg",
  },
  {
    id: "big-smiles",
    number: "02",
    title: "BIG SMILES",
    note: "Colour, movement and plenty of laughs.",
    image: "/images/rides/kids-rides2.jpg",
  },
  {
    id: "non-stop-fun",
    number: "03",
    title: "NON-STOP FUN",
    note: "One more go? Always one more go.",
    image: "/images/rides/kids-rides3.jpg",
  },
];

const CTA_HREF = "#location";
const EASE = [0.22, 1, 0.36, 1];

/* -------------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------- */
function Reveal({ as = "div", y = 24, delay = 0, className, children }) {
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
function KidsRides() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = RIDES[active];

  return (
    <section
      id="rides"
      aria-labelledby="rides-heading"
      className="overflow-hidden bg-[#ffd43b] text-[#111]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- Left: heading + interactive index ---------------- */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-black/50">
                <span aria-hidden className="h-px w-8 bg-[#111]" />
                04 / Kids Rides
              </p>

              <h2
                id="rides-heading"
                className="mt-6 text-[clamp(3.25rem,7vw,6.5rem)] font-black leading-[0.88] tracking-[-0.065em]"
              >
                SMALL
                <br />
                RIDES.
                <br />
                <span className="text-[#f72585]">BIG JOY.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-black/60 sm:text-base">
                Little visitors get their own world of movement, colour and adventure — with rides made for
                unforgettable smiles.
              </p>
            </Reveal>

            {/* Mobile preview sits between the intro and the list */}
            <div className="mt-10 lg:hidden">
              <Preview ride={current} reduce={reduce} />
            </div>

            <Reveal as="ul" delay={0.1} className="mt-10 border-t border-black/20 lg:mt-14">
              {RIDES.map((ride, i) => (
                <li key={ride.id} className="border-b border-black/20">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className="group flex w-full items-center gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111] sm:gap-8 sm:py-6"
                  >
                    <span
                      className={`w-8 shrink-0 text-xs font-black tracking-[0.2em] transition-colors ${
                        i === active ? "text-[#f72585]" : "text-black/40"
                      }`}
                    >
                      {ride.number}
                    </span>

                    <span className="flex-1">
                      <span
                        className={`block text-2xl font-black leading-none tracking-[-0.04em] transition-transform duration-300 sm:text-4xl ${
                          i === active ? "motion-safe:translate-x-2" : ""
                        }`}
                      >
                        {ride.title}
                      </span>
                      <span className="mt-2 block text-sm text-black/55">{ride.note}</span>
                    </span>

                    <span
                      aria-hidden
                      className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${
                        i === active ? "bg-[#111] text-[#ffd43b]" : "bg-transparent text-black/30"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </span>
                  </button>
                </li>
              ))}
            </Reveal>
          </div>

          {/* ---------------- Right: preview (desktop) ---------------- */}
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:flex lg:items-center">
            <div className="w-full">
              <Preview ride={current} reduce={reduce} />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Made for little explorers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Closing strip ---------------- */}
      <div className="border-t border-black/20">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.18em]">
            <span className="flex h-10 w-10 items-center justify-center bg-[#111] text-[#ffd43b]">
              <MoveRight size={18} aria-hidden />
            </span>
            More rides. More memories.
          </p>

          <a
            href={CTA_HREF}
            className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111]"
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
    </section>
  );
}

/* ----------------------------- Preview ---------------------------------- */
function Preview({ ride, reduce }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111] lg:aspect-[5/6]">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={ride.id}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <RideImage ride={ride} />
        </motion.div>
      </AnimatePresence>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <p className="absolute bottom-5 left-5 text-3xl font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-4xl">
        THEIR
        <br />
        <span className="text-[#ffd43b]">OWN</span> WORLD.
      </p>

      <span className="absolute right-5 top-5 text-xs font-black tracking-[0.2em] text-white/70">
        {ride.number} / {String(RIDES.length).padStart(2, "0")}
      </span>
    </div>
  );
}

/** Shows the ride photo, or a visible hint if the file path is wrong. */
function RideImage({ ride }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#f72585] p-6 text-center text-white">
        <span className="text-6xl font-black tracking-[-0.05em]">{ride.number}</span>
        <span className="text-xs font-bold uppercase tracking-[0.2em]">Image not found</span>
        <code className="text-[11px] opacity-80">public{ride.image}</code>
      </div>
    );
  }

  return (
    <img
      src={ride.image}
      alt={ride.title}
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

export default KidsRides;