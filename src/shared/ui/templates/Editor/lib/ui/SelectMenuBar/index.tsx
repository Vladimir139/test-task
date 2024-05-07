import cx from "classnames";
import React, { FC, ReactNode, useRef } from "react";

import { useOnClickOutside } from "@/shared/lib/hooks";
import { ArrowYIcon } from "@/shared/lib/icons";

import styles from "./styles.module.scss";

export const SelectMenuBar: FC<{
  children: ReactNode;
  title: string;
  isOpenMenu: boolean;
  handleClose: () => void;
  handleChange: () => void;
}> = ({ children, title, isOpenMenu, handleClose, handleChange }) => {
  const refMenu = useRef(null);

  useOnClickOutside(refMenu, handleClose);

  return (
    <div className={styles.selectWrapper} ref={refMenu}>
      <button type="button" className={styles.selectBtn} onClick={handleChange}>
        {title} <ArrowYIcon rotate={isOpenMenu ? 180 : 0} />
      </button>
      <div
        className={cx(styles.innerSelectWrapper, {
          [styles.isOpenSelectMenu]: isOpenMenu,
        })}
      >
        {children}
      </div>
    </div>
  );
};
