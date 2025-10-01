import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Russo_One, Tektur } from "next/font/google";
import { Manrope } from "next/font/google";

import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import { Monoton } from "next/font/google";
import Header from "@/components/Header/Header";
import InfoSection from "@/components/InfoSection/InfoSection";
import BannerSection from "@/components/BannerSection/BannerSection";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const tektur = Tektur({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tektur",
});
// const russoOne = Russo_One({
//   weight: "400",
//   subsets: ["cyrillic", "latin"], // щоб підтримувалась українська мова
//   display: "swap",
// });

const monoton = Monoton({
  weight: "400", 
  subsets: ["latin"], 
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

type Props = {
  children: React.ReactNode;
 params: { locale: "ua" | "en" };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.locale === "en") {
    return {
      title: "Alefmet. Aluminum Production and Sales | Alloys and Granules",
      description:
        "Buy aluminum and alloys. Production and sales of aluminum granules, ingots, and casting alloys: ADC12, AK12, EN AB-47100, EN AB-46000. High quality and delivery across Ukraine and Europe.",
      icons: {
        icon: "/fav.png",
      },
      alternates: {
        canonical: `${BASE_URL}/en`,
        languages: {
          "uk-UA": `${BASE_URL}/ua`,
          "en-US": `${BASE_URL}/en`,
        },
      },
    };
  }

  // по умолчанию — украинский
  return {
    title: "Алефмет. Виробництво та продаж алюмінію | Алюмінієві сплави та гранули",
    description:
      "Купити алюміній та сплави. Виробництво і продаж алюмінієвих гранул, злитків та литих сплавів: ADC12, AK12, EN AB-47100, EN AB-46000. Висока якість та доставка по Україні та Європі.",
    icons: {
      icon: "/fav.png",
    },
    alternates: {
      canonical: `${BASE_URL}/ua`,
      languages: {
        "uk-UA": `${BASE_URL}/ua`,
        "en-US": `${BASE_URL}/en`,
      },
    },
  };
}


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tektur.className} ${manrope.className} ${monoton.className} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <InfoSection />
          <Header />
          <BannerSection />

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
