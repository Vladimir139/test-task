import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const CareerGuidance: FC = () => (
  <section className={styles.wrapper}>
    <Image
      src="/images/careerGuidance3.png"
      alt="Девушка поднимается по лестницу с сумкой в руке"
      fill
      className={styles.photo}
    />
    <div className={styles.wrapperInfo}>
      <p className={styles.title}>Профориентация 2024: Работайте там, где вам лучше всего</p>
      <p className={styles.description}>
        Изучите представленную нами страницу популярных вакансий и профессий, или пройдите тест,
        чтобы определиться с работой будущего.к
      </p>
      <Link href="/test" className={styles.linkMore}>
        Больше
      </Link>
    </div>
  </section>
);
