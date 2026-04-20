import Link from "next/link";

export default function Footer({ dict, locale }) {
  const f = dict.footer;
  const year = new Date().getFullYear();
  const base = `/${locale}`;

  return (
    <footer className="relative bg-(--color-forest) text-(--color-cream)">
      <div className="container-x grid gap-10 sm:gap-14 py-14 sm:py-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href={base} className="flex flex-col leading-tight">
            <span className="font-serif text-2xl">Materials Group DIN</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-(--color-wheat-2)">
              Sofia · Bulgaria
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {f.tagline}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.25em] text-(--color-wheat-2)">
            {f.sections.nav}
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><a href={`${base}#about`} className="hover:text-white">{dict.nav.about}</a></li>
            <li><a href={`${base}#products`} className="hover:text-white">{dict.nav.products}</a></li>
            <li><a href={`${base}#advantages`} className="hover:text-white">{dict.nav.advantages}</a></li>
            <li><a href={`${base}#contact`} className="hover:text-white">{dict.nav.contact}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.25em] text-(--color-wheat-2)">
            {f.sections.company}
          </h4>
          <address className="mt-5 not-italic text-sm leading-relaxed text-white/80">
            <div className="font-medium text-white">{f.companyName}</div>
            <div className="mt-2">{f.address}</div>
            <div>{f.country}</div>
          </address>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.25em] text-(--color-wheat-2)">
            {f.sections.contacts}
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              <a href="mailto:info@materialsgroup.bg" className="hover:text-white">
                info@materialsgroup.bg
              </a>
            </li>
            <li>
              <a href="tel:+35920000000" className="hover:text-white">
                +359 2 000 0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {f.companyName}. {f.rights}
          </p>
          <div className="flex gap-5">
            <Link href="/en" className={locale === "en" ? "text-white" : "hover:text-white"}>English</Link>
            <Link href="/bg" className={locale === "bg" ? "text-white" : "hover:text-white"}>Български</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
