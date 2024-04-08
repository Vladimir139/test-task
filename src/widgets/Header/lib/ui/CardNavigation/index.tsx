import Link from "next/link";
import React, { FC } from "react";

import {
  EducationalEstablishmentsIcon,
  EnterprisesIcon,
  InternshipsIcon,
  PracticesIcon,
  ProfessionIcon,
  VacancyIcon,
} from "@/shared/lib/icons";

import styles from "./styles.module.scss";
import { CardNavigationProps } from "./types";

export const CardNavigation: FC<CardNavigationProps> = ({
  icon,
  title,
  description,
  link,
  handleClose,
}) => {
  const returnedIcon = () => {
    if (icon === "ProfessionIcon") {
      return <ProfessionIcon />;
    }
    if (icon === "EducationalEstablishmentsIcon") {
      return <EducationalEstablishmentsIcon />;
    }
    if (icon === "VacancyIcon") {
      return <VacancyIcon />;
    }
    if (icon === "PracticesIcon") {
      return <PracticesIcon />;
    }
    if (icon === "InternshipsIcon") {
      return <InternshipsIcon />;
    }

    return <EnterprisesIcon />;
  };

  return (
    <Link href={link} style={{ display: "flex" }}>
      <div className={styles.card} onClick={handleClose}>
        <div className={styles.topInnerWrapper}>
          <h3 className={styles.title}>{title}</h3>
          {returnedIcon()}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
