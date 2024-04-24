import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { FC, forwardRef } from "react";

import { getMonth } from "@/shared/lib/helpers";

import styles from "./styles.module.scss";
import { CardOfNewsAndArticlesProps } from "./types";

export const CardOfNewsAndArticles: FC<CardOfNewsAndArticlesProps> = forwardRef(
  ({ transliterationName, type, previewPhoto, createdAt, title, previewDesc }, ref) => (
    <Link
      ref={ref}
      className={styles.link}
      href={
        type === "article" ? `/articles/${transliterationName}` : `/news/${transliterationName}`
      }
    >
      <Image className={styles.photo} src={previewPhoto} alt="photo" fill />
      <p className={styles.date}>
        {createdAt?.getDate()} {createdAt && getMonth(createdAt)}, {createdAt?.getFullYear()}
      </p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.previewDesc}>{previewDesc}</p>
    </Link>
  ),
);

export const MCardOfNewsAndArticles = motion(CardOfNewsAndArticles);
