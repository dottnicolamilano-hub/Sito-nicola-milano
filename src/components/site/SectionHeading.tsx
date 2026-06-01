export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl text-primary md:text-4xl">{children}</h2>
      <div className="mt-4 h-px w-16 bg-warm" />
    </div>
  );
}