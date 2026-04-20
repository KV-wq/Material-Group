export default function Products({ dict, locale }) {
  const p = dict.products;
  return (
    <section id="products" className="relative py-20 sm:py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-(--color-moss)">
            {p.eyebrow}
          </span>
          <h2 className="mt-4 sm:mt-5 font-serif text-3xl leading-tight text-(--color-forest) sm:text-4xl md:text-5xl">
            {p.title}
          </h2>
          <p className="mt-5 sm:mt-6 text-base text-(--color-muted)">
            {p.subtitle}
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((item) => (
            <article
              key={item.key}
              className={`group relative flex min-h-[340px] sm:min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl ${item.photo} p-6 sm:p-8 text-(--color-cream) transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/20`}
            >
              <div className="relative z-10">
                <h3 className="font-serif text-2xl leading-tight">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-white/80">{item.desc}</p>
                <a
                  href={`/${locale}#contact`}
                  className="mt-6 inline-flex items-center gap-2 overflow-hidden text-sm uppercase tracking-widest text-(--color-wheat-2) transition-colors duration-300 hover:text-(--color-wheat)"
                >
                  {dict.nav.cta}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
