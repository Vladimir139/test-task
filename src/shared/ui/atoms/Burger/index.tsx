import cx from "classnames";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { BurgerProps } from "./types";

export const Burger: FC<BurgerProps> = ({ onClick, isActive, isDark = false }) => (
  <button
    aria-label="Открыть меню"
    type="button"
    onClick={onClick}
    className={cx(styles.burger, {
      [styles.isActive]: isActive,
      [styles.isDark]: isDark,
    })}
  >
    <span
      className={cx(styles.middleLine, {
        [styles.hidden]: isActive,
        [styles.isDark]: isDark,
      })}
    />
  </button>
);
