export default function Advantages({ dict }) {
  const a = dict.advantages;
  return (
    <section id="advantages" className="relative py-20 sm:py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-(--color-moss)">
              {a.eyebrow}
            </span>
            <h2 className="mt-4 sm:mt-5 font-serif text-3xl leading-tight text-(--color-forest) sm:text-4xl md:text-5xl">
              {a.title}
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-forest/10 md:ml-10" />
        </div>

        <div className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-2xl sm:rounded-3xl bg-forest/10 sm:grid-cols-2 lg:grid-cols-3">
          {a.items.map((item, i) => (
            <article
              key={item.title}
              className="flex min-h-[220px] sm:min-h-[240px] flex-col justify-between gap-6 bg-(--color-cream) p-6 sm:p-8 transition-colors duration-300 hover:bg-(--color-cream-2)"
            >
              <span className="font-serif text-4xl sm:text-5xl text-(--color-wheat)">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-(--color-forest)">
                  {item.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-sm leading-relaxed text-(--color-muted)">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
