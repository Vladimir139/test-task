import React, { FC } from "react";

import { cardsVacancy } from "@/shared/lib/constants/cards";
import { CardsList, Gap } from "@/shared/ui/atoms";
import { FilterSidebar } from "@/shared/ui/templates";

import styles from "./styles.module.scss";

export const VacancyPage: FC = () => (
  <div className={styles.template}>
    <FilterSidebar />
    <div>
      <Gap />
      <h1>Рекомендованные вакансии (VacancyPage) - {cardsVacancy.length}</h1>
      <Gap />
      <CardsList entities={cardsVacancy} />
      <Gap />
    </div>
  </div>
);
