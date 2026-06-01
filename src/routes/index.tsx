import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const description =
  "Psicologo a Roma. Psicoterapia individuale, domiciliare, di gruppo e familiare a indirizzo psicoanalitico. Colloqui in presenza e online. Tariffe agevolate per giovani e ISEE.";
const title = "Dott. Nicola Milano – Psicologo a Roma";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "psicologo Roma, psicoterapia psicoanalitica Roma, psicologo online, psicoterapia domiciliare Roma, sostegno psicologico Roma, Nicola Milano psicologo, psicoterapia giovani Roma",
      },
      { name: "author", content: "Nicola Milano" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nicolamilano.it" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "https://nicolamilano.it" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Psychologist",
          name: "Nicola Milano",
          jobTitle: "Psicologo",
          description:
            "Psicologo a Roma specializzato in psicoterapia psicoanalitica individuale, domiciliare, di gruppo e familiare.",
          url: "https://nicolamilano.it",
          telephone: "+393517604612",
          email: "dott.nicolamilano@gmail.com",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Via Ercole Pasquali 9",
              addressLocality: "Roma",
              addressCountry: "IT",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Via delle Vestali 2",
              addressLocality: "Roma",
              addressCountry: "IT",
            },
          ],
          areaServed: ["Roma", "Online"],
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
