import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bit of Nordic",
  description: "A curated collection of vintage Nordic items — watches, coins, design glass and more.",
  openGraph: {
    title: "Bit of Nordic",
    description: "A curated collection of vintage Nordic items.",
    siteName: "Bit of Nordic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
