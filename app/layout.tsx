import type { Metadata } from "next";
import "./globals.css";
import { Onest } from "next/font/google";
import clsx from "clsx";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

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
    "Plannme ile işletmenizin randevu ve müşteri yönetimini kolaylaştırın. Online randevu alma, müşteri takibi, takvim yönetimi ve daha fazlası. Ücretsiz deneyin!",
  keywords: [
    "Plannme",
    "Online Randevu Sistemi",
    "Müşteri Yönetim Sistemi",
    "İşletme Yönetimi",
    "Randevu Takip",
    "Takvim Yönetimi",
    "CRM Yazılımı",
    "Müşteri İlişkileri",
    "Randevu Planlama",
    "İşletme Otomasyonu",
  ],
  authors: [{ name: "Buğra Er", url: "https://plannme.com" }],
  creator: "Buğra Er",
  publisher: "Plannme",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo/android-chrome-192x192.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo/android-chrome-192x192.png",
      },
    ],
  },
  manifest: "/logo/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://plannme.com/",
    title:
      "Plannme | İşletmeniz için Akıllı Randevu ve Müşteri Yönetim Sistemi",
    description:
      "Plannme ile işletmenizin randevu ve müşteri yönetimini kolaylaştırın. Online randevu alma, müşteri takibi, takvim yönetimi ve daha fazlası. Ücretsiz deneyin!",
    siteName: "Plannme",
    images: [
      {
        url: "/logo/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Plannme Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Plannme | İşletmeniz için Akıllı Randevu ve Müşteri Yönetim Sistemi",
    description:
      "Plannme ile işletmenizin randevu ve müşteri yönetimini kolaylaştırın. Online randevu alma, müşteri takibi, takvim yönetimi ve daha fazlası. Ücretsiz deneyin!",
    images: ["/logo/android-chrome-192x192.png"],
    creator: "@plannme",
    site: "@plannme",
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
    canonical: "https://plannme.com",
    languages: {
      "tr-TR": "https://plannme.com",
      "en-US": "https://plannme.com/en",
    },
  },
  category: "technology",
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
