import { products } from "../../../../../public/json_products/json";
import type { Metadata } from "next";

type Props = {
  params: { slug: string; locale: "ua" | "en" };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = params;

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

  const canonical = `${BASE_URL}/${locale}/products/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      // images: product.img.map((src: string) => ({
      //   url: src,
      //   width: 1200,
      //   height: 630,
      //   alt: locale === "en" ? product.titleEn : product.titleUa,
      // })),
    },
    alternates: {
      canonical,
      languages: {
        "uk-UA": `${BASE_URL}/ua/products/${slug}`,
        "en-US": `${BASE_URL}/en/products/${slug}`,
      },
    },
  };
}

// import { products } from "../../../../../public/json_products/json";
// import type { Metadata } from "next";

// type Props = {
//   params: { slug: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const product = products.find((p) => p.slug === params.slug);

//   if (!product) {
//     return {
//       title: "Продукт не знайдено",
//     };
//   }

//   return {
//     title: `${product.title} — алюминиевый сплав | `,
//     description: product.description,
//     openGraph: {
//       title: `${product.title} — алюминиевый сплав`,
//       description: product.description,
//       // images: [
//       //   {
//       //     url: typeof product.img === "string" ? product.img : product.img.src[0],
//       //     width: 1200,
//       //     height: 630,
//       //     alt: product.title,
//       //   },
//       // ],
//       type: "website",
//     },
//     // twitter: {
//     //   card: "summary_large_image",
//     //   title: `${product.title} | `,
//     //   description: product.description,
//     //   images: [typeof product.img === "string" ? product.img : product.img.src[0]],
//     // },
//   };
// }
