import { X } from "lucide-react";
import NavLinks from "./NavLinks";

function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17152b]/95 backdrop-blur-xl lg:hidden">
      <div className="flex h-full flex-col px-6 py-6">

        <div className="flex items-center justify-between">
          <div className="text-xl font-black text-white">
            FUN WORLD
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-1 items-center">
          <NavLinks
            mobile
            onLinkClick={onClose}
          />
        </div>

        <a
          href="https://wa.me/919629109053"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#f72585] px-6 py-4 text-center text-sm font-black text-white"
        >
          WHATSAPP US
        </a>

      </div>
    </div>
  );
}

export default MobileMenu;