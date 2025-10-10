import React from 'react'
import Container from '../Container/Container'

import styles from "./BannerSection.module.css"
import { useTranslations } from 'next-intl';

const BannerSection = () => {
    const t = useTranslations();
  return (
    <>
      <div className={styles.banner_container}>
        <Container>
          <h1 className={styles.banner_title}>
            {/* Ваш глобальний партнер у світі алюмінію */}
            {/* Метал для вашого бізнесу */}
            {/* Алюміній та сплави для Вашої справи */}
            {t("banner_title")}
            {/* ТОВ «Алефмет» — ваш надійний партнер у сфері алюмінію */}
          </h1>
          {/* <h2 className={styles.banner_content}>{t("banner_content")}</h2> */}
          {/* <h2 className={styles.banner_title}>
            Надійна сировина для вашого виробництва
          </h2> */}
        </Container>
      </div>
    </>
  );
}

export default BannerSection