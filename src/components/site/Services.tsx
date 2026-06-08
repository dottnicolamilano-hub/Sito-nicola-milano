import { UserRound, Home, MessageCircle, Users, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: UserRound,
    title: "Psicoterapia Individuale",
    text: "Percorsi psicoterapeutici a indirizzo psicoanalitico per adulti e adolescenti, in presenza o online. Un lavoro orientato alla comprensione profonda del funzionamento psichico e alla trasformazione duratura.",
  },
  {
    icon: Home,
    title: "Psicoterapia Domiciliare",
    text: "Interventi psicoterapeutici a domicilio per chi non può o non vuole spostarsi. Disponibile nei Municipi I, II, III, IV, V, VI, VII e VIII di Roma.",
  },
  {
    icon: MessageCircle,
    title: "Sostegno Psicologico",
    text: "Colloqui di supporto psicologico per affrontare momenti di difficoltà, stress, cambiamenti di vita o sofferenze emotive che non richiedono un percorso psicoterapeutico strutturato.",
  },
  {
    icon: Users,
    title: "Psicoterapia di Gruppo e Familiare",
    text: "Sedute di psicoterapia in co-terapia rivolte a coppie, famiglie e gruppi. Un contesto che valorizza le dinamiche relazionali come strumento di cambiamento.",
  },
];

export function Services() {
  return (
    <section id="servizi" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading>Servizi</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-xl text-primary">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}