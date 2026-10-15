import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = "Pranidhi Methmini — Aspiring Software Engineer";
const description =
  "Personal portfolio of Pranidhi Methmini, an aspiring Software Engineer and third-year undergraduate at the University of Moratuwa.";

export const metadata: Metadata = {
  title: { default: title, template: "%s | Pranidhi Methmini" },
  description,
  authors: [{ name: "Pranidhi Methmini" }],
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jakarta.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
