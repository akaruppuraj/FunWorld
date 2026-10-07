import { useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-40 px-4 py-5 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/25 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6">

          {/* BRAND */}
          <a
            href="#home"
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-yellow-400 to-blue-500 text-lg shadow-lg">
              🌎
            </div>

            <div className="leading-none">
              <div className="text-lg font-black tracking-tight text-white">
                FUN WORLD
              </div>

              <div className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
                PLAY MORE • SMILE MORE
              </div>
            </div>
          </a>

          {/* DESKTOP LINKS */}
          <NavLinks />

          {/* DESKTOP CTA */}
          <a
            href="#packages"
            className="group hidden items-center gap-2 rounded-full bg-[#f72585] px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-pink-500/30 transition hover:-translate-y-0.5 hover:bg-[#ff3b91] lg:flex"
          >
            BOOK NOW

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}

export default Navbar;