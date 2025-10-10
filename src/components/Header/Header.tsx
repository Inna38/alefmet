"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import styles from "./header.module.css";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";

const Header = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header_container}>
        <Container>
          <div className={styles.header_content}>
            <div>
              <Image
                src={logo}
                alt="logo"
                className={styles.logo}
              />
            </div>
            <nav>
              <ul className={styles.nav}>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/`}
                    className={`${
                      pathname === `/${locale}` ? styles.active : ""
                    }`}
                  >
                    {t("home")}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/production`}
                    className={`${
                      pathname === `/${locale}/production` ? styles.active : ""
                    }`}
                  >
                    {t("production")}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/products`}
                    className={`${
                      pathname === `/${locale}/products` ? styles.active : ""
                    }`}
                  >
                    {t("products")}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/contacts`}
                    className={`${
                      pathname === `/${locale}/contacts` ? styles.active : ""
                    }`}
                  >
                    {t("contacts")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
