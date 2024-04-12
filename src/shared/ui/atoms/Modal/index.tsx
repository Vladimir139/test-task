import cx from "classnames";
import React, { FC, useEffect } from "react";

import { CloseIcon } from "@/shared/lib/icons";

import styles from "./styles.module.scss";
import { ModalProps } from "./types";

export const Modal: FC<ModalProps> = ({ isOpened, handleClose, children, size }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("overflow-hidden");

      return;
    }

    document.body.classList.remove("overflow-hidden");
  }, [isOpened]);

  return (
    <div
      className={cx(styles.overlay, {
        [styles.isOpened]: isOpened,
      })}
      onClick={handleClose}
    >
      <div
        className={cx(styles.modal, {
          [styles.isActive]: isOpened,
          [styles.sizeBig]: size === "big",
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.closeBtn} onClick={handleClose}>
          <CloseIcon theme="light" />
        </span>
        {children}
      </div>
    </div>
  );
};
