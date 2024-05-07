import cx from "classnames";
import React, { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

export const WhiteWrapper: FC<{ children: ReactNode; smallBottomMargin?: boolean }> = ({
  children,
  smallBottomMargin,
}) => (
  <section
    className={cx(styles.wrapper, {
      [styles.smallBottomMargin]: smallBottomMargin,
    })}
  >
    {children}
  </section>
);
