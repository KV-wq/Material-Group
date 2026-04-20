export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://materialsgroup.bg";

export const siteName = "Materials Group DIN";
export const legalName = "MATERIALS GROUP DIN EOOD";

export const contact = {
  email: "info@materialsgroup.bg",
  phone: "+359 2 000 0000",
  address: {
    street: "blvd. Slivnitsa 245A, fl. 2, office 207",
    city: "Sofia",
    country: "Bulgaria",
    countryCode: "BG",
    postalCode: "1202",
  },
};

export const locales = ["en", "bg"];
export const defaultLocale = "en";
