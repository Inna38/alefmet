"use client";

import { useLocale, useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import collage from "../../../../public/production/collage.png";
import lab from "../../../../public/production/photo_2025-08-13_20-32-10.jpg";
import del from "../../../../public/production/photo_2025-08-14_21-00-37.jpg";

import styles from "./production.module.css"
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

export default function Production() {
    const locale = useLocale();
  const t = useTranslations();
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
            <h2>Наше виробництво</h2>
            <p className={styles.subText}>
              Сучасні технології, автоматизація процесів і контроль якості на
              кожному етапі.
            </p>
          </section>

          <section className={styles.hero}>
            {/* <h2>Відео з виробництва</h2> */}
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
                <p>
                  Наше виробництво – це поєднання найсучасніших технологій та
                  багаторічного досвіду у сфері металургії. Ми контролюємо кожен
                  крок, від підготовки сировини до відливки готової продукції.
                </p>
                {/* <p>
                  Ми виробляємо вторинні алюмінієві сплави для промислового
                  використання, гарантуючи бездоганну якість та точність складу.
                </p> */}
                <p>
                  Ми не просто створюємо метал – ми забезпечуємо вам надійність,
                  точність та економію часу.
                  {/* Це – метал для вашого бізнесу. */}
                </p>
              </div>
            </div>
          </section>

          <section className={styles.hero}>
            <h2>Етапи виробництва</h2>
            <div className={styles.heroContent}>
              <p className={styles.heroTitle}>
                Від іскри до досконалості: кожен етап виробництва алюмінієвих
                чушок — це мистецтво трансформації металу. Ми поєднуємо традиції
                майстерності з інноваційними технологіями, щоб гарантувати
                бездоганну якість та надійність для вашого бізнесу.
              </p>

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
            <h2>Точність у кожному сплаві: Наша лабораторія</h2>
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
                <p>
                  Серце нашого контролю якості – портативний спектрометр.
                  {/* підключений до ноутбука. */}
                  Це не просто прилад, а ключ до безкомпромісної чистоти.
                  {/* Ми не покладаємося на здогадки: */}
                  Кожен зразок алюмінію проходить експрес-аналіз, що миттєво
                  підтверджує його хімічний склад.
                </p>
                <p>
                  Ця технологія дозволяє нам відстежувати домішки та легуючі
                  елементи з високою точністю, забезпечуючи, що кожен сплав
                  відповідає найсуворішим вимогам EN, ISO, ASTM.
                  {/* Це ваш спокій
                  та гарантія, що ви отримуєте продукт, який пройшов усі
                  випробування на якість та готовий до найвідповідальніших
                  завдань. */}
                </p>
              </div>
            </div>
          </section>

          <section className={styles.hero}>
            <h2> Доставка та логістика</h2>
            <div className={styles.delContainer}>
              <p>
                Готова продукція: Завантаження та відправка. Наші потужності
                дозволяють виробляти понад 1000 тонн алюмінію щомісяця, що
                забезпечує стабільність та надійність постачання. Ми доставляємо
                метал у будь-яку точку світу, підтверджуючи наш статус
                глобального партнера.
              </p>

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
            <h2>Потрібен надійний партнер в алюмінієвому бізнесі?</h2>
            <p className={styles.subText}>
              Ми поєднуємо досвід, технології та індивідуальний підхід, щоб ваш
              бізнес був успішним.
            </p>
            <div className={styles.section_btn}>
              <Button
                text="Продукція"
                href={`/${locale}/products`}
                // className={styles.section_btn_active}
              />
              <Button
                text="Отримати консультацію"
                href={`/${locale}/contacts`}
                className={styles.section_btn_secondary}
              />
            </div>
          </section>
        </main>
        {/* <main className={styles.production_container}>
          <section className={styles.hero}>
            <h1>Наше виробництво</h1>
            <p>
              Сучасні технології, автоматизація процесів і контроль якості на
              кожному етапі.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Відео з виробництва</h2>
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
          </section>

          <section className={styles.section}>
            <h2>Етапи виробництва</h2>
            <div className={styles.processImages}>
              <Image
                src=""
                alt="Сировина"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src=""
                alt="Плавка"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src=""
                alt="Лиття"
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <ul className={styles.steps}>
              <li>Прийом і перевірка сировини</li>
              <li>Плавка в індукційних печах</li>
              <li>Лиття та формування</li>
              <li>Охолодження та обробка</li>
              <li>Контроль якості</li>
              <li>Упаковка і логістика</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Обладнання</h2>
            <p>
              Використовуємо високоточне обладнання від провідних виробників.
            </p>
            <div className={styles.gallery}>
              <Image
                src="/images/equipment1.jpg"
                alt="Обладнання 1"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src="/images/equipment2.jpg"
                alt="Обладнання 2"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src="/images/equipment3.jpg"
                alt="Обладнання 3"
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Схема виробничого процесу</h2>
            <div className={styles.processChart}>
              <Image
                src=""
                alt="Схема виробничого циклу"
                width={1000}
                height={400}
                className={styles.img}
              />
            </div>
          </section>
        </main> */}
      </Container>
    </>
  );
}
