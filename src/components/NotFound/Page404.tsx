"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import ArrowCorner from "./ArrowCorner";

import styles from "./Page404.module.css";


export default function Page404() {
  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.mainBox}>
          <div className={styles.main}>
            <h1 className={styles.title}>404</h1>
          </div>
          <div className={styles.imgBox}>
            <Image
              src="/images/img404.png"
              alt="404 Illustration"
              className={styles.img}
              priority
            />
            <Link className={styles.btn} href="/">
              <ArrowCorner color="#f5ffff" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
