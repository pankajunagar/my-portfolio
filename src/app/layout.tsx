import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { CustomCursor } from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  metadataBase: new URL("https://pankajunagar.vercel.app"),

  title: {
    default: "Pankaj Unagar | Senior Hybrid Mobile & Web Developer",
    template: "%s | Pankaj Unagar",
  },

  description:
    "Senior Hybrid Mobile & Web Developer with 8+ years of experience building scalable mobile apps and modern web platforms using Ionic, Angular, React, Vue, Next.js, and more.",
  keywords: [
    "ionic developer india",
    "hire experienced ionic developer",
    "ionic expert",
    "mobile app developer",
    "freelance ionic developer",
    "Ionic Developer India",
    "Hire Ionic Developer",
    "Mobile App Developer",
    "Freelance Ionic Developer",
    "Angular Developer India",
    "Next.js Developer India",
    "Angular Developer ",
    "Vue Developer",
    "React Developer",
    "Ionic Developer",
    "Flutter Developer",
    "React Native Developer",
    "Hybrid Mobile App Developer",
    "Web Developer ",
    "Full Stack Developer ",
    "PWA Developer ",
    "E-commerce Developer ",
    "ERP Developer ",
    "CRM Developer ",
    "Best Ionic Developer in India",
    "top ionic developer in india",
    "Top Mobile App Developer in India",
    "Best Mobile App Developer in India",
    "Best Ionic Developer in Surat",
    "top ionic developer in Surat",
    "Top Mobile App Developer in Surat",
    "Best Mobile App Developer in Surat",
    "Best Flutter Developer in India",
    "Best React Native Developer in India",
    "Best Web Developer in India",
    "Best Full Stack Developer in India",
    "Best PWA Developer in India",
    "Best E-commerce Developer in India",
    "Best ERP Developer in India",
    "Best CRM Developer in India",
    "Best Ionic Developer in Gujarat",
    "top ionic developer in Gujarat",
    "Top Mobile App Developer in Gujarat",
    "Best Mobile App Developer in Gujarat",
    "hire ionic developer from surat",
    "ionic developer surat",
    "ionic developer gujarat",
    "hire ionic developer from gujarat",
    "hire ionic developer in gujarat",
    "best ionic developer surat",
    "top ionic developer surat",
    "ionic developer gujarat",
    "hire ionic developer from gujarat",
    "hire ionic developer surat",
    "hire ionic developer from surat",
    "hire ionic developer from gujarat",
    "hire ionic developer from surat",
    "hire ionic developer from gujarat",
  ],

  authors: [{ name: "Pankaj Unagar" }],
  creator: "Pankaj Unagar",

  openGraph: {
    title: "Pankaj Unagar | Senior Hybrid Mobile & Web Developer",
    description:
      "Senior Hybrid Mobile & Web Developer with 8+ years of experience building scalable mobile apps and modern web platforms using Ionic, Angular, React, Vue, Next.js, and more.",
    url: "https://pankajunagar.vercel.app",
    siteName: "Pankaj Portfolio",
    images: [
      {
        url: "/og-image.png", // create this image
        width: 1200,
        height: 630,
        alt: "Pankaj Unagar Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pankaj Unagar | Senior Hybrid Mobile & Web Developer",
    description:
      "Senior Hybrid Mobile & Web Developer with 8+ years of experience building scalable mobile apps and modern web platforms using Ionic, Angular, React, Vue, Next.js, and more.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://pankajunagar.vercel.app",
  },
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
        <WhatsAppButton />
        <div className="noise-bg min-h-screen">
          <ScrollProgressBar />
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
