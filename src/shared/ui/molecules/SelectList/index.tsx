import cx from "classnames";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const SelectList: FC<{
  isVisible: boolean;
  items: { value: string; id: number; title: string }[];
  handleChange: (value: string) => void;
  handleClose: () => void;
  stretch?: boolean;
}> = ({ isVisible, items, handleChange, handleClose, stretch }) => (
  <div
    className={cx(styles.wrapper, {
      [styles.isVisibleBlock]: isVisible,
      [styles.stretch]: stretch,
    })}
  >
    <ul className={styles.list}>
      {items.map((item) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          className={styles.liteItem}
          key={item.id}
          onClick={() => {
            handleChange(item.value);
            handleClose();
          }}
        >
          {item.title[0].toUpperCase() + item.title.slice(1)}
        </li>
      ))}
    </ul>
  </div>
);
