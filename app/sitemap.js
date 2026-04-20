import { siteUrl } from "./_content/site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          bg: `${siteUrl}/bg`,
        },
      },
    },
    {
      url: `${siteUrl}/bg`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          bg: `${siteUrl}/bg`,
        },
      },
    },
  ];
}
