const footerLinks = {
  Explore: [
    { label: "Home", href: "#home" },
    { label: "Games", href: "#games" },
    { label: "Rides", href: "#rides" },
    { label: "Packages", href: "#packages" },
  ],
  Experience: [
    { label: "Soft Play", href: "#soft-play" },
    { label: "Gaming Zone", href: "#gaming" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ],
};

function FooterLinks() {
  return (
    <>
      {Object.entries(footerLinks).map(([title, links]) => (
        <div key={title}>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30">
            {title}
          </p>

          <nav className="mt-5 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-fit text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </>
  );
}

export default FooterLinks;