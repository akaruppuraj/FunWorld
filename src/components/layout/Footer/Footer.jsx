import { ArrowUpRight, MessageCircle } from "lucide-react";
import FooterLinks from "./FooterLinks";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#0b0b0b] text-white">
      {/* --------------------------------
          BRAND STATEMENT
      -------------------------------- */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <p className="mb-6 text-xs font-black uppercase tracking-[0.25em] text-white/30">
                SNM Fun World
              </p>

              <h2 className="max-w-6xl text-[clamp(3.8rem,9vw,9rem)] font-black leading-[0.78] tracking-[-0.075em]">
                PLAY
                <br />
                <span className="text-[#ffd43b]">MORE.</span>
                <br />
                <span className="text-[#f72585]">SMILE MORE.</span>
              </h2>
            </div>

            <div className="lg:col-span-3 lg:pb-2">
              <p className="border-l border-white/15 pl-6 text-sm leading-7 text-white/45">
                Games, rides, soft play and unforgettable moments for families,
                kids and friends in Ranipet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------
          FOOTER CONTENT
      -------------------------------- */}
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand / Contact */}
          <div className="lg:col-span-5">
            <div className="max-w-sm">
              <h3 className="text-2xl font-black tracking-[-0.04em]">
                SNM FUN WORLD
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Your place for arcade games, kids rides, soft play and gaming
                fun.
              </p>

              <div className="mt-8">
                <a
                  href="tel:+919629109053"
                  className="text-xl font-black tracking-[-0.03em] transition-colors duration-300 hover:text-[#ffd43b]"
                >
                  96291 09053
                </a>

                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/30">
                  Ranipet · Tamil Nadu
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://wa.me/919629109053"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/60 transition-all duration-300 hover:border-[#f72585] hover:bg-[#f72585] hover:text-white"
                >
                  <MessageCircle size={18} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/60 transition-all duration-300 hover:border-[#f72585] hover:bg-[#f72585] hover:text-white"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 md:col-span-1 lg:col-span-4">
            <FooterLinks />
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30">
              Ready to play?
            </p>

            <p className="mt-5 text-2xl font-black leading-tight tracking-[-0.04em]">
              Make your next day
              <br />
              a fun day.
            </p>

            <a
              href="#location"
              className="group mt-7 inline-flex items-center gap-4 bg-[#f72585] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-[#ffd43b] hover:text-black"
            >
              Visit Us

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* --------------------------------
          BOTTOM BAR
      -------------------------------- */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white/25 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14">
          <p>
            © {year} SNM Fun World. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>Ranipet · Tamil Nadu</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>Play More · Smile More</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;