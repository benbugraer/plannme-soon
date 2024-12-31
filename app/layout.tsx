import type { Metadata } from "next";
import "./globals.css";
import { Onest } from "next/font/google";
import clsx from "clsx";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const onest = Onest({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plannme.com/"),
  title: {
    default: "Plannme | Firmanızı Randevu ve Planlama Sistemi ile Yönetin",
    template: "%s | Plannme",
  },
  description:
    "Plannme Randevu ve Planlama Sistemi ile firmanızı yönetin. Randevu alın, müşteri bilgilerinizi saklayın, işlerinizi planlayın.",
  keywords: [
    "Plannme",
    "Plannme.com",
    "Randevu ve Planlama",
    "Randevu",
    "Planlama",
    "Randevu Sistemi",
    "CRM Sistemi",
    "Firmanızı Randevu ve Planlama Sistemi ile Yönetin",
  ],
  creator: "Buğra Er",
  openGraph: {
    type: "website",
    locale: "tr_TR, en_US",
    url: "https://plannme.com/",
    title: "Plannme | Çok Yakında",
    description:
      "Plannme Randevu ve Planlama Sistemi ile firmanızı yönetin. Randevu alın, müşteri bilgilerinizi saklayın, işlerinizi planlayın.",
    siteName: "Plannme",
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr_TR">
      <body
        className={clsx("antialiased bg-primary text-primary", onest.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="px-6 md:px-6 pt-16 md:pt-20 md:pb-44 max-w-[1400px] mx-auto">
            {children}
          </div>
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
