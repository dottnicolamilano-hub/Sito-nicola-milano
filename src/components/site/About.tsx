import { SectionHeading } from "./SectionHeading";

const paragraphs = [
  "Sono Nicola Milano, psicologo iscritto all'Albo con il numero 29030. Considero l'intervento psicologico e la psicoterapia elementi fondanti non solo del benessere individuale, ma anche del benessere collettivo. Il mio percorso è caratterizzato da un forte impegno nel sociale, in contesti di marginalità e disagio psicosociale, e nella clinica dell'età evolutiva.",
  "Il mio approccio, basato sull'ascolto analitico e sulla comprensione del funzionamento profondo della persona, mi consente di accogliere l'intera complessità di chi si rivolge a me, rendendolo efficace per una vasta gamma di sofferenze psicologiche e contesti esistenziali. Utilizzo un metodo di intervento psicoterapeutico che si rifà al modello del Processo Psicoanalitico Mutativo (PPM), centrato sulla trasformazione del funzionamento psichico del paziente sin dal primo colloquio.",
  "Ho maturato la mia formazione clinica attraverso esperienze in contesti di alta complessità: il tirocinio presso ITINERES, struttura residenziale per minori con disturbi psichici, e presso Borgo Ragazzi Don Bosco nell'ambito del Progetto Tornasole contro la povertà educativa. Dal 2022 collaboro come Operatore SISMIF con la Cooperativa Rifornimento in Volo, svolgendo interventi domiciliari di sostegno psicologico ed educativo a nuclei familiari in condizioni di disagio. Attualmente svolgo il tirocinio di specializzazione in psicoterapia presso il CCP — Centro di Consultazione Psicoanalitica di Roma.",
];

export function About() {
  return (
    <section id="chi-sono" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading>Chi Sono</SectionHeading>
        <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-[17px]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}