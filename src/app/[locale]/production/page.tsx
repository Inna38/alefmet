"use client";

import { useLocale, useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import collage from "../../../../public/production/collage1.jpg";
import lab from "../../../../public/production/photo_2025-08-13_20-32-10.jpg";
import del from "../../../../public/production/photo_2025-08-14_21-00-37.jpg";

import styles from "./production.module.css";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

export default function Production() {
  const locale = useLocale();
  const t = useTranslations("production");
  return (
    <>
      <Head>
        <title>Виробництво | Компанія Алюмінію</title>
        <meta
          name="description"
          content="Дізнайтесь про наше сучасне виробництво алюмінію: етапи, обладнання, стандарти якості та відео з виробництва."
        />
      </Head>

      <Container>
        <main className={styles.production_container}>
          <section className={styles.hero}>
            <h2>{t("title")}</h2>
            <p className={styles.subText}>{t("descr")}</p>
          </section>

          <section className={styles.hero}>
            <div className={styles.videoSectionContainer}>
              <div className={styles.videoWrapper}>
                <video
                  src="/video_2025.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.video}
                />
              </div>
              <div className={styles.videoContent}>
                <p>{t("videoContent_1")}</p>
                <p>{t("videoContent_2")}</p>
              </div>
            </div>
          </section>

          <section className={styles.hero}>
            <h2>{t("listTitle_1")}</h2>
            <div className={styles.heroContent}>
              <p className={styles.heroTitle}>{t("listDescr_1")}</p>

              <div className={styles.gallery}>
                <Image
                  src={collage}
                  alt="Сировина"
                  width={600}
                  height={330}
                  className={styles.img}
                />
              </div>
            </div>
          </section>

          <section className={styles.hero}>
            <h2>{t("listTitle_2")}</h2>
            {/* <p>
              Використовуємо високоточне обладнання від провідних виробників.
            </p> */}
            <div className={styles.labContainer}>
              <div className={styles.gallery}>
                <Image
                  src={lab}
                  alt="Обладнання 1"
                  width={500}
                  height={400}
                  className={styles.img}
                />
              </div>
              <div className={styles.labContent}>
                <p>{t("listDescr_2")}</p>
                <p>
                  {t("listDescr_2_2")}
                  {/* Це ваш спокій
                  та гарантія, що ви отримуєте продукт, який пройшов усі
                  випробування на якість та готовий до найвідповідальніших
                  завдань. */}
                </p>
              </div>
            </div>
          </section>

          <section className={styles.hero}>
            <h2>{t("listTitle_3")}</h2>
            <div className={styles.delContainer}>
              <p>{t("listDescr_3")}</p>

              <div className={styles.gallery}>
                <Image
                  src={del}
                  alt="Плавка"
                  width={400}
                  height={480}
                  className={styles.img}
                />
              </div>
            </div>
          </section>

          <section className={styles.hero}>
            <h2>{t("listTitle_4")}</h2>
            <p className={styles.subText}>{t("listDescr_4")}</p>
            <div className={styles.section_btn}>
              <Button text={t("btnProduct")} href={`/${locale}/products`} />
              <Button
                text={t("btnContact")}
                href={`/${locale}/contacts`}
                className={styles.section_btn_secondary}
              />
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
