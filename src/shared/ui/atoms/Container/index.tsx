import cx from "classnames";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { ContainerProps } from "./types";

export const Container: FC<ContainerProps> = ({ children, size }) => (
  <div
    className={cx(styles.container, {
      [styles.sizeNormal]: size === "normal",
    })}
  >
    {children}
  </div>
);
