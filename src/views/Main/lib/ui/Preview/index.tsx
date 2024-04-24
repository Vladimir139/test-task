import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";

import { leftToRight100Animation, rightToLeft100Animation } from "@/shared/lib/constants";

import styles from "./styles.module.scss";

export const Preview: FC = () => (
  <section className={styles.wrapper}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={leftToRight100Animation}
      viewport={{ amount: 0.2 }}
      custom={1}
      className={styles.leftWrapper}
    >
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
      {/* <Input */}
      {/*  size="medium" */}
      {/*  placeholder="Введите название работы или компании здесь" */}
      {/*  secondIcon={ */}
      {/*    <div className={styles.wrapperSearchBtn}> */}
      {/*      <Button textSize="medium" radius="little" size="average" isStretch> */}
      {/*        Найти */}
      {/*      </Button> */}
      {/*    </div> */}
      {/*  } */}
      {/* /> */}
    </motion.div>
    <motion.div
      initial="hidden"
      viewport={{ amount: 0.2 }}
      whileInView="visible"
      variants={rightToLeft100Animation}
      custom={1}
    >
      <Image
        src="/images/mainPreview.png"
        alt="Парень стоит на фоне библиотеки, в одной руке у него книга, а друой он показывает большой палец вверх"
        fill
        className={styles.previewImage}
      />
    </motion.div>
  </section>
);
