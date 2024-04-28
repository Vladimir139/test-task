import React, { FC } from "react";

import { vacancyList } from "@/shared/lib/constants/demo";
import { CardsList, Gap } from "@/shared/ui/atoms";
import { FilterSidebar } from "@/shared/ui/templates";

import styles from "./styles.module.scss";

export const VacancyPage: FC = () => (
  <div className={styles.template}>
    <FilterSidebar />
    <div>
      <Gap />
      <h1>Рекомендованные вакансии (VacancyPage) - {vacancyList.length}</h1>
      <Gap />
      <CardsList entities={vacancyList} />
      <Gap />
    </div>
  </div>
);
