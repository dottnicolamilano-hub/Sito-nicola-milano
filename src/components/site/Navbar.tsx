import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#chi-sono", label: "Chi Sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#tariffe", label: "Tariffe" },
  { href: "#formazione", label: "Formazione" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors ${
        scrolled ? "bg-background/80 border-b border-border" : "bg-background/40"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-serif text-xl text-primary tracking-tight">
          Dott. Milano
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Apri menu"
          className="md:hidden text-primary"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground hover:text-primary border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}