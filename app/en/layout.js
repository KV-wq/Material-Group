import { siteName } from "../_content/site";

const title = `${siteName} — Agricultural Raw Materials Trading`;
const description =
  "Materials Group DIN EOOD. Wholesale trading of wheat, corn, sunflower, barley, soy and rapeseed from the Black Sea region.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      bg: "/bg",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    url: "/en",
    siteName,
    title,
    description,
    locale: "en_US",
    alternateLocale: ["bg_BG"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function EnLayout({ children }) {
  return children;
}
