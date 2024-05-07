import Link from "next/link";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const ResponseCard: FC = () => (
  <div className={styles.responseCard}>
    <div className={styles.topWrapper}>
      <div className={styles.userTopWrapperInfo}>
        <Link href="/" className={styles.userInfo}>
          <div className={styles.userPhoto} />
          Зеновский Владимир Николаевич
        </Link>
        <p className={styles.userCity}>(Ярославль)</p>
      </div>
      <ul className={styles.socialNetworksList}>
        <li>
          <Link href="/" className={styles.socialNetwork}>
            Tg
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.socialNetwork}>
            Vk
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.middleWrapper}>Description</div>
    <div className={styles.bottomWrapper}>Tags</div>
  </div>
);
