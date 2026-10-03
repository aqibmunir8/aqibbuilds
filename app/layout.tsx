import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AqibBuilds — We Build. We Automate. We Grow.",
  description:
    "Digital engineering & performance agency. High-converting websites, web apps, headless e-commerce, AI automations, and data-driven ad campaigns.",
  icons: {
    icon: "/aqibbuilds-icon-transparent.png",
    shortcut: "/aqibbuilds-icon-transparent.png",
    apple: "/aqibbuilds-icon-transparent.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
