import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const NotFoundPage: FC = () => (
  <section>
    <Image
      src="/images/not-found2.png"
      alt="Парень стоит с картой и смотрит в бинокль, а под ним номер ошибки - 404"
      fill
      className={styles.image}
    />
    <p className={styles.textError}>Упс! Страница, которую вы ищите, не найдена</p>
    <Link href="/" className={styles.link}>
      На главную
    </Link>
  </section>
);
