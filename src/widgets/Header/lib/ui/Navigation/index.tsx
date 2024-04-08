import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, FC, SetStateAction } from "react";

import { ArrowYIcon } from "@/shared/lib/icons";

import styles from "./styles.module.scss";

export const Navigation: FC<{
  isActiveCareerLink: boolean;
  setIsActiveCareerLink: Dispatch<SetStateAction<boolean>>;
}> = ({ isActiveCareerLink, setIsActiveCareerLink }) => {
  const router = useRouter();

  return (
    <nav>
      <ul className={styles.navLinks}>
        <li>
          <Link
            href="/"
            className={cx(styles.navLink, {
              [styles.isActiveNavLink]: router.pathname === "/",
            })}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={cx(styles.navLink, {
              [styles.isActiveNavLink]: router.pathname === "/about-us",
            })}
          >
            О нас
          </Link>
        </li>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <li
          className={cx(styles.navLink, {
            [styles.isActiveNavLink]: router.pathname === "/career",
          })}
          onClick={() => setIsActiveCareerLink((prev) => !prev)}
        >
          Карьера <ArrowYIcon rotate={isActiveCareerLink ? -180 : 0} />
        </li>
        <li>
          <Link
            href="/news"
            className={cx(styles.navLink, {
              [styles.isActiveNavLink]: router.pathname === "/news",
            })}
          >
            Новости
          </Link>
        </li>
        <li>
          <Link
            href="/articles"
            className={cx(styles.navLink, {
              [styles.isActiveNavLink]: router.pathname === "/articles",
            })}
          >
            Статьи
          </Link>
        </li>
      </ul>
    </nav>
  );
};
