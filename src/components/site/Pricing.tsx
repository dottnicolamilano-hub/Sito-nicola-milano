import {
  UserRound,
  Home,
  MessageCircle,
  Users,
  GraduationCap,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Tier = {
  icon: LucideIcon;
  title: string;
  price: string;
  duration: string;
  schedule: string;
  mode: string;
  badge?: { label: string; tone: "warm" | "green" };
  note?: string;
};

const tiers: Tier[] = [
  { icon: UserRound, title: "Psicoterapia Individuale", price: "€55", duration: "a seduta · 50 minuti", schedule: "Lunedì – Sabato, 8:00 – 20:00", mode: "In presenza e online" },
  { icon: Home, title: "Psicoterapia Domiciliare", price: "€60", duration: "a seduta · 1 ora", schedule: "Lunedì – Sabato, 8:00 – 20:00", mode: "Municipi I II III IV V VI VII VIII" },
  { icon: MessageCircle, title: "Sostegno Psicologico", price: "€50", duration: "a seduta · 50 minuti", schedule: "Lunedì – Sabato, 8:00 – 20:00", mode: "In presenza e online" },
  { icon: Users, title: "Psicoterapia di Gruppo e Familiare", price: "€70", duration: "a seduta · 1 ora", schedule: "Frequenza settimanale", mode: "In presenza e online" },
  { icon: GraduationCap, title: "Tariffa Agevolata Giovani (18–26 anni)", price: "€45", duration: "a seduta", schedule: "Psicoterapia individuale e sostegno psicologico", mode: "In presenza e online", badge: { label: "Accesso facilitato", tone: "warm" } },
  { icon: Heart, title: "Tariffa Sociale — ISEE sotto €15.000", price: "€40", duration: "a seduta", schedule: "Psicoterapia individuale e sostegno psicologico", mode: "In presenza e online", badge: { label: "Tariffa sociale", tone: "green" }, note: "Per maggiori informazioni sulla tariffa sociale contatta dott.nicolamilano@gmail.com o il +39 351 760 4612" },
];

function Badge({ label, tone }: { label: string; tone: "warm" | "green" }) {
  const cls =
    tone === "warm"
      ? "bg-warm text-warm-foreground"
      : "bg-emerald-600 text-white";
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${cls}`}>
      {label}
    </span>
  );
}

export function Pricing() {
  return (
    <section id="tariffe" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading>Tariffe</SectionHeading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map(({ icon: Icon, title, price, duration, schedule, mode, badge, note }) => (
            <div key={title} className="flex flex-col">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary">
                    <Icon size={20} />
                  </div>
                  {badge && <Badge {...badge} />}
                </div>
                <h3 className="mt-5 font-serif text-lg text-primary leading-snug">{title}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-3xl text-primary">{price}</span>
                  <span className="text-sm text-muted-foreground">{duration}</span>
                </div>
                <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                  <p>{schedule}</p>
                  <p>{mode}</p>
                </div>
              </article>
              {note && (
                <p className="mt-3 px-2 text-xs leading-relaxed text-muted-foreground">
                  {note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}