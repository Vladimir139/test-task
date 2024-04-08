import cx from "classnames";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  children,
  theme = "blue",
  radius = "normal",
  size = "normal",
  onClick,
  disabled,
  textSize = "default",
  isStretch,
  type = "button",
}) => (
  <button
    type={type}
    aria-label=""
    onClick={onClick}
    className={cx(styles.button, {
      [styles.themeBlue]: theme === "blue",
      [styles.themeDark]: theme === "dark",
      [styles.themeOutline]: theme === "outline",
      [styles.radiusNormal]: radius === "normal",
      [styles.radiusMedium]: radius === "medium",
      [styles.sizeMedium]: size === "medium",
      [styles.textSizeDefault]: textSize === "default",
      [styles.disabledTrue]: disabled,
      [styles.stretch]: isStretch,
    })}
  >
    {children}
  </button>
);
