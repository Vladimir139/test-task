import React, { FC } from "react";

import styles from "./styles.module.scss";
import { SelectProps } from "./types";

export const Select: FC<SelectProps> = ({ icon, placeholder, value, isOpen }) => (
  <div className={styles.select}>
    {value ? (
      <div className={styles.value}>{value}</div>
    ) : (
      <div className={styles.placeholder}>{placeholder}</div>
    )}
    <span style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}>{icon && icon}</span>
  </div>
);
