import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";

/* -------------------------------------------------------------------------
   Content
------------------------------------------------------------------------- */
const CONTACT = { phoneDisplay: "96291 09053", phoneE164: "+919629109053", whatsapp: "919629109053" };

const OFFERS = [
  { label: "Arcade pack", price: "₹500", detail: "18 coins" },
  { label: "Arcade pack", price: "₹1000", detail: "40 coins", highlight: "Most popular" },
  { label: "Soft play", price: "₹300", detail: "1 hour" },
];

const EASE = [0.22, 1, 0.36, 1];
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b]";

/* -------------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------- */
function Reveal({ y = 26, x = 0, delay = 0, className, children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   Section — fits a single desktop screen
------------------------------------------------------------------------- */
function FinalCTA() {
  return (
    <section
      id="visit"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#f72585] text-white lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* ------------------------- Heading ------------------------- */}
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-white/70">
              <span aria-hidden className="h-px w-8 bg-white/70" />
              10 / Your Turn
            </p>

            <h2
              id="cta-heading"
              className="mt-5 text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.86] tracking-[-0.07em]"
            >
              READY
              <br />
              TO <span className="text-[#ffd43b]">PLAY?</span>
            </h2>

            <p className="mt-6 max-w-md border-l border-white/30 pl-5 text-sm leading-7 text-white/80 sm:text-base">
              Bring your family. Bring your friends. Bring your competitive side. Your next fun day is waiting at
              SNM Fun World.
            </p>
          </Reveal>

          {/* ------------------------- Offer ticket ------------------------- */}
          <Reveal x={24} y={0} delay={0.15} className="lg:col-span-5">
            <div className="bg-white p-6 text-[#111] shadow-[10px_10px_0_0_#111] sm:p-7">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/45">Today's play options</p>

              <ul className="mt-4 divide-y divide-dashed divide-black/20">
                {OFFERS.map(({ label, price, detail, highlight }) => (
                  <li key={`${label}-${price}`} className="flex items-center justify-between gap-4 py-3.5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/55">{label}</p>
                      {highlight && (
                        <span className="mt-1 inline-block bg-[#f72585] px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-white">
                          {highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-right">
                      <span className="block text-3xl font-black leading-none tracking-[-0.05em]">{price}</span>
                      <span className="mt-1 block text-xs font-bold text-black/50">{detail}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid gap-2.5">
                <a
                  href="#location"
                  className={`group inline-flex items-center justify-between bg-[#111] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#f72585] ${focusRing}`}
                >
                  Plan your visit
                  <ArrowRight size={17} aria-hidden className="transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 bg-[#25d366] px-4 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0b2a16] transition-colors duration-300 hover:bg-[#ffd43b] ${focusRing}`}
                  >
                    <MessageCircle size={16} aria-hidden />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneE164}`}
                    className={`inline-flex items-center justify-center gap-2 border border-black/25 px-4 py-3.5 text-xs font-black uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#111] hover:bg-[#111] hover:text-white ${focusRing}`}
                  >
                    <Phone size={16} aria-hidden />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ------------------------- Footer line ------------------------- */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/25 pt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/70 sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <span className="flex items-center gap-3">
            <MapPin size={15} aria-hidden />
            Ranipet · Tamil Nadu
          </span>
          <span>Play more · Smile more</span>
          <a href={`tel:${CONTACT.phoneE164}`} className={`transition-colors hover:text-white ${focusRing}`}>
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Subtle background type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -right-6 select-none text-[22vw] font-black leading-none tracking-[-0.09em] text-black/[0.06]"
      >
        FUN
      </div>
    </section>
  );
}

export default FinalCTA;