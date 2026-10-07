import { navigationLinks } from "../../../data/navigation";

function NavLinks({ mobile = false, onLinkClick }) {
  return (
    <div
      className={
        mobile
          ? "flex flex-col gap-5"
          : "hidden items-center gap-7 lg:flex"
      }
    >
      {navigationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={
            mobile
              ? "text-2xl font-black text-white transition hover:text-yellow-300"
              : "text-sm font-bold text-white/90 transition hover:text-yellow-300"
          }
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;