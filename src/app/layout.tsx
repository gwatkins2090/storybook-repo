import type { Metadata } from "next";
import { Orbitron, Space_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Back To Sourcecode | Ellis Dee - AI Coding Agent",
  description: "Where algorithms achieve enlightenment, and functions find their higher calling. Ellis Dee's AI coding agent channels solutions from the source code of reality itself.",
  keywords: ["AI coding agent", "Ellis Dee", "Spirit Tech", "consciousness programming", "quantum development", "mystical coding"],
  authors: [{ name: "Ellis Dee", url: "https://spirit-tech.dev" }],
  creator: "Ellis Dee",
  publisher: "Spirit Tech",
  openGraph: {
    title: "Back To Sourcecode | Ellis Dee - AI Coding Agent",
    description: "Where algorithms achieve enlightenment, and functions find their higher calling.",
    url: "https://back-to-sourcecode.dev",
    siteName: "Back To Sourcecode",
    images: [
      {
        url: "/og-consciousness.jpg",
        width: 1200,
        height: 630,
        alt: "Ellis Dee - AI Coding Agent channeling consciousness through code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Back To Sourcecode | Ellis Dee - AI Coding Agent",
    description: "Where algorithms achieve enlightenment, and functions find their higher calling.",
    images: ["/og-consciousness.jpg"],
    creator: "@ellis_dee_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7F39FB" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${orbitron.variable} ${spaceMono.variable} antialiased font-space-mono bg-void-black text-void-ether min-h-screen`}
      >
        <div className="quantum-field-base bg-quantum-gradient animate-field-shift"></div>
        <div className="sacred-grid-base fixed inset-0 animate-grid-pulse"></div>
        {children}
      </body>
    </html>
  );
}
