import cx from "classnames";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const FoundEntitiesList: FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <div
    className={cx(styles.wrapper, {
      [styles.isVisibleBlock]: isVisible,
    })}
  >
    {/* <input type="text" className={styles.input} placeholder="Введите город или область" /> */}
    <ul className={styles.foundedEntityList}>
      <li className={styles.foundEntity}>Фрунзенский район</li>
      <li className={styles.foundEntity}>Кировский район</li>
      <li className={styles.foundEntity}>Ленинский район</li>
    </ul>
  </div>
);
