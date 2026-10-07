import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------
   Content
------------------------------------------------------------------------- */
const MAIN_IMAGE = { src: "/images/gallery/fun-world-main.jpg", alt: "SNM Fun World entrance in Ranipet" };

const EXPERIENCES = [
  {
    id: "arcade",
    number: "01",
    title: "ARCADE",
    description: "Racing, shooting, sports and classic arcade games for every age.",
    image: "/images/arcade/arcade-main.webp",
    href: "#games",
    accent: "#7b4fd6",
  },
  {
    id: "rides",
    number: "02",
    title: "KIDS RIDES",
    description: "Fun rides and little adventures made for our youngest visitors.",
    image: "/images/rides/kids-rides.webp",
    href: "#rides",
    accent: "#ff8a1f",
  },
  {
    id: "soft-play",
    number: "03",
    title: "SOFT PLAY",
    description: "Climb, slide, jump and play in a safe, colourful environment.",
    image: "/images/gallery/soft-play.jpg",
    href: "#soft-play",
    accent: "#28a9e8",
  },
];

const EASE = [0.22, 1, 0.36, 1];
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111]";

/* -------------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------- */
function Reveal({ as = "div", y = 26, x = 0, delay = 0, className, children }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

function Img({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex flex-col items-center justify-center gap-1 bg-[#e3ddcf] p-2 text-center ${className}`}>
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/50">Image not found</span>
        <code className="break-all text-[9px] text-black/40">public{src}</code>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={className} />;
}

/* -------------------------------------------------------------------------
   Section
------------------------------------------------------------------------- */
function Welcome() {
  return (
    <section
      id="fun"
      aria-labelledby="welcome-heading"
      className="bg-[#f5f1e8] text-[#111] lg:flex lg:min-h-[100svh] lg:items-center"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-12">
        {/* ------------------------- Intro ------------------------- */}
        <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-black/45">
              <span aria-hidden className="h-px w-8 bg-[#e51b75]" />
              Explore Fun World
            </p>
            <h2
              id="welcome-heading"
              className="mt-4 text-[clamp(2.5rem,5.2vw,4.75rem)] font-black leading-[0.92] tracking-[-0.06em]"
            >
              NOT JUST A PLACE
              <br />
              <span className="text-[#e51b75]">TO PLAY.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:pb-1">
            <p className="border-l border-black/15 pl-5 text-sm leading-6 text-black/60">
              Games, rides and play areas designed to bring families together and turn an ordinary day into
              something worth remembering.
            </p>
          </Reveal>
        </header>

        {/* ------------------------- Body ------------------------- */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* Photo with offset block */}
          <Reveal delay={0.05} className="relative lg:col-span-5">
            <div aria-hidden className="absolute -bottom-3 -left-3 hidden h-full w-[90%] bg-[#ffd43b] sm:block" />

            <figure className="relative h-full min-h-[260px] overflow-hidden bg-[#111] sm:min-h-[340px]">
              <Img src={MAIN_IMAGE.src} alt={MAIN_IMAGE.alt} className="absolute inset-0 h-full w-full object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5">
                <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                  SNM Fun World
                </span>
                <span className="mt-1 block text-4xl font-black leading-none tracking-[-0.05em] text-white">
                  PLAY MORE.
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Experiences */}
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-end justify-between border-b border-black/15 pb-3">
              <h3 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">CHOOSE YOUR FUN.</h3>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">01 — 03</span>
            </div>

            <ul>
              {EXPERIENCES.map((item, i) => (
                <Reveal as="li" key={item.id} delay={0.08 * i} y={20} className="list-none">
                  <a
                    href={item.href}
                    className={`group flex items-center gap-4 border-b border-black/15 py-4 transition-colors duration-300 hover:bg-white/60 sm:gap-6 ${focusRing}`}
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden bg-[#ddd] sm:h-24 sm:w-32">
                      <Img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-110"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ background: item.accent }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-black tracking-[0.22em] text-black/35">{item.number}</p>
                      <h4 className="text-2xl font-black leading-none tracking-[-0.04em] sm:text-3xl">{item.title}</h4>
                      <p className="mt-2 text-sm leading-5 text-black/55">{item.description}</p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#111] text-white transition-colors duration-300 group-hover:bg-[#e51b75]">
                      <ArrowUpRight
                        size={17}
                        aria-hidden
                        className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="sr-only">Explore {item.title}</span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;