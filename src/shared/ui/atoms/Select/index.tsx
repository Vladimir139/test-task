import cx from "classnames";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { SelectProps } from "./types";

export const Select: FC<SelectProps> = ({
  icon,
  placeholder,
  value,
  isOpen,
  noBorderBottom,
  onClick,
}) => (
  <div
    className={cx(styles.select, {
      [styles.noBorderBottom]: noBorderBottom,
    })}
    onClick={onClick}
  >
    {value ? (
      <div className={styles.value}>{value}</div>
    ) : (
      <div className={styles.placeholder}>{placeholder}</div>
    )}
    <span className={styles.icon} style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}>
      {icon && icon}
    </span>
  </div>
);
