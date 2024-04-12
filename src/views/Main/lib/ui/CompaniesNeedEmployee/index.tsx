import React, { FC } from "react";

import styles from "./styles.module.scss";

export const CompaniesNeedEmployee: FC = () => (
  <section className={styles.wrapper}>
    <h2 className={styles.title}>
      Более <span>100+</span> компаний нуждаются в лучшем работнике
    </h2>
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
  </section>
);
