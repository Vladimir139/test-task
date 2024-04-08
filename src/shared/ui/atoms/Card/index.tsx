import cx from "classnames";
import Link from "next/link";
import React, { FC } from "react";

import { convertedSalaryPeriod, formatNumber } from "@/shared/lib/helpers";
import { AdditionalInformation, ShortBlockInfo, TagsList } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
  icon,
  title,
  subTitle,
  salary,
  tags,
  link,
  dateRecord,
  additionalText,
  onClick,
}) => (
  <div className={styles.card} onClick={onClick}>
    <div className={styles.marginBottom15}>
      <ShortBlockInfo icon={icon} title={title} subTitle={subTitle} />
    </div>
    <div className={styles.marginBottom15}>
      <TagsList tags={tags} />
    </div>
    <div className={styles.additionalInformationWrap}>
      <AdditionalInformation additionalText={additionalText} dateRecord={dateRecord} />
    </div>
    <div
      className={cx(styles.bottomWrapper, {
        [styles.withSalary]: salary,
      })}
    >
      {salary && (
        <p className={styles.salary}>
          <span>
            {salary?.salaryCurrency === "rub" ? "₽" : "$"}
            {formatNumber(salary?.value[0])}
            {salary?.value[1] ? ` - ${formatNumber(salary?.value[1])}` : null}
          </span>
          /{salary?.salaryPeriod && convertedSalaryPeriod(salary?.salaryPeriod)}
        </p>
      )}
      <Link href={link} className={styles.link} onClick={(e) => e.stopPropagation()}>
        Перейти
      </Link>
    </div>
  </div>
);
