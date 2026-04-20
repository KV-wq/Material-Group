import { siteName } from "../_content/site";

const title = `${siteName} — Търговия със селскостопански суровини`;
const description =
  "Materials Group DIN EOOD. Търговия на едро с пшеница, царевица, слънчоглед, ечемик, соя и рапица от Черноморския регион. София, България.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/bg",
    languages: {
      en: "/en",
      bg: "/bg",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    url: "/bg",
    siteName,
    title,
    description,
    locale: "bg_BG",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/opengraph-image.png",
        alt: `${siteName} — Търговия със селскостопански суровини`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function BgLayout({ children }) {
  return children;
}
