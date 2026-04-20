import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const {
    name = "",
    company = "",
    email = "",
    phone = "",
    product = "",
    message = "",
    locale = "en",
    website = "",
  } = body ?? {};

  if (website) {
    return Response.json({ ok: true });
  }

  if (!email || !/.+@.+\..+/.test(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (!name.trim()) {
    return Response.json({ ok: false, error: "missing_name" }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return Response.json(
      { ok: false, error: "smtp_not_configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: String(SMTP_SECURE).toLowerCase() === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `New request from ${name}${company ? " · " + company : ""}`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#14231b;background:#f7f5ef;border-radius:16px;">
      <div style="font-family:Georgia,serif;font-size:22px;color:#0f2a1d;margin-bottom:4px;">New contact request</div>
      <div style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#6b8a5a;margin-bottom:20px;">
        materialsgroup.bg · ${escapeHtml(locale)}
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tbody>
          ${row("Name", escapeHtml(name))}
          ${row("Company", escapeHtml(company))}
          ${row("Email", `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`)}
          ${row("Phone", phone ? `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>` : "")}
          ${row("Product", escapeHtml(product))}
          ${row("Message", escapeHtml(message).replaceAll("\n", "<br/>"))}
        </tbody>
      </table>
      <div style="margin-top:24px;font-size:11px;color:#596b60;">
        Sent automatically from the website contact form.
      </div>
    </div>
  `;

  const text =
    `New contact request (${locale})\n\n` +
    `Name:    ${name}\n` +
    `Company: ${company}\n` +
    `Email:   ${email}\n` +
    `Phone:   ${phone}\n` +
    `Product: ${product}\n\n` +
    `Message:\n${message}\n`;

  const from = CONTACT_FROM || SMTP_USER;
  const to = CONTACT_TO || SMTP_USER;

  const clientSubject =
    locale === "bg"
      ? "Получихме Вашата заявка — Materials Group DIN"
      : "We received your request — Materials Group DIN";

  const clientText =
    locale === "bg"
      ? `Здравейте${name ? ", " + name : ""}!\n\nПолучихме Вашата заявка. Наш мениджър ще се свърже с Вас в рамките на един работен ден.\n\nMaterials Group DIN EOOD\n`
      : `Hello${name ? ", " + name : ""}!\n\nWe received your request. Our manager will contact you within one business day.\n\nMaterials Group DIN EOOD\n`;

  const clientHtml =
    locale === "bg"
      ? `<div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#14231b;background:#f7f5ef;border-radius:16px;">
           <div style="font-family:Georgia,serif;font-size:22px;color:#0f2a1d;margin-bottom:10px;">Благодарим Ви!</div>
           <div style="font-size:14px;line-height:1.6;color:#596b60;">
             Получихме Вашата заявка. Наш мениджър ще се свърже с Вас в рамките на един работен ден.
           </div>
           <div style="margin-top:18px;font-size:13px;color:#14231b;">
             Materials Group DIN EOOD
           </div>
         </div>`
      : `<div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#14231b;background:#f7f5ef;border-radius:16px;">
           <div style="font-family:Georgia,serif;font-size:22px;color:#0f2a1d;margin-bottom:10px;">Thank you!</div>
           <div style="font-size:14px;line-height:1.6;color:#596b60;">
             We received your request. Our manager will contact you within one business day.
           </div>
           <div style="margin-top:18px;font-size:13px;color:#14231b;">
             Materials Group DIN EOOD
           </div>
         </div>`;

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: clientSubject,
      text: clientText,
      html: clientHtml,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return Response.json(
      { ok: false, error: "send_failed" },
      { status: 500 }
    );
  }
}

function row(label, htmlValue) {
  const display = htmlValue && String(htmlValue).trim() ? htmlValue : "—";
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #e3decf;width:130px;color:#596b60;font-size:11px;letter-spacing:.15em;text-transform:uppercase;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e3decf;color:#14231b;">${display}</td>
    </tr>
  `;
}
