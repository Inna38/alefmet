import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "../../../../../public/json_products/json";

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function generateStaticParams() {
  const locales = ["ua", "en"] as const;
  return products.flatMap((product) =>
    locales.map((locale) => ({
      locale,
      slug: product.slug,
    }))
  );
}

export type paramsType = Promise<{ locale: string; slug: string }>;

type Props = {
  params: paramsType;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return {
      title: locale === "en" ? "Product not found" : "Продукт не знайдено",
    };
  }

  const title =
    locale === "en"
      ? `${product.titleEn} — Aluminum Alloy`
      : `${product.titleUa} — Алюмінієвий сплав`;

  const description =
    locale === "en" ? product.descriptionEn : product.descriptionUa;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/products/${slug}`,
      languages: {
        "uk-UA": `${BASE_URL}/ua/products/${slug}`,
        "en-US": `${BASE_URL}/en/products/${slug}`,
      },
    },
    openGraph: { title, description, type: "website" },
    icons: [
      {
        url: "/fav.png",
        type: "image/png",
      },
    ],
  };
}

export default async function ProductDetails({ params }: Props) {
  const { slug, locale } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return (
      <div>{locale === "en" ? "Product not found" : "Продукт не знайдено"}</div>
    );

  return <ProductCard productProps={product} />;
}
