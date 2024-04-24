import cx from "classnames";
import { motion } from "framer-motion";
import React, { FC, forwardRef, useState } from "react";

import { ArrowYIcon, DoneIcon } from "@/shared/lib/icons";
import { FiltersProps } from "@/shared/lib/types/filters";

import styles from "./styles.module.scss";

export const FilterList: FC<FiltersProps> = forwardRef(({ filters, title, type, isOpen }, ref) => {
  const [isActive, setIsActive] = useState(isOpen);

  return (
    <div className={styles.filterBLock} ref={ref}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={() => setIsActive((prev) => !prev)} className={styles.blockHeaderLine}>
        <p className={styles.title}>{title}</p>
        <span
          className={cx(styles.arrow, {
            [styles.isActiveArrow]: isActive,
          })}
        >
          <ArrowYIcon />
        </span>
      </div>
      <div
        className={cx(styles.filterList, {
          [styles.showFilterList]: isActive,
        })}
      >
        {filters.map((filter) => (
          <label key={filter.id} className={styles.label}>
            <input
              className={cx(styles.input)}
              type={type}
              name={filter.name}
              checked={filter.isChecked}
              value={filter.value}
            />
            <span
              className={cx(styles.checkmark, {
                [styles.radio]: type === "radio",
              })}
            >
              {type === "checkbox" && <DoneIcon />}
            </span>
            {filter.name}
          </label>
        ))}
      </div>
    </div>
  );
});

export const MFilterList = motion(FilterList);
