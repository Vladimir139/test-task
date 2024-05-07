import React, { FC } from "react";

import { Button } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const ShortUserInfo: FC = () => (
  <div className={styles.section}>
    <div className={styles.leftWrapper}>
      <div className={styles.userPhoto} />
      <div className={styles.userInfo}>
        <h3 className={styles.title}>User Name</h3>
        <p className={styles.additionalText}>User city</p>
      </div>
    </div>
    <div className={styles.rightWrapper}>
      <Button radius="little" textSize="medium">
        Поделиться профилем
      </Button>
    </div>
  </div>
);
