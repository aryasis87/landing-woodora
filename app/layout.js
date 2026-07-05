import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "Woodora — Furnitur Berkualitas untuk Rumah Impian",
  description: "Woodora: furnitur kayu solid bergaya minimalis — nyaman, tahan lama, dan cocok untuk segala interior.",
  keywords: "furniture modern, mebel kayu, sofa nyaman, furnitur ruang tamu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
