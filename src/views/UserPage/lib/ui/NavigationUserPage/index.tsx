import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const NavigationUserPage: FC = () => {
  const router = useRouter();

  return (
    <section className={styles.navigation}>
      <Link
        href="/im"
        className={cx(styles.navLink, {
          [styles.activeNavLink]: router.pathname === "/im",
        })}
      >
        Профиль
      </Link>
      <span className={styles.verticalLine} />
      <Link
        href="/im/applications"
        className={cx(styles.navLink, {
          [styles.activeNavLink]: router.pathname === "/im/applications",
        })}
      >
        Заявки
      </Link>
    </section>
  );
};
