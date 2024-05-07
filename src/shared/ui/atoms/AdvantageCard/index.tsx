import React, { FC } from "react";

import styles from "./styles.module.scss";

export const AdvantageCard: FC<{ icon: string | SVGAElement; text: string }> = ({ icon, text }) => (
  <div className={styles.wrapperAdvantage}>
    <div className={styles.icon} />
    <p className={styles.textAdvantage}>{text}</p>
  </div>
);
