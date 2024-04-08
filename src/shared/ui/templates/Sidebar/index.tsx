import cx from "classnames";
import React, { FC, useEffect } from "react";

import styles from "./styles.module.scss";
import { SidebarProps } from "./types";

export const Sidebar: FC<SidebarProps> = ({ isOpened, handleClose, children }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("overflow-hidden");

      return;
    }

    document.body.classList.remove("overflow-hidden");
  }, [isOpened]);

  return (
    <div
      className={cx(styles.sidebarOverlay, {
        [styles.isOpened]: isOpened,
      })}
      onClick={handleClose}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <aside
        className={cx(styles.sidebar, {
          [styles.isActive]: isOpened,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.sidebarInnerWrapper}>{children}</div>
      </aside>
    </div>
  );
};
