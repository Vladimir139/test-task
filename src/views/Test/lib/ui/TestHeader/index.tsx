import Link from "next/link";
import React, { FC } from "react";

import { ArrowXIcon } from "@/shared/lib/icons/Arrows/ArrowX";

import { ProgressBar } from "../ProgressBar";
import styles from "./styles.module.scss";

export const TestHeader: FC = () => (
  <header className={styles.header}>
    <Link href="/" className={styles.linkGoHome}>
      <ArrowXIcon />
      Закрыть
    </Link>
    <div className={styles.progressWrapper}>
      <ProgressBar />
      <p>3% выполнено</p>
    </div>
  </header>
);
