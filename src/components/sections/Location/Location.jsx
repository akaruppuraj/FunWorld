import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Clock3, MapPin, MessageCircle, Navigation, Phone, Send } from "lucide-react";

/* -------------------------------------------------------------------------
   Business details (single source of truth)
------------------------------------------------------------------------- */
const BUSINESS = {
  name: "SNM Fun World",
  phoneDisplay: "96291 09053",
  phoneE164: "+919629109053",
  whatsapp: "919629109053",
  addressLines: ["Bengaluru Chennai Highway, Wallajah", "Ranipet, Tamil Nadu 632517"],
  lat: 12.93572,
  lng: 79.253599,
  hours: null, // e.g. "Mon–Sun · 10:00 AM – 9:00 PM"
};

const MAP_EMBED = `https://maps.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}&z=16&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.lat},${BUSINESS.lng}`;
const INTERESTS = ["Arcade coin pack", "Soft play", "Kids rides", "PS4 gaming", "Something else"];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd43b]";

/* -------------------------------------------------------------------------
   Section — designed to fit a single desktop screen
------------------------------------------------------------------------- */
function Location() {
  const reduce = useReducedMotion();

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="overflow-hidden bg-[#17152b] text-white lg:flex lg:min-h-[100svh] lg:items-center"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10 lg:py-10"
      >
        {/* Heading row */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-white/45">
              <span aria-hidden className="h-px w-8 bg-[#ffd43b]" />
              09 / Contact
            </p>
            <h2
              id="location-heading"
              className="mt-3 text-[clamp(2.5rem,5vw,4.25rem)] font-black leading-[0.9] tracking-[-0.06em]"
            >
              COME <span className="text-[#ffd43b]">PLAY.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/55 sm:text-right">
            Visit us, call us or message us on WhatsApp.
          </p>
        </header>

        {/* Main grid */}
        <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Left column */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-white/10">
              <Action icon={Phone} label="Call us" value={BUSINESS.phoneDisplay} href={`tel:${BUSINESS.phoneE164}`} />
              <Action
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with us"
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                external
              />
            </div>

            <div className="grid gap-4 border border-white/10 p-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 xl:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} aria-hidden className="mt-0.5 shrink-0 text-[#ffd43b]" />
                <address className="text-sm not-italic leading-6 text-white/75">
                  <strong className="block font-black text-white">{BUSINESS.name}</strong>
                  {BUSINESS.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 size={18} aria-hidden className="mt-0.5 shrink-0 text-[#ffd43b]" />
                <div className="text-sm leading-6 text-white/75">
                  <strong className="block font-black text-white">Opening hours</strong>
                  {BUSINESS.hours ?? "To be confirmed — message us before you visit."}
                </div>
              </div>
            </div>

            <QuickForm />
          </div>

          {/* Map */}
          <div className="flex flex-col border border-white/10 bg-[#222036] lg:col-span-7">
            <div className="h-[280px] flex-1 sm:h-[340px] lg:h-auto lg:min-h-[420px]">
              <iframe
                title={`Map showing ${BUSINESS.name}, Ranipet`}
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                <MapPin size={14} aria-hidden className="text-[#f72585]" />
                {BUSINESS.name} · Ranipet
              </p>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd43b] hover:underline ${focusRing}`}
              >
                Get directions
                <Navigation size={14} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ----------------------------- Pieces ----------------------------------- */
function Action({ icon: Icon, label, value, href, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group flex items-center gap-3 bg-[#17152b] p-4 transition-colors duration-300 hover:bg-white/[0.05] ${focusRing}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f72585]">
        <Icon size={17} aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{label}</span>
        <span className="block truncate text-base font-black tracking-[-0.02em] transition-colors group-hover:text-[#ffd43b]">
          {value}
        </span>
      </span>
    </a>
  );
}

/** Static prototype: builds a WhatsApp message instead of posting to a backend. */
function QuickForm() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);

  const submit = (e) => {
    e.preventDefault();
    const text = `Hi ${BUSINESS.name}! I'm ${name.trim() || "a visitor"}. I'm interested in: ${interest}.`;
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const field =
    "w-full border border-white/15 bg-white/[0.04] px-3.5 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#ffd43b] focus:outline-none";

  return (
    <form onSubmit={submit} className="border border-white/10 p-5">
      <p className="text-sm font-black uppercase tracking-[0.16em]">Quick message</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <label>
          <span className="sr-only">Your name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label>
          <span className="sr-only">I'm interested in</span>
          <select value={interest} onChange={(e) => setInterest(e.target.value)} className={field}>
            {INTERESTS.map((o) => (
              <option key={o} value={o} className="bg-[#17152b]">
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        className={`group mt-3 inline-flex w-full items-center justify-between bg-[#25d366] px-5 py-3.5 text-xs font-black uppercase tracking-[0.18em] text-[#0b2a16] transition-colors duration-300 hover:bg-[#ffd43b] ${focusRing}`}
      >
        Send on WhatsApp
        <Send size={16} aria-hidden className="transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
      </button>
    </form>
  );
}

export default Location;