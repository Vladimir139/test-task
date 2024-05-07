import React, { FC } from "react";

import { IStaff } from "@/shared/lib/types";

import styles from "./styles.module.scss";

export const StaffCard: FC<IStaff> = ({
  contactStaff,
  photo,
  name,
  middleName,
  surname,
  position,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.leftWrapper}>
      <div className={styles.photoStaff} />
      <div className={styles.staffInfo}>
        <h3 className={styles.title}>
          {surname} {name} {middleName}
        </h3>
        <p className={styles.additionalInfo}>{position}</p>
      </div>
    </div>
    <div className={styles.rightWrapper}>
      <p className={styles.contact}>
        {contactStaff.type} {contactStaff.contact}
      </p>
    </div>
  </div>
);
