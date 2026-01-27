import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbitrix",
  description: "Pioneering innovation at the intersection of techology & exploration",
  keywords: ["Orbitrix", "Orbitrixng"],
  openGraph: {
    title: 'Orbitrix',
    description: 'Pioneering innovation at the intersection of techology & exploration',
    url: 'https://orbitrixng.com',
    siteName: 'Orbitrixng',
    images: [
      {
        url: 'https://orbitrixng.com/logo.png',
        width: 1000,
        height: "1000",
        alt: 'Orbitrix Logo',
      },
    ],
    type: "website"
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbitrix',
    description: 'Pioneering innovation at the intersection of techology & exploration',
    images: ['https://orbitrixng.com/logo.png'],
  },
  icons: "./favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
