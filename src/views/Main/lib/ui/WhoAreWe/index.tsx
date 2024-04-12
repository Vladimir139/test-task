import Image from "next/image";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const WhoAreWe: FC = () => (
  <>
    <section className={styles.topWrapper}>
      <div className={styles.textWrapper}>
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
      </div>
      <Image className={styles.firstPhoto} src="/images/whoAreWe.png" alt="5 молодых людей" fill />
    </section>
    <section className={styles.bottomWrapper}>
      <Image
        className={styles.secondPhoto}
        src="/images/ourGoals.png"
        alt="Девочка с мальчикам стоят около цели, в которой находится стрела"
        fill
      />
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>Наша цель?</h3>
        <p className={styles.text}>
          Помочь <b>школьникам и студентам</b> расширить свои знания о рынке труда,
          <span>получить необходимые профориентационные навыки</span>, ознакомиться с перспективными
          работодателями в Ярославле и Ярославской области и<b>определиться с выбором профессии.</b>
        </p>
      </div>
    </section>
  </>
);
