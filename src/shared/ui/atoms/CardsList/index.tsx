import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

import { bottomToTop100Animation } from "@/shared/lib/constants";
import {
  IAdditionalText,
  IEducationalEstablishments,
  IEnterprise,
  IInternshipsAndPractices,
  IProfession,
  IVacancy,
} from "@/shared/lib/types";
import { MCard, PreviewInWindow } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";
import { CardsListProps } from "./types";

export const CardsList: FC<CardsListProps> = ({ entities }) => {
  const [idCardPreview, setIdCardPreview] = useState<number | null>(null);

  const cards = entities.map((entity) => ({
    id: entity.id,
    transliterationName: entity.transliterationName,
    icon: entity.icon,
    title: entity.name,
    subTitle: [
      { text: /* entity.enterprise.name || */ "name enterprise" },
      { text: entity.type !== "profession" ? entity.city : "" },
    ],
    tags: entity.tags,
    link: `/${entity.type}/${entity.transliterationName}`,
    additionalText: [] as IAdditionalText[],
    dateRecord: entity.type !== "profession" ? entity?.createdAt : new Date(),
    salary: {
      value:
        entity.type !== "profession" &&
        entity.type !== "enterprises" &&
        entity.type !== "educationalEstablishments"
          ? [entity.startSalary || 0, entity.endSalary || 0]
          : [],
      salaryPeriod:
        entity.type !== "profession" &&
        entity.type !== "enterprises" &&
        entity.type !== "educationalEstablishments"
          ? entity.salaryPeriod
          : "month",
      salaryCurrency:
        entity.type !== "profession" &&
        entity.type !== "enterprises" &&
        entity.type !== "educationalEstablishments"
          ? entity.salaryCurrency
          : "rub",
    },
  }));

  useEffect(() => {
    if (idCardPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [idCardPreview]);

  // @ts-ignore
  const selectedEntity = entities.find(
    (
      entity:
        | IVacancy
        | IProfession
        | IEducationalEstablishments
        | IEnterprise
        | IInternshipsAndPractices,
    ) => entity.id === idCardPreview,
  );

  return (
    <>
      <motion.div
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <MCard
            custom={(index + 1) / 3}
            variants={bottomToTop100Animation}
            key={card.id}
            onClick={() => setIdCardPreview(card.id)}
            transliterationName={card.transliterationName}
            additionalText={card.additionalText}
            link={card.link}
            id={card.id}
            subTitle={card.subTitle}
            title={card.title}
            icon={card.icon}
            tags={card.tags}
            dateRecord={card.dateRecord}
            salary={card.salary}
          />
        ))}
      </motion.div>
      <PreviewInWindow
        entity={selectedEntity}
        isOpen={!!idCardPreview}
        handleClose={() => setIdCardPreview(null)}
      />
    </>
  );
};
