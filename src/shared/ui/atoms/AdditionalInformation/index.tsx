import cx from "classnames";
import React, { FC } from "react";

import { getMonth } from "@/shared/lib/helpers";
import { IAdditionalText } from "@/shared/lib/types/info";

import styles from "./styles.module.scss";

export const AdditionalInformation: FC<{
  additionalText: IAdditionalText[];
  dateRecord?: Date;
  textSize?: "medium";
}> = ({ dateRecord, additionalText, textSize }) => (
  <p
    className={cx(styles.additionalInformation, {
      [styles.textSizeMedium]: textSize === "medium",
    })}
  >
    {dateRecord ? (
      <span>
        {dateRecord?.getDate()} {dateRecord && getMonth(dateRecord)}, {dateRecord?.getFullYear()}
      </span>
    ) : null}
    {additionalText.length && dateRecord ? " • " : null}
    {additionalText.map(({ text }) =>
      text === additionalText[additionalText.length - 1].text ? text : `${text} • `,
    )}
  </p>
);
