import cx from "classnames";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { ShortBlockInfoProps } from "./types";

export const ShortBlockInfo: FC<ShortBlockInfoProps> = ({
  icon,
  title,
  subTitle,
  textSizeSubTitle,
  textSizeTitle,
  radiusLogo,
  isBig,
  isIconEnd,
}) => (
  <div className={styles.wrapper}>
    {/* <Image src={card.icon} alt={`${card.title} logo`} fill className={styles.logo} /> */}
    {!isIconEnd && (
      <Image
        src={icon}
        alt="logo"
        fill
        className={cx(styles.logo, {
          [styles.squareLogo]: radiusLogo === "square",
          [styles.bigImage]: isBig,
        })}
      />
    )}
    <div className={styles.info}>
      <h3
        className={cx(styles.title, {
          [styles.default]: textSizeTitle === "default",
          [styles.isBigMarginTitle]: isBig,
        })}
      >
        {title}
      </h3>
      {subTitle && (
        <p
          className={cx(styles.subTitle, {
            [styles.defaultSmall]: textSizeSubTitle === "defaultSmall",
          })}
        >
          {subTitle.map(({ text }) =>
            text === subTitle[subTitle.length - 1].text ? text : `${text} • `,
          )}
        </p>
      )}
    </div>
    {isIconEnd && (
      <Image
        src={icon}
        alt="logo"
        fill
        className={cx(styles.logo, {
          [styles.squareLogo]: radiusLogo === "square",
          [styles.bigImage]: isBig,
        })}
      />
    )}
  </div>
);
