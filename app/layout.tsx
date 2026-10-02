import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sunny Kumar | Software Developer & QA Engineer",
    template: "%s | Sunny Kumar",
  },
  description:
    "Sunny Kumar — Software Developer & QA Engineer from Ahmedabad, India. B.Tech CSE graduate with international research experience at FH Aachen, Germany. Building reliable software that actually runs.",
  keywords: [
    "Sunny Kumar",
    "Software Developer",
    "QA Engineer",
    "Python Developer",
    "Django Developer",
    "Full Stack Developer",
    "Portfolio",
    "Ahmedabad Developer",
  ],
  authors: [{ name: "Sunny Kumar" }],
  creator: "Sunny Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sunnykumar2222.github.io",
    title: "Sunny Kumar | Software Developer & QA Engineer",
    description:
      "Building reliable software that actually runs. Python, Django, MySQL, OpenCV specialist with QA expertise.",
    siteName: "Sunny Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Kumar | Software Developer & QA Engineer",
    description:
      "Building reliable software that actually runs. Python, Django, MySQL, OpenCV specialist with QA expertise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}