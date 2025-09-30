import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./types";
import arrow from "../../../public/arrow_right.svg";
import Image from "next/image";

function Button({ text, href = "", className, size = "Small" }: ButtonProps) {
  const sizeClass = size === "Large" ? styles.large : styles.small;

  return (
    <a
      href={href}
      // target="_blank"
      // rel="noopener noreferrer"
      className={`${styles.button} ${sizeClass} ${className || ""}`}
    >
      {/* <button disabled={disabled} className={`${styles.button} ${sizeClass}`}> */}
      {text.toUpperCase()}
      <Image src={arrow} alt="arrow" width={44} height={24} />
      {/* </button> */}
    </a>
  );
}

export default Button;
