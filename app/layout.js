import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl } from "./_content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} — Agricultural Raw Materials Trading`,
    template: `%s — ${siteName}`,
  },
  description:
    "Materials Group DIN EOOD — wholesale trading of wheat, corn, tobacco leaf, barley, soy and rapeseed from the Black Sea region. Based in Sofia, Bulgaria.",
  keywords: [
    "agricultural raw materials",
    "grain trading",
    "wheat supplier",
    "corn supplier",
    "tobacco leaf",
    "soybeans",
    "rapeseed",
    "barley",
    "Black Sea grain",
    "Bulgaria grain exporter",
    "Materials Group DIN",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    url: "/",
    siteName,
    title: `${siteName} — Agricultural Raw Materials Trading`,
    description:
      "Wholesale trading of grain, oilseeds and legumes from the Black Sea region. Sofia, Bulgaria.",
    locale: "en_US",
    alternateLocale: ["bg_BG"],
    images: [
      {
        url: "/opengraph-image.png",
        alt: `${siteName} — Agricultural raw materials trading`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Agricultural Raw Materials Trading`,
    description:
      "Wholesale trading of grain, oilseeds and legumes from the Black Sea region.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#0f2a1d",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-background) text-(--color-foreground)">
        {children}
      </body>
    </html>
  );
}
