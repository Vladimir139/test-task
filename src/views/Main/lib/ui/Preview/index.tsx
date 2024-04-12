import Image from "next/image";
import React, { FC } from "react";

import { Button, Input } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const Preview: FC = () => (
  <section className={styles.wrapper}>
    <div className={styles.leftWrapper}>
      <h3 className={styles.sloganTitle}>
        <span>Найти.ру</span> <br />
        Определись с
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;будущим
        легче!
      </h3>
      <p className={styles.subSlogan}>
        Хорошая жизнь начинается с хорошей работы или учебного заведения. Найдите их среди тысяч
        подходящих вариантов!
      </p>
      <Input
        size="medium"
        placeholder="Введите название работы или компании здесь"
        secondIcon={
          <div className={styles.wrapperSearchBtn}>
            <Button textSize="medium" radius="little" size="average" isStretch>
              Найти
            </Button>
          </div>
        }
      />
    </div>
    <Image
      src="/images/mainPreview.png"
      alt="Парень стоит на фоне библиотеки, в одной руке у него книга, а друой он показывает большой палец вверх"
      fill
      className={styles.previewImage}
    />
  </section>
);
