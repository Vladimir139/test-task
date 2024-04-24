import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";

import { leftToRight100Animation, rightToLeft100Animation } from "@/shared/lib/constants";

import styles from "./styles.module.scss";

export const WhoAreWe: FC = () => (
  <>
    <section className={styles.topWrapper}>
      <motion.div
        className={styles.textWrapper}
        variants={leftToRight100Animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        custom={1}
      >
        <h3 className={styles.title}>Кто мы?</h3>
        <p className={styles.text}>
          <span>«Найти.ру»</span> - это сайт созданный для <b>школьников, студентов</b> и всех, кто
          интересуется возможностью работы в <b>Ярославле и Ярославской области</b>.
        </p>
        <p className={styles.text}>
          Мы предоставляем возможность поиска информации о
          <b>профессиях, обучении, стажировках, практике и работе на местных предприятиях.</b> Мы
          стремимся помочь каждому пользователю <span>найти свое место в жизни.</span>
        </p>
      </motion.div>
      <motion.div
        variants={rightToLeft100Animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        custom={1}
      >
        <Image
          className={styles.firstPhoto}
          src="/images/whoAreWe.png"
          alt="5 молодых людей"
          fill
        />
      </motion.div>
    </section>
    <section className={styles.bottomWrapper}>
      <motion.div
        variants={leftToRight100Animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        custom={1}
      >
        <Image
          className={styles.secondPhoto}
          src="/images/ourGoals.png"
          alt="Девочка с мальчикам стоят около цели, в которой находится стрела"
          fill
        />
      </motion.div>
      <motion.div
        className={styles.textWrapper}
        variants={leftToRight100Animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        custom={1}
      >
        <h3 className={styles.title}>Наша цель?</h3>
        <p className={styles.text}>
          Помочь <b>школьникам и студентам</b> расширить свои знания о рынке труда,
          <span>получить необходимые профориентационные навыки</span>, ознакомиться с перспективными
          работодателями в Ярославле и Ярославской области и<b>определиться с выбором профессии.</b>
        </p>
      </motion.div>
    </section>
  </>
);
