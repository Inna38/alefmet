import React from 'react';
import Container from '../Container/Container';


import styles from "./AboutPage.module.css";
import { useLocale, useTranslations } from 'next-intl';
import Button from '../Button/Button';
import Image from 'next/image';
import ProductFormats from './ProductFormats/ProductFormats';
import expert from "../../../public/expert.svg";
import protect from "../../../public/protect.svg";
import individual from "../../../public/individual.svg";
import standart from "../../../public/standart.svg";

const AboutPage = () => {
  const locale = useLocale();
     const t = useTranslations("about");
  return (
    // <div className={styles.about_container}>
    //   <Container>
    //     <h2>Комплексні рішення у сфері постачання алюмінію під ключ</h2>

    //     <p>
    //       <p>
    //         Ми пропонуємо повний цикл послуг — від підбору оптимального
    //         алюмінієвого профілю до доставки продукції на ваш об’єкт. Наша мета
    //         — забезпечити вам надійність, точність і економію часу на кожному
    //         етапі.
    //       </p>
    //     </p>

    //     <ul>
    //       <li>
    //         <p>
    //           Консультації та підбір алюмінію під конкретні задачі (будівництво,
    //           виробництво, фасади тощо)
    //         </p>
    //       </li>
    //       <li>
    //         <p>
    //           Різка та обробка алюмінієвих профілів за вашими розмірами (можлива
    //           високоточна порізка)
    //         </p>
    //       </li>
    //       <li>
    //         <p>
    //           Проектна опрацювання та розрахунки обʼємів – допомога у підрахунку
    //           необхідної кількості матеріалів
    //         </p>
    //       </li>
    //       <li>
    //         <p>Упаковка та маркування продукції згідно з вимогами замовника</p>
    //       </li>
    //       <li>
    //         <p>
    //           Складські запаси та резервування алюмінію під великі/довгострокові
    //           замовлення
    //         </p>
    //       </li>
    //       <li>
    //         {" "}
    //         <p>Оперативна логістика та доставка по всій території країни</p>
    //       </li>
    //       <li>
    //         <p> Індивідуальні умови для постійних клієнтів та оптовиків</p>
    //       </li>
    //     </ul>
    //   </Container>
    // </div>

    <div className={styles.about_container}>
      <Container>
        {/* <h1>🏢 ТОВ «Алефмет» — ваш надійний партнер у сфері алюмінію</h1> */}
        <p className={styles.title}>
          {/* ТОВ «Алефмет» — це сучасне підприємство, що спеціалізується на
          виробництві вторинних алюмінієвих сплавів для промислового
          використання. */}
        </p>
        <h2 className={styles.section_title}>
          Комплексні рішення у сфері постачання алюмінію під ключ
        </h2>
        <p className={styles.section_description}>
          ТОВ «Алефмет» — це сучасне підприємство, що спеціалізується на
          виробництві вторинних алюмінієвих сплавів для промислового
          використання. Ми пропонуємо повний цикл послуг, від виробництва
          алюмінієвих сплавів до їхньої доставки на ваш об’єкт. Наша мета —
          забезпечити вам надійність, точність і економію часу на кожному етапі.
          {/* Ми пропонуємо повний цикл послуг — від підбору оптимального
          алюмінієвого профілю до доставки продукції на ваш об’єкт. Наша мета —
          забезпечити вам надійність, точність і економію часу на кожному етапі. */}
        </p>
        <h3 className={styles.block_title}>
          {/* Потужності та сертифіковане виробництво */}
          Чому обирають нас?
        </h3>
        <div className={styles.services_grid}>
          <div className={styles.services_grid_left}>
            {/* <div className={styles.service_card}>
              <div className={styles.icon}>🏭</div>
              <h4>Власні плавильні комплекси</h4>
              <p>
                Понад 1000 тонн алюмінію щомісяця — це стабільність постачання
                та найвищий контроль якості на кожному етапі виробництва.
              </p>
            </div> */}
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <Image
                  src={expert}
                  alt="icon"
                  width={50}
                  height={50}
                  // className={styles.img}
                />
                <h4>Досвід та Експертиза</h4>
              </div>

              <p>
                Багаторічний досвід у галузі металургії та команда
                висококваліфікованих фахівців дозволяють нам знаходити
                оптимальні рішення для найскладніших завдань.
              </p>
            </div>
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <Image
                  src={protect}
                  alt="icon"
                  width={50}
                  height={50}
                  // className={styles.img}
                />
                <h4>Надійність постачання</h4>
              </div>

              <p>
                Ми гарантуємо стабільність постачання та виконання зобов'язань,
                завдяки потужностям, що дозволяють виробляти понад 1000 тонн
                алюмінію щомісяця.
                {/* Понад 1000 тонн алюмінію щомісяця — це стабільність постачання
                та найвищий контроль якості на кожному етапі виробництва. */}
              </p>
            </div>
          </div>
          <div className={styles.services_grid_right}>
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <Image
                  src={individual}
                  alt="icon"
                  width={50}
                  height={50}
                  // className={styles.img}
                />
                <h4>Індивідуальний підхід</h4>
              </div>
              <p>
                {/* Працюємо з індивідуальними кресленнями та специфікаціями
                замовника, щоб створити сплав, який ідеально відповідатиме вашим
                потребам. */}
                Ми надаємо гнучкі рішення, що повністю відповідають вашим
                унікальним вимогам. Ваші індивідуальні креслення та специфікації
                — наш пріоритет.
              </p>
            </div>
            <div className={styles.service_card}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <Image
                    src={standart}
                    alt="icon"
                    width={50}
                    height={50}
                    // className={styles.img}
                  />
                  <h4>Відповідність стандартам</h4>
                </div>
              </div>
              <p>
                {/* Ми виробляємо зливки та гранули різних фракцій для широкого
                спектра промислового використання. */}
                Наша продукція відповідає міжнародним стандартам якості EN, ISO,
                ASTM, що є гарантією надійного хімічного складу та своєчасної
                доставки.
              </p>
            </div>
          </div>

          <div className={styles.section_btn_container}>
            <Button
              text="Продукція"
              href={`/${locale}/products`}
              // className={styles.section_btn_active}
            />
            <Button
              text="Контакти"
              href={`/${locale}/contacts`}
              className={styles.section_btn_secondary}
            />
          </div>
        </div>

        {/* <h3 className={styles.block_title}>Послуги під ключ</h3>
        <div className={styles.services_grid}>
          <div className={styles.services_grid_left}>
            <div className={styles.service_card}>
              <div className={styles.icon}>🔍</div>
              <h4>Консультації та підбір</h4>
              <p>Матеріали під будівництво, виробництво, фасади тощо.</p>
            </div>

            <div className={styles.service_card}>
              <div className={styles.icon}>✂️</div>
              <h4>Різка та обробка профілів</h4>
              <p>Точна порізка алюмінію за вашими розмірами.</p>
            </div>

            <div className={styles.service_card}>
              <div className={styles.icon}>📐</div>
              <h4>Проектна проработка</h4>
              <p>Допомога з розрахунками матеріалів та параметрів.</p>
            </div>

            <div className={styles.service_card}>
              <div className={styles.icon}>📦</div>
              <h4>Упаковка та маркування</h4>
              <p>Упаковка за вимогами клієнта — зручно та безпечно.</p>
            </div>
          </div>

          <div className={styles.services_grid_right}>
            <div className={styles.service_card}>
              <div className={styles.icon}>🏬</div>
              <h4>Складські запаси</h4>
              <p>Резервування продукції під великі та довгострокові проєкти.</p>
            </div>
            <div className={styles.service_card}>
              <div className={styles.icon}>🚚</div>
              <h4>Логістика та доставка</h4>
              <p>Швидке постачання по Україні та за кордон.</p>
            </div>

            <div className={styles.service_card}>
              <div className={styles.icon}>🤝</div>
              <h4>Індивідуальні умови</h4>
              <p>Гнучкі ціни та спеціальні умови для постійних клієнтів.</p>
            </div>
          </div>
        </div> */}

        {/* 
        <div className={`${styles.services_grid} ${styles.with_lines}`}>
          <div className={styles.services_grid_left}>
            <div className={styles.service_card}>
              <div className="icon">🔍</div>
              <h3>Консультації та підбір алюмінію</h3>
              <p>
                Підбір матеріалів під завдання: будівництво, виробництво, фасади
                тощо.
              </p>
              <a href="#">Дізнатися більше →</a>
            </div>

            <div className={styles.service_card}>
              <div className="icon">✂️</div>
              <h3>Різка та обробка профілів</h3>
              <p>Різка по розмірах, високоточна обробка алюмінію.</p>
              <a href="#">Дізнатися більше →</a>
            </div>

            <div className={styles.service_card}>
              <div className="icon">📐</div>
              <h3>Проектна проработка</h3>
              <p>Допомога з розрахунками об’ємів і технічних параметрів.</p>
              <a href="#">Дізнатися більше →</a>
            </div>

            <div className={styles.service_card}>
              <div className="icon">📦</div>
              <h3>Упаковка та маркування</h3>
              <p>Упаковка за вимогами клієнта, зручне сортування.</p>
              <a href="#">Дізнатися більше →</a>
            </div>
          </div>

          <div className={styles.services_grid_right}>
            <div className={styles.service_card}>
              <div className="icon">🏬</div>
              <h3>Складські запаси</h3>
              <p>Зберігання та резервування алюмінію під великі замовлення.</p>
              <a href="#">Дізнатися більше →</a>
            </div>

            <div className={styles.service_card}>
              <div className="icon">🚚</div>
              <h3>Логістика та доставка</h3>
              <p>Оперативна доставка по всій країні та за кордон.</p>
              <a href="#">Дізнатися більше →</a>
            </div>

            <div className={styles.service_card}>
              <div className="icon">🤝</div>
              <h3>Індивідуальні умови</h3>
              <p>Гнучкі ціни та умови співпраці для постійних клієнтів.</p>
              <a href="#">Дізнатися більше →</a>
            </div>
          </div>
          <div className={styles.section_btn_container}>
            <Button
              text="Продукція"
              href={`/${locale}/products`}
              // className={styles.section_btn_active}
            />
            <Button
              text="Контакти"
              href={`/${locale}/contacts`}
              className={styles.section_btn_secondary}
            />
          </div>
        </div> */}
      </Container>
      <div className={styles.img_container}>
        <div className={styles.img}></div>
        {/* <Image
          // src={delivery}
          alt="delivery"
          // width={100}
          // height={50}
          //   fill
          className={styles.img}
        /> */}

        <div className={styles.content_container}>
          <p className={styles.img_content}>{t("export")}</p>
          <p className={styles.img_content_decr}>{t("title")}</p>
        </div>
      </div>
      <Container>
        <div></div>
        <h2 className={styles.section_title}>Наші продукти та послуги</h2>
        <ProductFormats />
      </Container>
    </div>

    // <div className={styles.about_container}>
    //   <Container>
    //     <div className={styles.content}>
    //       <section className={`${styles.intro} ${styles.section}`}>
    //         <p>
    //           ТОВ «Алефмет» — Алюміній, що працює на результат. <br /> Надійний
    //           партнер для промисловості Ми не просто переплавляємо метал — ми
    //           створюємо якісну сировину для сильних брендів, які щодня рухають
    //           світ уперед.
    //         </p>
    //         <p>
    //           ТОВ «Алефмет» — це сучасне підприємство, що спеціалізується на
    //           виробництві вторинних алюмінієвих сплавів для промислового
    //           використання.
    //         </p>
    //       </section>

    //       <section className={`${styles.industries} ${styles.section}`}>
    //         <p>
    //           Наша продукція — основа надійності у машинобудуванні,
    //           автомобільній промисловості, будівництві та електротехніці.
    //         </p>
    //       </section>

    //       <section className={`${styles.features} ${styles.section}`}>
    //         <h3 className={styles.title}>
    //           🚀 Ми допомагаємо бізнесу масштабуватись
    //         </h3>
    //         <ul className={styles.list}>
    //           <li>
    //             &ensp; Власні плавильні комплекси потужністю 1000+ тонн/місяць
    //           </li>
    //           <li>&ensp;Виробництво під індивідуальні технічні вимоги</li>
    //           <li>&ensp; Продукція у форматі зливків і гранул різних фракцій</li>
    //           <li>&ensp;
    //             Повна відповідність міжнародним стандартам: EN, ISO, ASTM.
    //             {/* <p>
    //               Ми постачаємо не просто метал — ми постачаємо результат, який
    //               відповідає вашим очікуванням по хімічному складу, якості,
    //               термінам і упаковці.
    //             </p> */}
    //           </li>
    //         </ul>
    //       </section>

    //       <section className={`${styles.ecology} ${styles.section}`}>
    //         <h3 className={styles.title}>♻️ Екологія — частина нашої ДНК</h3>
    //         <p>
    //           Наш процес переробки вторинного алюмінію — це не лише
    //           ефективність, а й відповідальність. Ми зменшуємо викиди CO₂,
    //           зберігаємо ресурси та допомагаємо партнерам реалізовувати
    //           стратегії сталого розвитку (ESG).
    //         </p>
    //       </section>

    //       <section className={`${styles.international} ${styles.section}`}>
    //         <h3 className={styles.title}>🌐 Міжнародний фокус</h3>
    //         <p>
    //           ТОВ «Алефмет» працює з клієнтами з країн ЄС, Близького Сходу та
    //           Азії. Ми знаємо, що таке логістика без стресу, повний пакет
    //           експортної документації, гнучкі умови контрактів і надійні
    //           терміни.
    //         </p>
    //       </section>

    //       <section className={`${styles.partners} ${styles.section}`}>
    //         <h3 className={styles.title}>
    //           🤝 Долучайтеся до партнерства. Ми відкриті до співпраці з:
    //         </h3>
    //         <ul className={styles.list}>
    //           <li>&ensp;Заводами та промисловими підприємствами</li>
    //           <li>&ensp;Міжнародними закупівельниками</li>
    //           <li>&ensp;Металотрейдерами</li>
    //           <li>&ensp;Контрактними виробниками та експортерами</li>
    //         </ul>
    //       </section>

    //       <section className={`${styles.benefits} ${styles.section}`}>
    //         <h3 className={styles.title}>
    //           🔧 Ми — ваші люди, якщо вам потрібно:
    //         </h3>
    //         <ul className={styles.list}>
    //           <li>&ensp;Якісно</li>
    //           <li>&ensp;Швидко</li>
    //           <li>&ensp;З гарантією</li>
    //           <li>&ensp;Без зайвого клопоту</li>
    //         </ul>
    //       </section>
    //     </div>
    //   </Container>
    //   <div className={styles.img_container}>
    //     <Image
    //       src={delivery}
    //       alt="delivery"
    //       // width={100}
    //       // height={50}
    //       //   fill
    //       className={styles.img}
    //     />
    //     <div className={styles.content_container}>
    //       <p className={styles.img_content}>{t("export")}</p>
    //       <p className={styles.img_content_decr}>{t("title")}</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AboutPage