import React, { FC } from "react";

import { enterprisesList } from "@/shared/lib/constants/demo";
import { CardsList, Gap } from "@/shared/ui/atoms";
import { FilterSidebar } from "@/shared/ui/templates";

import styles from "./styles.module.scss";

export const EnterprisesPage: FC = () => (
  <div className={styles.template}>
    <FilterSidebar />
    <div>
      <Gap />
      <h1>Рекомендованные предприятия (EnterprisesPage) - {enterprisesList.length}</h1>
      <Gap />
      <CardsList entities={enterprisesList} />
      <Gap />
    </div>
  </div>
);
