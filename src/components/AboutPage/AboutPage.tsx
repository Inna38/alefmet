import React from "react";
import Container from "../Container/Container";

import styles from "./AboutPage.module.css";
import { useLocale, useTranslations } from "next-intl";
import Button from "../Button/Button";
import Image from "next/image";
import ProductFormats from "./ProductFormats/ProductFormats";
import expert from "../../../public/expert.svg";
import protect from "../../../public/protect.svg";
import individual from "../../../public/individual.svg";
import standart from "../../../public/standart.svg";
import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  if (locale === "en") {
    return {
      title: "About Alefmet — Aluminum Production and Supply in Ukraine",
      description:
        "Alefmet LLC — a modern company specializing in the production of secondary aluminum alloys for industrial use. We provide full-cycle solutions from manufacturing to delivery.",
      keywords:
        "aluminum, alloys, production, Alefmet, secondary aluminum, aluminum ingots, granules, profiles, casting, Ukraine",
      alternates: {
        canonical: `${BASE_URL}/en/about`,
        languages: {
          "uk-UA": `${BASE_URL}/ua/about`,
          "en-US": `${BASE_URL}/en/about`,
        },
      },
      openGraph: {
        title: "About Alefmet — Aluminum Production and Supply",
        description:
          "We provide high-quality aluminum alloys and reliable delivery across Ukraine and Europe.",
        url: `${BASE_URL}/en/about`,
        siteName: "Alefmet",
        locale: "en_US",
        type: "website",
        images: [
          {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Alefmet aluminum production",
          },
        ],
      },
      icons: [{ url: "/fav.png", type: "image/png" }],
    };
  }

  return {
    title: "Про компанію Алефмет — Виробництво та постачання алюмінію",
    description:
      "ТОВ «Алефмет» — сучасне підприємство, що спеціалізується на виробництві вторинних алюмінієвих сплавів для промисловості. Повний цикл: виробництво, доставка, гарантія якості.",
    keywords:
      "алюміній, сплави, виробництво, постачання, Алефмет, вторинний алюміній, чушки, гранули, профілі, лиття, Україна",
    alternates: {
      canonical: `${BASE_URL}/ua/about`,
      languages: {
        "uk-UA": `${BASE_URL}/ua/about`,
        "en-US": `${BASE_URL}/en/about`,
      },
    },
    openGraph: {
      title: "Про компанію Алефмет — Виробництво алюмінію",
      description:
        "Виробництво та постачання алюмінієвих сплавів по Україні та Європі. Надійний партнер у галузі металургії.",
      url: `${BASE_URL}/ua/about`,
      siteName: "Alefmet",
      locale: "uk_UA",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Alefmet — виробництво алюмінію",
        },
      ],
    },
    icons: [{ url: "/fav.png", type: "image/png" }],
  };
}

const AboutPage = () => {
  const locale = useLocale();
  const t = useTranslations("about");
  return (
    <div className={styles.about_container}>
      <Container>
        <p className={styles.title}></p>
        <h2 className={styles.section_title}>{t("heroTitle")}</h2>
        <p className={styles.section_description}>{t("heroDescription")}</p>
        <h3 className={styles.block_title}>{t("listName")}</h3>
        <div className={styles.services_grid}>
          <div className={styles.services_grid_left}>
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <Image src={expert} alt="icon" width={50} height={50} />
                <h4> {t("listTitle_1")}</h4>
              </div>

              <p>{t("listDescr_1")}</p>
            </div>
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <Image src={protect} alt="icon" width={50} height={50} />
                <h4>{t("listTitle_2")}</h4>
              </div>

              <p>{t("listDescr_2")}</p>
            </div>
          </div>
          <div className={styles.services_grid_right}>
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <Image src={individual} alt="icon" width={50} height={50} />
                <h4>{t("listTitle_3")}</h4>
              </div>
              <p>{t("listDescr_3")}</p>
            </div>
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <Image src={standart} alt="icon" width={50} height={50} />
                  <h4>{t("listTitle_4")}</h4>
                </div>
              </div>
              <p>{t("listDescr_4")}</p>
            </div>
          </div>

          <div className={styles.section_btn_container}>
            <Button text={t("btnProduct")} href={`/${locale}/products`} />
            <Button
              text={t("btnContact")}
              href={`/${locale}/contacts`}
              className={styles.section_btn_secondary}
            />
          </div>
        </div>
      </Container>
      <div className={styles.img_container}>
        <div className={styles.img}></div>
        <div className={styles.content_container}>
          <p className={styles.img_content}>{t("export")}</p>
          <p className={styles.img_content_decr}>{t("title")}</p>
        </div>
      </div>
      <Container>
        <div></div>
        <h2 className={styles.section_title}>{t("listName_2")}</h2>
        <ProductFormats />
      </Container>
    </div>
  );
};

export default AboutPage;
