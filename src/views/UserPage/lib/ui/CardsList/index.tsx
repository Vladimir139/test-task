import { useUnit } from "effector-react";
import React, { FC } from "react";

import { $user } from "@/entities/user/model";
import { IAdditionalText } from "@/shared/lib/types";
import { Card } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const CardsListProfile: FC = () => {
  const user = useUnit($user);

  const cards = user?.enterpriseUserData?.myVacancy.map((entity) => ({
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
        entity.type !== "enterprise" &&
        entity.type !== "educationalEstablishments"
          ? [entity.startSalary || 0, entity.endSalary || 0]
          : [],
      salaryPeriod:
        entity.type !== "profession" &&
        entity.type !== "enterprise" &&
        entity.type !== "educationalEstablishments"
          ? entity.salaryPeriod
          : "month",
      salaryCurrency:
        entity.type !== "profession" &&
        entity.type !== "enterprise" &&
        entity.type !== "educationalEstablishments"
          ? entity.salaryCurrency
          : "rub",
    },
  }));

  return (
    <>
      <p className={styles.titleBlock}>Наши вакансии</p>
      <div className={styles.cardsList}>
        {user?.role === "enterprise" &&
          cards?.map((card) => (
            <Card
              key={card.id}
              isEditCard
              title={card.title}
              icon={card.icon}
              id={card.id}
              additionalText={card.additionalText}
              onClick={() => {}}
              subTitle={card.subTitle}
              salary={card.salary}
              transliterationName={card.transliterationName}
              tags={card.tags}
              link={card.link}
              dateRecord={card.dateRecord}
            />
          ))}
      </div>
    </>
  );
};
