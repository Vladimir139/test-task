import React, { FC } from "react";

import { formatNumber } from "@/shared/lib/helpers/convertedNumbers";
import { SliderComponent } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";
import { SalaryRangeProps } from "./types";

export const SalaryRange: FC<SalaryRangeProps> = ({
  maxValue,
  minValue,
  step,
  salaryCurrency,
  startSalary,
  endSalary,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.topWrapper}>
      <b>Зарплатная вилка</b>
      <p>
        {salaryCurrency}
        {formatNumber(startSalary)} - {salaryCurrency}
        {formatNumber(endSalary)}
      </p>
    </div>
    <SliderComponent
      step={step}
      max={maxValue}
      defaultValue={[startSalary, endSalary]}
      min={minValue}
    />
  </div>
);
