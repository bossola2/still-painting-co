import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Still Painting Co. | Burlington, VT Painters",
  description:
    "Still Painting Co. offers interior and exterior painting, deck refinishing, fence painting, and wood staining in Burlington, VT and surrounding areas. Free quotes. Local UVM students who take pride in every job.",
  keywords: [
    "painters Burlington VT",
    "exterior painting Burlington Vermont",
    "interior painting Burlington VT",
    "deck refinishing Vermont",
    "fence painting Burlington",
    "wood staining Vermont",
    "house painting Colchester VT",
    "affordable painters Vermont",
    "local painters Burlington",
  ],
  openGraph: {
    title: "Still Painting Co. | Burlington, VT Painters",
    description:
      "Local Burlington, VT painters offering interior & exterior painting, deck refinishing, fence painting and more. Free quotes.",
    url: "https://stillpaintingco.com",
    siteName: "Still Painting Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${caveat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
