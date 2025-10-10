import Container from "@/components/Container/Container";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import telegram from "../../../../public/social/Telegram_2019_Logo.svg.webp";
import whatsapp from "../../../../public/social/png-transparent-whatsapp-icon-whatsapp-computer-icons-symbol-text-messaging-whats-logo-grass-mobile-phones.png";
import viber from "../../../../public/social/3938039.png";
import address from "../../../../public/ico_address.png";
import language from "../../../../public/lang.svg";
import burger from "../../../../public/burger.png";
import burger_close from "../../../../public/burger_close.png";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import styles from "./InfoSectionMobailClient.module.css";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useTranslations } from "use-intl";

const InfoSectionMobailClient = ({
  burgerMenu,
  setBurgerMenu,
  changeLang,
  setChangeLang,
  changeLanguage,
}: {
  burgerMenu: boolean;
  setBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  changeLang: boolean;
  setChangeLang: React.Dispatch<React.SetStateAction<boolean>>;
  changeLanguage: (str: string) => void;
}) => {
  const t = useTranslations("nav");
  const local = useLocale();

  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setBurgerMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [burgerMenu, setBurgerMenu]);
  return (
    <div>
      <Container>
        <ul className={styles.mobile_list}>
          <li className={styles.mobile_item}>
            <Image
              src={burger}
              alt="menu_burger"
              width={45}
              height={35}
              className={styles.burger}
              onClick={() => setBurgerMenu((prev) => !prev)}
            />
          </li>

          <li>
            <Image src={logo} alt="logo" className={styles.logo} />
          </li>

          <li
            onClick={() => setChangeLang((prev) => !prev)}
            className={styles.lang_container}
          >
            <Image
              src={language}
              alt="language"
              width={50}
              height={50}
              className={styles.icon_lang}
            />
            <span className={styles.title_lang}>
              {local === "ua" ? "Українська" : "English"}
            </span>
            {changeLang && (
              <div className={styles.changeLang_container}>
                <ul>
                  <li>
                    <button
                      className={styles.btn}
                      onClick={() => changeLanguage("ua")}
                    >
                      Українська
                    </button>
                  </li>
                  <li>
                    <button
                      className={styles.btn}
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </Container>

      <div
        ref={menuRef}
        className={`${styles.mobile_container} ${
          burgerMenu ? styles.active : ""
        }`}
      >
        <Container>
          <Image
            src={burger_close}
            alt="menu_burger"
            width={35}
            height={35}
            className={styles.burger_close}
            onClick={() => setBurgerMenu((prev) => !prev)}
          />
          <nav>
            <ul className={styles.nav}>
              <li className={styles.item}>
                <Link
                  href={`/${local}/`}
                  className={`${pathname === `/${local}` ? styles.active : ""}`}
                  onClick={() => burgerMenu && setBurgerMenu((prev) => !prev)}
                >
                  {t("home")}
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href={`/${local}/production`}
                  className={`${
                    pathname === `/${local}/production` ? styles.active : ""
                  }`}
                  onClick={() => burgerMenu && setBurgerMenu((prev) => !prev)}
                >
                  {t("production")}
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href={`/${local}/products`}
                  className={`${
                    pathname === `/${local}/products` ? styles.active : ""
                  }`}
                  onClick={() => burgerMenu && setBurgerMenu((prev) => !prev)}
                >
                  {t("products")}
                </Link>
              </li>

              <li className={styles.item}>
                <Link
                  href={`/${local}/contacts`}
                  className={`${
                    pathname === `/${local}/contacts` ? styles.active : ""
                  }`}
                  onClick={() => burgerMenu && setBurgerMenu((prev) => !prev)}
                >
                  {t("contacts")}
                </Link>
              </li>

              <li
                className={`${styles.item} ${styles.item_footer}`}
                onClick={() => burgerMenu && setBurgerMenu((prev) => !prev)}
              >
                <a
                  href={`/${local}/contacts#map`}
                  className={styles.address_container}
                >
                  <Image src={address} alt="telegram" width={30} height={35} />
                  <p>{t("address")}</p>
                </a>
              </li>

              <li className={styles.item}>
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.list}`}>
                    <a
                      href="https://t.me/+380977786507"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={telegram}
                        alt="telegram"
                        width={32}
                        height={32}
                      />
                    </a>
                    <a
                      href="viber://chat?number=+380977786507"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={viber} alt="viber" width={32} height={32} />
                    </a>
                    <a
                      href="https://wa.me/380977786507"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={whatsapp}
                        alt="whatsapp"
                        width={32}
                        height={32}
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default InfoSectionMobailClient;