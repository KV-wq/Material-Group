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
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
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
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative z-60 grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white/80 text-(--color-forest) shadow-sm transition hover:bg-white"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        onClick={close}
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-forest/60 backdrop-blur-md" />

        <nav
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-1/2 top-20 w-[92%] max-w-md -translate-x-1/2 rounded-3xl border border-white/10 bg-(--color-cream)/95 p-6 shadow-2xl shadow-forest/30 backdrop-blur-xl transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col divide-y divide-forest/10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="flex items-center justify-between py-4 text-base font-medium text-(--color-forest) transition-colors hover:text-(--color-forest-2)"
                >
                  <span>{l.label}</span>
                  <span
                    aria-hidden
                    className="text-(--color-wheat) transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={`${base}#contact`}
            onClick={close}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-(--color-forest) px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-(--color-cream) transition-colors hover:bg-(--color-forest-2)"
          >
            {dict.nav.cta}
          </Link>
        </nav>
      </div>
    </>
  );
}
