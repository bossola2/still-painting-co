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
  title: "Still Painting Co. | Burlington, VT Exterior Painters",
  description:
    "Local Burlington, VT exterior painters. Houses, decks, fences & staining. Free quotes. Hardworking college students who take pride in every coat.",
  icons: {
    icon: "/favicon.png",
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
