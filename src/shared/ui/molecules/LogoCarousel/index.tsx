import { motion } from "framer-motion";
import React, { FC } from "react";

import { leftToRight100Animation, topToBottom100Animation } from "@/shared/lib/constants";

import styles from "./styles.module.scss";
import { LogoCarouselProps } from "./types";

export const LogoCarousel: FC<LogoCarouselProps> = ({ logos, additionalText }) => (
  <section className={styles.wrapper}>
    <motion.h2
      variants={topToBottom100Animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      custom={1}
      className={styles.title}
    >
      Наши партнеры
    </motion.h2>
    <ul className={styles.companiesList}>
      {logos.map((item, index) => (
        <motion.li
          variants={leftToRight100Animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          custom={(index + 1) / 3}
          style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}
          id={item.name}
        >
          {item.name}
        </motion.li>
      ))}
    </ul>
    {additionalText && <p className={styles.additionalText}>{additionalText}</p>}
  </section>
);
