import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"Woodora","description":"Furnitur kayu berkualitas","url":"https://landing-woodora.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://landing-woodora.vercel.app"),
  title: "Woodora — Furnitur Berkualitas untuk Rumah Impian",
  description: "Woodora: furnitur kayu solid bergaya minimalis — nyaman, tahan lama, dan cocok untuk segala interior.",
  applicationName: "Woodora",
  keywords: ["furnitur", "mebel kayu", "furniture minimalis", "perabot rumah", "interior"],
  authors: [{ name: "Woodora" }],
  creator: "Woodora",
  publisher: "Woodora",
  alternates: { canonical: "https://landing-woodora.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-woodora.vercel.app",
    siteName: "Woodora",
    title: "Woodora — Furnitur Berkualitas untuk Rumah Impian",
    description: "Woodora: furnitur kayu solid bergaya minimalis — nyaman, tahan lama, dan cocok untuk segala interior.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Woodora — Furnitur Berkualitas untuk Rumah Impian" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodora — Furnitur Berkualitas untuk Rumah Impian",
    description: "Woodora: furnitur kayu solid bergaya minimalis — nyaman, tahan lama, dan cocok untuk segala interior.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
