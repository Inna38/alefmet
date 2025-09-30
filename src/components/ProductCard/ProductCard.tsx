'use client';

import Image from "next/image";
import { StaticImageData } from "next/image";
import elips from "../../../public/elips.png";
import styles from "./ProductCard.module.css";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; 
import 'swiper/css/navigation';
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Button from "../Button/Button";
import { useLocale } from "next-intl";

interface Product {
  img: string[] | StaticImageData[] | [];
  title: string;
  slug: string;
  description?: string;
  specs?: Record<string, string>;
  features?: Record<string, string | string[] | undefined>;
  advantages?: string[];
  applications?: string[];
};

export default function ProductCard({ productProps }: { productProps: Product }) {
  const { img, title, description, specs, features, advantages, applications } =
    productProps;
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
                  alt={`${title} ${index + 1}`}
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
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.shortDescription}>{description}</p>

          {/* <div className={styles.priceBox}>
            <span className={styles.price}>$450.00 USD</span>
            <span className={styles.oldPrice}>$500.00 USD</span>
          </div> */}

          {/* <div className={styles.actions}>
            <select className={styles.select}>
              <option value="">Виберіть продукт</option>
            </select>
            <button className={styles.addToCart}>Додати в кошик</button>
          </div> */}
          <div className={styles.actions}>
            <Button
              text={locale === "ua" ? "Зв’язатися з нами" : "Contact Us"}
              href={`/${locale}/contacts`}
              // className={styles.section_btn_secondary}
            />
          </div>
        </div>
      </div>

      {/* Блок опису */}
      {/* <section className={styles.section}>
        <h2>Про продукт</h2>
        <p>{longDescription}</p>
      </section> */}

      {/* Технічні характеристики */}
      {specs && (
        <section className={styles.section}>
          <h2>Технічні характеристики</h2>
          <ul className={styles.cardList}>
            {Object.entries(specs).map(([key, value]) => (
              <li key={key}>
                {/* <span className={styles.icon}>⚙️</span> */}
                <div>
                  <strong>{key}:</strong> {value}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Основні характеристики */}
      {features && (
        <section className={styles.section}>
          <h2>Основні характеристики</h2>
          <ul className={styles.cardList}>
            {Object.entries(features).map(([key, value]) => (
              <li key={key}>
                {/* <span className={styles.icon}>🔧</span> */}
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
      {advantages && (
        <section className={styles.section}>
          <h2>Переваги</h2>
          <ul className={styles.cardList}>
            {advantages.map((item) => (
              <li key={item}>
                {/* <span className={styles.icon}>✨</span> */}
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Застосування */}
      {applications && (
        <section className={styles.section}>
          <h2>Застосування</h2>
          <ul className={styles.cardList}>
            {applications.map((item) => (
              <li key={item}>
                {/* <span className={styles.icon}>📌</span> */}
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
    // <Container>
    //   <div className={styles.card}>
    //     <h1 className={styles.title}>{title}</h1>

    //     <div className={styles.imageWrapper}>
    //       <Swiper
    //         modules={[Navigation, Autoplay]}
    //         navigation
    //         spaceBetween={10}
    //         slidesPerView={1}
    //         loop={true}
    //         autoplay={{
    //           delay: 3000,
    //           disableOnInteraction: false
    //         }}
    //         effect="fade"
    //         fadeEffect={{
    //           crossFade: true,
    //         }}
    //         className={styles.swiperContainer}
    //       >
    //         {img.map((src, index) => (
    //           <SwiperSlide key={index} className={styles.swiperSlide}>
    //             <Image
    //               src={src}
    //               alt={`${title} ${index + 1}`}
    //               width={300}
    //               height={300}
    //               className={styles.swiper_img}
    //             />
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>

    //     <p className={styles.description}>{description}</p>

    //     <section className={styles.section}>
    //       <h2>Основні характеристики</h2>
    //       {features && (
    //         <ul className={styles.featureList}>
    //           {Object.entries(features).map(([key, value]) => (
    //             <li key={key}>
    //               <strong>{key}:</strong>{" "}
    //               {Array.isArray(value) ? (
    //                 <ul className={styles.subList}>
    //                   {value.map((v) => (
    //                     <li key={v}>{v}</li>
    //                   ))}
    //                 </ul>
    //               ) : (
    //                 value
    //               )}
    //             </li>
    //           ))}
    //         </ul>
    //       )}
    //     </section>

    //     <section className={styles.section}>
    //       <h2>Переваги</h2>
    //       <ul className={styles.bulletList}>
    //         {advantages?.map((item) => (
    //           <li key={item}>
    //             <Image src={elips} alt="elips" width={33} height={20} />
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //     </section>

    //     <section className={styles.section}>
    //       <h2>Застосування</h2>
    //       <ul className={styles.bulletList}>
    //         {applications?.map((item) => (
    //           <li key={item}>📌 {item}</li>
    //         ))}
    //       </ul>
    //     </section>

    //     {specs && (
    //       <section className={styles.section}>
    //         <h2>Технічні характеристики</h2>
    //         <table className={styles.table}>
    //           <thead>
    //             <tr>
    //               <th>Параметр</th>
    //               <th>Значення</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {Object.entries(specs).map(([key, value]) => (
    //               <tr key={key}>
    //                 <td>{key}</td>
    //                 <td>{value}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </section>
    //     )}
    //   </div>
    // </Container>
  );
}
