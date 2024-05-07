import React, { FC } from "react";

import { DeleteIcon, DocsIcon } from "@/shared/lib/icons";

import styles from "./styles.module.scss";
import { CardFileProps } from "./types";

export const CardFile: FC<CardFileProps> = ({ isEditFile }) => (
  <div className={styles.cardFile}>
    <div className={styles.topWrapper}>
      <DocsIcon />
      {isEditFile && (
        <button className={styles.deleteBtn} type="button" aria-label="delete file">
          <DeleteIcon isRed />
        </button>
      )}
    </div>
    <div className={styles.infoWrapper}>
      <p className={styles.title}>Document1.zip</p>
      <p className={styles.additionalText}>Sat Feb 25 · 2,4 MB</p>
    </div>
  </div>
);
