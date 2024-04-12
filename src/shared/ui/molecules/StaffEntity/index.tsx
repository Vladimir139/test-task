import React, { FC } from "react";

import { Button, ShortBlockInfo } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";
import { StaffEntityProps } from "./types";

export const StaffEntity: FC<StaffEntityProps> = ({ staff }) => (
  <div className={styles.wrapper}>
    <ul className={styles.listStaff}>
      {staff.slice(0, 4).map((item) => (
        <ShortBlockInfo
          isBig
          textSizeTitle="defaultSmall"
          textSizeSubTitle="defaultSmall"
          icon={item.photo}
          title={`${item.name} ${item.surname}`}
          subTitle={[{ text: item.position }]}
        />
      ))}
    </ul>
    <Button theme="outlineBlue" isStretch radius="small" size="average">
      Показать всех
    </Button>
  </div>
);
