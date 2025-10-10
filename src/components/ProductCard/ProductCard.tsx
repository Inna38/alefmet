"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./ProductCard.module.css";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Button from "../Button/Button";
import { useLocale } from "next-intl";

interface Product {
  img: string[] | StaticImageData[] | [];
  titleUa: string;
  titleEn: string;
  slug: string;
  descriptionUa?: string;
  descriptionEn?: string;
  specsUa: Record<string, string>;
  specsEn: Record<string, string>;
  featuresUa: Record<string, string | string[] | undefined>;
  featuresEn: Record<string, string | string[] | undefined>;
  advantagesUa: string[];
  advantagesEn: string[];
  applicationsUa: string[];
  applicationsEn: string[];
}

export default function ProductCard({
  productProps,
}: {
  productProps: Product;
}) {
  const {
    img,
    titleUa,
    titleEn,
    descriptionUa,
    descriptionEn,
    specsUa,
    specsEn,
    featuresUa,
    featuresEn,
    advantagesUa,
    advantagesEn,
    applicationsEn,
    applicationsUa,
  } = productProps;
  const locale = useLocale();

  return (
    <Container>
      <div className={styles.productPage}>
        {/* Ліва частина - зображення */}
        <div className={styles.imageSection}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className={styles.swiperContainer}
          >
            {img.map((src, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Image
                  src={src}
                  alt={`product ${index + 1}`}
                  width={500}
                  height={400}
                  className={styles.productImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Права частина - інформація */}
        <div className={styles.infoSection}>
          <h1 className={styles.title}>
            {locale === "ua" ? titleUa : titleEn}
          </h1>
          <p className={styles.shortDescription}>
            {locale === "ua" ? descriptionUa : descriptionEn}
          </p>

          <div className={styles.actions}>
            <Button
              text={locale === "ua" ? "Зв’язатися з нами" : "Contact Us"}
              href={`/${locale}/contacts`}
            />
          </div>
        </div>
      </div>

      {/* Технічні характеристики */}
      {(locale === "ua" ? specsUa : specsEn) && (
        <section className={styles.section}>
          <h2>
            {locale === "ua"
              ? "Технічні характеристики"
              : "Technical Specifications"}
          </h2>
          <ul className={styles.cardList}>
            {Object.entries(locale === "ua" ? specsUa : specsEn).map(
              ([key, value]) => (
                <li key={key}>
                  <div>
                    <strong>{key}:</strong> {value}
                  </div>
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Основні характеристики */}
      {(locale === "ua" ? featuresUa : featuresEn) && (
        <section className={styles.section}>
          <h2>
            {locale === "ua" ? "Основні характеристики" : "Main Features"}
          </h2>
          <ul className={styles.cardList}>
            {Object.entries(
              locale === "ua" ? featuresUa ?? {} : featuresEn ?? {}
            ).map(([key, value]) => (
              <li key={key}>
                <div>
                  <strong>{key}:</strong>{" "}
                  {Array.isArray(value) ? value.join(", ") : value}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Переваги */}
      {(locale === "ua" ? advantagesUa : advantagesEn)?.length > 0 && (
        <section className={styles.section}>
          <h2>{locale === "ua" ? "Переваги" : "Advantages"}</h2>
          <ul className={styles.cardList}>
            {(locale === "ua" ? advantagesUa : advantagesEn).map((item) => (
              <li key={item}>
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Застосування */}
      {(locale === "ua" ? applicationsUa : applicationsEn)?.length > 0 && (
        <section className={styles.section}>
          <h2>{locale === "ua" ? "Застосування" : "Applications"}</h2>
          <ul className={styles.cardList}>
            {(locale === "ua" ? applicationsUa : applicationsEn).map((item) => (
              <li key={item}>
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
