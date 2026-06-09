export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-fade-in-up">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Psicologo · Iscrizione Albo n. 29030
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-primary md:text-7xl">
            Nicola
            <br />
            Milano
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Supporto psicologico e psicoterapia a indirizzo psicoanalitico.
            Interventi e percorsi psicologici rivolti a tutte le fasce d'età e a
            gran parte delle sofferenze psicologiche e dei contesti esistenziali.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contatti"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              Prenota un colloquio
            </a>
            <a
              href="#chi-sono"
              className="rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5"
            >
              Scopri di più
            </a>
          </div>
        </div>
        <div className="relative mx-auto flex justify-center md:justify-end animate-fade-in-up animate-delay-200">
          <div className="absolute inset-0 -z-10 rounded-full bg-accent/60 blur-3xl" />
          <div className="relative h-64 w-64 overflow-hidden rounded-full ring-8 ring-white shadow-2xl md:h-96 md:w-96">
            <img
              src="/profile.jpg"
              alt="Dott. Nicola Milano, psicologo a Roma"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
