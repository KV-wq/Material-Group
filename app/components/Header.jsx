"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ locale, dict }) {
  const base = `/${locale}`;
  const [open, setOpen] = useState(false);

  const links = [
    { href: `${base}#about`, label: dict.nav.about },
    { href: `${base}#products`, label: dict.nav.products },
    { href: `${base}#advantages`, label: dict.nav.advantages },
    { href: `${base}#contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-(--color-cream)/85 backdrop-blur">
      <div className="container-x flex h-16 sm:h-20 items-center justify-between gap-4 sm:gap-6">
        <Link
          href={base}
          onClick={close}
          className="flex flex-col leading-tight"
        >
          <span className="font-serif text-lg sm:text-xl text-(--color-forest)">
            Materials Group
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-(--color-muted)">
            DIN · Sofia · Bulgaria
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-forest/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-(--color-forest)"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center rounded-full border border-forest/15 bg-white/60 text-[11px] sm:text-xs font-medium uppercase tracking-widest">
            <Link
              href="/en"
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition ${
                locale === "en"
                  ? "bg-(--color-forest) text-(--color-cream)"
                  : "text-forest/70 hover:text-(--color-forest)"
              }`}
            >
              EN
            </Link>
            <Link
              href="/bg"
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition ${
                locale === "bg"
                  ? "bg-(--color-forest) text-(--color-cream)"
                  : "text-forest/70 hover:text-(--color-forest)"
              }`}
            >
              BG
            </Link>
          </div>

          <Link
            href={`${base}#contact`}
            className="hidden sm:inline-flex items-center rounded-full bg-(--color-forest) px-5 py-2.5 text-sm font-medium text-(--color-cream) transition-colors hover:bg-(--color-forest-2)"
          >
            {dict.nav.cta}
          </Link>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white/60 text-(--color-forest) transition hover:bg-white"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full rounded bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-forest/10 bg-(--color-cream) transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col divide-y divide-forest/10 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-4 text-base font-medium text-(--color-forest)"
            >
              {l.label}
            </a>
          ))}
          <Link
            href={`${base}#contact`}
            onClick={close}
            className="my-4 inline-flex items-center justify-center rounded-full bg-(--color-forest) px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-(--color-cream)"
          >
            {dict.nav.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
