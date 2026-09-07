import { profile } from "@/data/content";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-[#0a0a0a]/70 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-300"
        >
          {profile.name.split(" ")[0]}<span className="text-emerald-400">.</span>
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs sm:text-sm text-white/40 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
