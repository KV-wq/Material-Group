export default function Hero({ dict, locale }) {
  const h = dict.hero;
  return (
    <section className="relative isolate overflow-hidden hero-photo text-(--color-cream)">
      <div className="container-x relative z-10 flex min-h-[88vh] sm:min-h-[86vh] flex-col justify-center py-24 sm:py-28">
        <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-(--color-wheat-2)">
          {h.eyebrow}
        </span>
        <h1 className="mt-5 sm:mt-6 max-w-4xl font-serif text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
          {h.title}
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl text-base text-white/75 sm:text-lg">
          {h.subtitle}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href={`/${locale}#contact`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-wheat) px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-medium uppercase tracking-wider text-(--color-forest) transition-colors hover:bg-(--color-wheat-2)"
          >
            {h.primary}
            <span aria-hidden>→</span>
          </a>
          <a
            href={`/${locale}#about`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-medium uppercase tracking-wider text-white/90 transition-colors hover:bg-white/10"
          >
            {h.secondary}
          </a>
        </div>

        <dl className="mt-14 sm:mt-20 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6 border-t border-white/15 pt-6 sm:pt-8">
          {[
            [h.stat1Value, h.stat1Label],
            [h.stat2Value, h.stat2Label],
            [h.stat3Value, h.stat3Label],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-serif text-2xl leading-tight text-(--color-wheat-2) sm:text-4xl">
                {v}
              </dt>
              <dd className="mt-1.5 sm:mt-2 text-[10px] leading-tight sm:text-xs uppercase tracking-widest text-white/60">
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-background" />
    </section>
  );
}
