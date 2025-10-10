"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./contacts.module.css";
import Container from "@/components/Container/Container";
import Image from "next/image";
import phone from "../../../../public/phone.png";
import email from "../../../../public/email.png";
import address from "../../../../public/address.png";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

// Динамически подключаем карту, чтобы отключить SSR
// const Map = dynamic(() => import("../../../components/GoogleMap/GoogleMap"), {
//   ssr: false,
// });

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const { locale } = params;

//   if (locale === "en") {
//     return {
//       title: "Contacts | Alefmet — Aluminum Production and Sales",
//       description:
//         "Contact Alefmet: aluminum alloy supplier in Ukraine and Europe. Call us or email to get a quote for aluminum ingots, granules, or casting alloys.",
//       keywords:
//         "Alefmet contacts, aluminum supplier, Ukraine, aluminum alloys, granules, ingots, casting, buy aluminum",
//       alternates: {
//         canonical: `${BASE_URL}/en/contacts`,
//         languages: {
//           "uk-UA": `${BASE_URL}/ua/contacts`,
//           "en-US": `${BASE_URL}/en/contacts`,
//         },
//       },
//       openGraph: {
//         title: "Alefmet Contacts",
//         description:
//           "Get in touch with Alefmet — a reliable manufacturer and supplier of aluminum alloys.",
//         url: `${BASE_URL}/en/contacts`,
//         siteName: "Alefmet",
//         locale: "en_US",
//         type: "website",
//         images: [
//           {
//             url: "/og-image.jpg",
//             width: 1200,
//             height: 630,
//             alt: "Alefmet aluminum supplier",
//           },
//         ],
//       },
//       icons: [{ url: "/fav.png", type: "image/png" }],
//     };
//   }

//   // 🇺🇦 Українська версія
//   return {
//     title: "Контакти | Алефмет — Виробництво та продаж алюмінію",
//     description:
//       "Зв’яжіться з ТОВ «Алефмет» — постачальником алюмінієвих сплавів в Україні. Телефонуйте або пишіть, щоб отримати комерційну пропозицію на чушки, гранули або лиття.",
//     keywords:
//       "контакти Алефмет, постачальник алюмінію, алюмінієві сплави, гранули, чушки, лиття, купити алюміній, Україна",
//     alternates: {
//       canonical: `${BASE_URL}/ua/contacts`,
//       languages: {
//         "uk-UA": `${BASE_URL}/ua/contacts`,
//         "en-US": `${BASE_URL}/en/contacts`,
//       },
//     },
//     openGraph: {
//       title: "Контакти Алефмет",
//       description:
//         "Надійний виробник і постачальник алюмінієвих сплавів. Дзвоніть або пишіть — ми поруч.",
//       url: `${BASE_URL}/ua/contacts`,
//       siteName: "Alefmet",
//       locale: "uk_UA",
//       type: "website",
//       images: [
//         {
//           url: "/og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Alefmet — контакти постачальника алюмінію",
//         },
//       ],
//     },
//     icons: [{ url: "/fav.png", type: "image/png" }],
//   };
// }

const Map = dynamic(() => import("../../../components/Map/Map"), {
  ssr: false,
});

const Contacts = () => {
  const t = useTranslations("contact");

  return (
    <div className={styles.contacts_container}>
      <Container>
        <h1 className={styles.title}>{t("title")}</h1>

        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="tel:+380977786507" target="_blank">
              <Image
                src={phone}
                alt="phone"
                width={100}
                height={100}
                className={styles.tel}
              />
              <p className={styles.item_title}>{t("tel")}</p>
              <p>+38(097)778-65-07</p>
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="mailto:dimaglagolev2008@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={email}
                alt="email"
                width={100}
                height={100}
                className={styles.email}
              />
              <p className={styles.item_title}>{t("email")}</p>
              <p>dimaglagolev2008@gmail.com</p>
            </a>
          </li>
          <li className={styles.item}>
            <a href="#map" target="_blank">
              <Image
                src={address}
                alt="address"
                width={100}
                height={100}
                className={styles.address}
              />
              <p className={styles.item_title}>{t("address_title")}</p>
              <p>{t("address")}</p>
            </a>
          </li>
        </ul>
        <section className={styles.contactSection}>
          <h2 className={styles.formTitle}>{t("sendMessage")}</h2>
          <p className={styles.description}>{t("titleMessage")}</p>

          <form className={styles.form}>
            <div className={styles.row}>
              <label>
                {t("emailAddress")} *
                <input type="email" required className={styles.input} />
              </label>

              <label>
                {t("telMessage")}
                <input type="text" className={styles.input} />
              </label>
            </div>

            <label>
              {t("message")} *
              <textarea required className={styles.textarea}></textarea>
            </label>

            <button type="submit" className={styles.button}>
              {t("send")}
            </button>
          </form>
        </section>
      </Container>
      <div className={styles.map} id="map">
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
