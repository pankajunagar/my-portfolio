import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pankaj Unagar | Senior Hybrid Mobile & Web Developer",
  description:
    "Senior Hybrid Mobile & Web Developer with 8+ years of experience building scalable mobile apps and modern web platforms using Ionic, Angular, React, Vue, Next.js, and more.",
  keywords: [
    "Pankaj Unagar",
    "Senior Developer",
    "Mobile App Developer",
    "Web Developer",
    "Ionic",
    "Angular",
    "React",
    "Vue",
    "Next.js",
    "Cross-platform",
    "Hybrid Mobile",
    "Full Stack Developer",
    "Surat",
    "India",
  ],
  authors: [{ name: "Pankaj Unagar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-300`}
      >
        <CustomCursor />
        <div className="noise-bg min-h-screen">
          <ScrollProgressBar />
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
