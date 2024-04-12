import React, { FC } from "react";

import styles from "./styles.module.scss";

export const OurPartners: FC = () => (
  <section className={styles.wrapper}>
    <h2 className={styles.title}>Наши партнеры</h2>
    <ul className={styles.companiesList}>
      <li style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}>
        Название комп
      </li>
      <li style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}>
        Название комп
      </li>
      <li style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}>
        Название комп
      </li>
      <li style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}>
        Название комп
      </li>
      <li style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}>
        Название комп
      </li>
      <li style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}>
        Название комп
      </li>
      <li style={{ width: "140px", height: "50px", background: "gray", borderRadius: "10px" }}>
        Название комп
      </li>
    </ul>
    <p className={styles.additionalText}>
      Мы сотрудничаем с ведущими компаниями разных отраслей, чтобы обеспечить{" "}
      <span>наилучшими возможностями</span> наших пользователей
    </p>
  </section>
);
