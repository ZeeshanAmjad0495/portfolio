import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Inter,
  JetBrains_Mono,
  IM_Fell_English_SC,
} from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const imfell = IM_Fell_English_SC({
  variable: "--font-imfell",
  subsets: ["latin"],
  weight: "400",
});

const description =
  "Zeeshan Amjad — software engineer with experience in test automation, backend development, and building systems with AI. Builds multi-tenant SaaS backends, an automation framework, and AI-assisted developer tools.";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Automation Engineer",
    "SDET",
    "AI Engineering",
    "TypeScript",
    "NestJS",
    "FastAPI",
    "Multi-tenant SaaS",
    "Playwright",
    "Zeeshan Amjad",
    "ForgeLoop",
    "Sentinel",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    type: "website",
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${jetbrains.variable} ${imfell.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
