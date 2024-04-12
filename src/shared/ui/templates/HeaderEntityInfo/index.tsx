import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { ShareIcon } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";
import { HeaderEntityInfoProps } from "./types";

export const HeaderEntityInfo: FC<HeaderEntityInfoProps> = ({
  logo,
  additionalInformation,
  title,
  blocksInfo,
}) => (
  <section className={styles.headerEntity}>
    <div className={styles.topLine}>
      <div className={styles.leftWrapper}>
        {/* <Image src={logo} alt={`${title} logo`} fill className={styles.logo} /> */}
        <Image src={logo} alt="logo" fill className={styles.logo} />
        <div className={styles.mainBlockInfo}>
          <h2 className={styles.titleNameEntity}>{title}</h2>
          <p className={styles.shortDesc}>{additionalInformation}</p>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.userActions}>
          <Button size="medium" theme="blue">
            Подать заявку
          </Button>
          <Button theme="outline" size="medium">
            <ShareIcon />
          </Button>
        </div>
      </div>
    </div>
    <ul className={styles.listBlocksInfo}>
      <li className={styles.blockInfo}>
        <p className={styles.blockInfoTitle}>Сайт:</p>
        <Link
          href={blocksInfo.urlSite}
          className={styles.blockInfoValue}
          style={{ color: "#0065FF", textDecoration: "underline" }}
        >
          {blocksInfo.urlSiteTitle}
        </Link>
      </li>
      <li className={styles.blockInfo}>
        <p className={styles.blockInfoTitle}>Расположение:</p>
        <p className={styles.blockInfoValue}>{blocksInfo.city}</p>
      </li>
      <li className={styles.blockInfo}>
        <p className={styles.blockInfoTitle}>Размер компании:</p>
        <p className={styles.blockInfoValue}>{blocksInfo.sizeEntity}</p>
      </li>
      <li className={styles.blockInfo}>
        <p className={styles.blockInfoTitle}>Специализация:</p>
        <p className={styles.blockInfoValue}>{blocksInfo.specialization}</p>
      </li>
    </ul>
  </section>
);
