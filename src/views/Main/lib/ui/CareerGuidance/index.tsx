import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { leftToRight100Animation, rightToLeft100Animation } from "@/shared/lib/constants";

import styles from "./styles.module.scss";

export const CareerGuidance: FC = () => (
  <section className={styles.wrapper}>
    <motion.div
      variants={leftToRight100Animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      custom={1}
    >
      <Image
        src="/images/careerGuidance3.png"
        alt="Девушка поднимается по лестницу с сумкой в руке"
        fill
        className={styles.photo}
      />
    </motion.div>
    <div className={styles.wrapperInfo}>
      <motion.p
        variants={rightToLeft100Animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        custom={2}
        className={styles.title}
      >
        Профориентация 2024: Работайте там, где вам лучше всего
      </motion.p>
      <motion.p
        variants={rightToLeft100Animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        custom={3}
        className={styles.description}
      >
        Изучите представленную нами страницу популярных вакансий и профессий, или пройдите тест,
        чтобы определиться с работой будущего.к
      </motion.p>
      <motion.div
        variants={rightToLeft100Animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        custom={4}
      >
        <Link href="/test" className={styles.linkMore}>
          Больше
        </Link>
      </motion.div>
    </div>
  </section>
);
