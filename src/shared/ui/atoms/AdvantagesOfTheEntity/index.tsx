import cx from "classnames";
import React, { FC } from "react";

import { IconPlus } from "@/shared/lib/icons";

import styles from "./styles.module.scss";
import { AdvantagesOfTheEntityProps } from "./types";

export const AdvantagesOfTheEntity: FC<AdvantagesOfTheEntityProps> = ({ advantages }) => {
  if (advantages.length > 6) {
    return (
      <ul className={styles.advantagesList}>
        {advantages.slice(0, 5).map((advantage) => (
          <li className={styles.advantageItem} key={advantage.text}>
            <div>Icon</div>
            <p>{advantage.text}</p>
          </li>
        ))}
        <li className={cx(styles.advantageItem)}>
          <div className={cx(styles.isMoreBlock)}>
            <IconPlus />
          </div>
          <p>+{advantages.length - 5} болee</p>
        </li>
      </ul>
    );
  }

  return (
    <ul className={styles.advantagesList}>
      {advantages.map((advantage) => (
        <li className={styles.advantageItem} key={advantage.text}>
          <div>Icon</div>
          <p>{advantage.text}</p>
        </li>
      ))}
    </ul>
  );
};
