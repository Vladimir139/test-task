import cx from "classnames";
import React, { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

export const Line: FC<{ children: ReactNode; alignBottom?: boolean }> = ({
  children,
  alignBottom,
}) => (
  <div
    className={cx(styles.line, {
      [styles.alignBottom]: alignBottom,
    })}
  >
    {children}
  </div>
);
