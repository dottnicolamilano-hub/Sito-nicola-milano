import { Award, Star, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    title: "Laurea Magistrale in Psicopatologia Dinamica dello Sviluppo",
    meta: "Sapienza, Roma · Voto: 110 e lode · Percorso di Eccellenza",
    thesis:
      "Tesi: «Una comprensione psicodinamica dei disturbi alimentari nell'ottica della profonda connessione tra mente, corpo, linguaggio e relazioni»",
  },
  {
    title: "Laurea Triennale in Psicologia e Salute",
    meta: "Sapienza, Roma · Voto: 110 e lode",
    thesis:
      "Tesi: «Oltre il muro. Riscoprire l'umano nei contributi e nel pensiero radicale di Franco Basaglia»",
  },
];

export function Education() {
  return (
    <section id="formazione" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading>Formazione</SectionHeading>

        <div className="mb-6 flex gap-4 rounded-2xl border-l-4 border-primary bg-card p-6 shadow-sm">
          <Award className="mt-0.5 shrink-0 text-primary" size={26} />
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Attualmente in corso la Specializzazione in Psicoterapia Psicoanalitica
            presso la Scuola dell'Accademia di Psicoterapia Psicoanalitica (SAPP) di
            Roma.
          </p>
        </div>

        <div className="mb-10 flex gap-4 rounded-2xl border border-warm/40 bg-warm/10 p-6 shadow-sm">
          <Star className="mt-0.5 shrink-0 text-warm" size={26} />
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Premiato come Studente Eccellente nell'A.A. 2020/2021 dalla Sapienza —
            selezionato tra i 400 laureati eccellenti, con cerimonia alla presenza
            del Presidente della Repubblica.
          </p>
        </div>

        <ul className="space-y-5">
          {items.map((it) => (
            <li
              key={it.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <GraduationCap className="mt-1 shrink-0 text-primary" size={24} />
              <div>
                <h3 className="font-serif text-lg text-primary">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.meta}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
                  {it.thesis}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}