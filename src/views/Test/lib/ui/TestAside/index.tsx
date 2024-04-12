import cx from "classnames";
import React, { FC } from "react";

import { ITheme } from "@/shared/lib/types";

import styles from "./styles.module.scss";

export const TestAside: FC<{ themes: ITheme[] }> = ({ themes }) => (
  <aside className={styles.aside}>
    <div className={styles.listTheme}>
      {themes.map((theme) => (
        <div
          className={cx(styles.theme, {
            [styles.isActive]: theme.isActive,
          })}
          key={theme.id}
        >
          <span />
          {theme.text}
        </div>
      ))}
    </div>
  </aside>
);
