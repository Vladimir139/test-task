import cx from "classnames";
import React, { FC } from "react";

import { ITag } from "@/shared/lib/types/info";

import styles from "./styles.module.scss";

export const TagsList: FC<{ tags: ITag[] }> = ({ tags }) => (
  <ul className={styles.listTags}>
    {tags.map((tag) => (
      <li className={cx(styles.tag)} key={tag.name}>
        {tag.name}
      </li>
    ))}
  </ul>
);
