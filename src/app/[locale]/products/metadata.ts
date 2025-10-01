import { Metadata } from "next";

type Props = {
  params: { locale: "ua" | "en" };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  const title =
    locale === "en"
      ? "Our Products | Aluminum and Alloys"
      : "Наші продукти | Алюміній та сплави";

  const description =
    locale === "en"
      ? "Explore our range of aluminum products and alloys: granules, ingots, casting alloys. High quality and delivery across Ukraine and Europe."
      : "Ознайомтесь з нашим асортиментом алюмінієвих продуктів та сплавів: гранули, злитки, литі сплави. Висока якість та доставка по Україні та Європі.";

  const canonical = `${BASE_URL}/${locale}/products`;

  return {
    title,
    description,
    icons: { icon: "/fav.png" },
    alternates: {
      canonical,
      languages: {
        "uk-UA": `${BASE_URL}/ua/products`,
        "en-US": `${BASE_URL}/en/products`,
      },
    },
  };
}
