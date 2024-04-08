import Link from "next/link";
import React, { FC } from "react";

import { convertedSalaryPeriod, formatNumber } from "@/shared/lib/helpers";
import { AdditionalInformation, ShortBlockInfo, TagsList } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";
import { CardOtherOfferProps } from "./types";

export const CardOtherOffer: FC<CardOtherOfferProps> = ({
  tags,
  icon,
  title,
  subTitle,
  additionalText,
  dateRecord,
  salary,
}) => (
  <Link href="/" className={styles.cardLink}>
    <div className={styles.leftWrapper}>
      <ShortBlockInfo
        icon={icon}
        title={title}
        subTitle={subTitle}
        isBig
        radiusLogo="square"
        textSizeTitle="default"
      />
      <TagsList tags={tags} />
      <AdditionalInformation additionalText={additionalText} dateRecord={dateRecord} />
    </div>
    <div className={styles.rightWrapper}>
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
    </div>
  </Link>
);
