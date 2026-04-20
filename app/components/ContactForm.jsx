"use client";

import { useState } from "react";

export default function ContactForm({ dict, locale = "en" }) {
  const c = dict.contact;
  const products = dict.products.items;

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      product: String(fd.get("product") || ""),
      message: String(fd.get("message") || "").trim(),
      website: String(fd.get("website") || ""),
      locale,
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "send_failed");

      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(String(err?.message || "send_failed"));
    }
  }

  const sending = status === "sending";

  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-32 grain">
      <div className="container-x grid gap-10 sm:gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-(--color-moss)">
            {c.eyebrow}
          </span>
          <h2 className="mt-4 sm:mt-5 font-serif text-3xl leading-tight text-(--color-forest) sm:text-4xl md:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 sm:mt-6 max-w-md text-base text-(--color-muted)">
            {c.subtitle}
          </p>

          <div className="mt-8 sm:mt-12 space-y-5 text-sm text-(--color-forest)">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-(--color-muted)">
                Email
              </div>
              <a
                href="mailto:info@materialsgroup.bg"
                className="mt-1 block text-base hover:text-(--color-wheat)"
              >
                info@materialsgroup.bg
              </a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-(--color-muted)">
                Office
              </div>
              <p className="mt-1">
                Sofia, blvd. Slivnitsa 245A
                <br />
                fl. 2, office 207, Bulgaria
              </p>
            </div>
          </div>
        </div>

        {status === "success" ? (
          <SuccessPanel c={c} onReset={() => setStatus("idle")} />
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 grid gap-5 rounded-2xl sm:rounded-3xl border border-forest/10 bg-white/70 p-5 sm:p-8 backdrop-blur md:p-10"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={c.name} name="name" required />
              <Field label={c.company} name="company" />
              <Field label={c.email} name="email" type="email" required />
              <Field label={c.phone} name="phone" type="tel" />
            </div>

            <label className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-medium uppercase tracking-widest text-(--color-muted)">
                {c.product}
              </span>
              <select
                name="product"
                defaultValue=""
                className="rounded-xl border border-forest/15 bg-white/80 px-4 py-3.5 text-sm text-(--color-forest) outline-none transition focus:border-(--color-forest) focus:ring-2 focus:ring-forest/10"
              >
                <option value="" disabled>
                  {c.productPlaceholder}
                </option>
                {products.map((p) => (
                  <option key={p.key} value={p.key}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-medium uppercase tracking-widest text-(--color-muted)">
                {c.message}
              </span>
              <textarea
                name="message"
                rows={5}
                className="resize-none rounded-xl border border-forest/15 bg-white/80 px-4 py-3.5 text-sm text-(--color-forest) outline-none transition focus:border-(--color-forest) focus:ring-2 focus:ring-forest/10"
              />
            </label>

            {status === "error" && (
              <div className="rounded-xl border border-red-300/60 bg-red-50 px-4 py-3 text-sm text-red-800">
                <strong className="font-medium">{c.errorTitle}.</strong>{" "}
                {c.errorText}
                {errorMsg ? (
                  <span className="ml-1 opacity-70">({errorMsg})</span>
                ) : null}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-(--color-forest) px-8 text-sm font-medium uppercase tracking-wider text-(--color-cream) transition hover:bg-(--color-forest-2) disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? c.sending : c.submit}
            </button>

            <p className="text-xs leading-relaxed text-(--color-muted)">
              {c.disclaimer}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function SuccessPanel({ c, onReset }) {
  return (
    <div className="lg:col-span-7 flex flex-col items-start justify-center gap-5 rounded-2xl sm:rounded-3xl border border-forest/10 bg-white/70 p-6 sm:p-10 backdrop-blur md:p-14">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-(--color-forest) text-(--color-wheat-2)">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="font-serif text-3xl leading-tight text-(--color-forest)">
        {c.successTitle}
      </h3>
      <p className="max-w-md text-base text-(--color-muted)">{c.successText}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3 text-sm font-medium uppercase tracking-wider text-(--color-forest) transition hover:bg-(--color-cream-2)"
      >
        {c.submit}
        <span aria-hidden>→</span>
      </button>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-xs font-medium uppercase tracking-widest text-(--color-muted)">
        {label}
        {required && <span className="ml-1 text-(--color-wheat)">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-forest/15 bg-white/80 px-4 py-3.5 text-sm text-(--color-forest) outline-none transition focus:border-(--color-forest) focus:ring-2 focus:ring-forest/10"
      />
    </label>
  );
}
