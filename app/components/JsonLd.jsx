import { siteName, legalName, siteUrl, contact } from "../_content/site";

export default function JsonLd({ locale = "en" }) {
  const url = `${siteUrl}/${locale}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: siteName,
    legalName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/opengraph-image.png`,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.countryCode,
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Agricultural raw materials",
      "Grain trading",
      "Wheat",
      "Corn",
      "Sunflower",
      "Barley",
      "Soybeans",
      "Rapeseed",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: siteName,
    publisher: { "@id": `${siteUrl}#organization` },
    inLanguage: locale,
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: siteName,
    isPartOf: { "@id": `${siteUrl}#website` },
    about: { "@id": `${siteUrl}#organization` },
    inLanguage: locale === "bg" ? "bg-BG" : "en-US",
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website, webpage]),
      }}
    />
  );
}
