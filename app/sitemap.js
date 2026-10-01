import { KATALOG, SITE } from "@/lib/kayu";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/katalog`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/jenis-kayu`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...KATALOG.map((k) => ({ url: `${SITE}/katalog/${k.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })),
  ];
}
