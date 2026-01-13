import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saransh Aggarwal | AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Saransh Aggarwal - Building intelligent applications with AI/ML, Full-Stack Development, and Cloud Technologies. Explore projects in LangGraph agents, medical AI, and more.",
  keywords: [
    "Saransh Aggarwal",
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "Python",
    "Django",
    "LangChain",
    "LangGraph",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Saransh Aggarwal" }],
  openGraph: {
    title: "Saransh Aggarwal | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent applications with AI/ML, Full-Stack Development, and Cloud Technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saransh Aggarwal | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent applications with AI/ML, Full-Stack Development, and Cloud Technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/providers";
import CustomCursor from "@/components/CustomCursor";
import Background from "@/components/layout/Background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Background />
          <div className="noise-overlay" />
          <CustomCursor />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
