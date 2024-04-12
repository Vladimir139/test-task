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
      [styles.themeDarkBlue]: theme === "darkBlue",
      [styles.themeOutlineDarkBlue]: theme === "outlineDarkBlue",
      [styles.themeOutlineBlue]: theme === "outlineBlue",
      [styles.themeOutline]: theme === "outline",
      [styles.radiusNormal]: radius === "normal",
      [styles.radiusLittle]: radius === "little",
      [styles.radiusSmall]: radius === "small",
      [styles.radiusMedium]: radius === "medium",
      [styles.sizeNormal]: size === "normal",
      [styles.sizeMedium]: size === "medium",
      [styles.sizeAverage]: size === "average",
      [styles.textSizeDefault]: textSize === "default",
      [styles.textSizeMedium]: textSize === "medium",
      [styles.disabledTrue]: disabled,
      [styles.stretch]: isStretch,
    })}
  >
    {children}
  </button>
);
