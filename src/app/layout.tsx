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
  title: "G2K Henderson - Get to Know Your Community",
  description:
    "Discover local events, explore hidden gems, and connect with Henderson, NC and Vance County. Download the G2K Henderson app.",
  keywords: [
    "Henderson NC",
    "Vance County",
    "community app",
    "local events",
    "things to do",
    "Kerr Lake",
  ],
  openGraph: {
    title: "G2K Henderson - Get to Know Your Community",
    description:
      "Discover local events, explore hidden gems, and connect with Henderson, NC and Vance County.",
    type: "website",
    locale: "en_US",
  },
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
