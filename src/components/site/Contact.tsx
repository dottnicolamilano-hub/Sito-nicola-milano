import { PhoneCall, Mail, MapPin, Shield, Instagram, type LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  breakAll?: boolean;
};

const items: Item[] = [
  { icon: PhoneCall, label: "Telefono", value: "+39 351 760 4612", href: "tel:+393517604612" },
  { icon: Mail, label: "Email", value: "dott.nicolamilano@gmail.com", href: "mailto:dott.nicolamilano@gmail.com", breakAll: true },
  { icon: Instagram, label: "Instagram", value: "@nicolamilano.psi", href: "https://www.instagram.com/nicolamilano.psi/" },
  { icon: MapPin, label: "Studi", value: "Via Ercole Pasquali 9, Roma (Piazza Bologna) · Via delle Vestali 2, Roma (Furio Camillo)" },
  { icon: Shield, label: "PEC", value: "nicolafrancescomilano@psypec.it", breakAll: true },
];

export function Contact() {
  return (
    <section id="contatti" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Contatti</h2>
          <div className="mt-4 h-px w-16 bg-warm" />
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Per prenotare un primo colloquio o ricevere informazioni puoi contattarmi
            attraverso uno dei canali qui sotto.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href, breakAll }) => {
            const inner = (
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary-foreground">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.14em] text-primary-foreground/70">
                    {label}
                  </p>
                  <p
                    className={`mt-1 text-primary-foreground ${
                      breakAll ? "text-[13px] [word-break:break-all]" : "text-[15px]"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}