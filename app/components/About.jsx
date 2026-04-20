export default function About({ dict }) {
  const a = dict.about;
  return (
    <section id="about" className="relative bg-(--color-forest) text-(--color-cream) py-20 sm:py-24 md:py-32">
      <div className="container-x grid gap-10 sm:gap-14 lg:gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-(--color-wheat-2)">
            {a.eyebrow}
          </span>
          <h2 className="mt-4 sm:mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            {a.title}
          </h2>

          <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-sm">
            {[a.bullet1, a.bullet2, a.bullet3].map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/85">
                <span className="mt-2 h-1.5 w-6 shrink-0 bg-(--color-wheat)" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-white/10 space-y-5 sm:space-y-6 text-base leading-relaxed text-white/75">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
        </div>
      </div>
    </section>
  );
}
