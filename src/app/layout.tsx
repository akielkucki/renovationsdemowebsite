import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.company.fullName} | Contemporary Renovation Specialists`,
  description: siteConfig.company.description,
  keywords: [
    "renovations",
    "home renovation",
    "kitchen remodel",
    "bathroom remodel",
    "contemporary design",
    "luxury renovations",
    siteConfig.contact.address.city,
  ],
  openGraph: {
    title: siteConfig.company.fullName,
    description: siteConfig.company.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
