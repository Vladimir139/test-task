import React, { FC, useEffect, useState } from "react";

import {
  IAdditionalText,
  IEducationalEstablishments,
  IEnterprises,
  IInternshipsAndPractices,
  IProfession,
  IVacancy,
} from "@/shared/lib/types";
import { Card, PreviewInWindow } from "@/shared/ui/atoms";

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
    link: `/${entity.type}/${entity.id}`,
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
        | IEnterprises
        | IInternshipsAndPractices,
    ) => entity.id === idCardPreview,
  );

  // Переписать надо под все карточки, а не только под вакансии

  return (
    <>
      <div className={styles.list}>
        {cards.map((card) => (
          <Card
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
      </div>
      <PreviewInWindow
        entity={selectedEntity}
        isOpen={!!idCardPreview}
        handleClose={() => setIdCardPreview(null)}
      />
    </>
  );
};
