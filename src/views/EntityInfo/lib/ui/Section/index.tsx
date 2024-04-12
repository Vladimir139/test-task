import Link from "next/link";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { SectionProps } from "./types";

export const Section: FC<SectionProps> = ({ title, children, linkAll }) => (
  <section className={styles.section}>
    <div className={styles.sectionTopLine}>
      <h3 className={styles.sectionTitle}>{title}:</h3>
      {linkAll && (
        <Link href={linkAll || ""} className={styles.sectionLinkMore}>
          Посмотреть всё
        </Link>
      )}
    </div>
    <div>{children}</div>
  </section>
);
