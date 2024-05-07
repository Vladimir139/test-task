import cx from "classnames";
import React, { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

export const Columns: FC<{
  leftWrapper: ReactNode;
  rightWrapper: ReactNode;
}> = ({ leftWrapper, rightWrapper }) => (
  <div className={cx(styles.wrapper)}>
    <div className={styles.leftWrapper}>{leftWrapper}</div>
    <div className={styles.rightWrapper}>{rightWrapper}</div>
  </div>
);
