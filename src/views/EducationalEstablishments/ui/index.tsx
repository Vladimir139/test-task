import React, { FC } from "react";

import { educationalEstablishmentsList } from "@/shared/lib/constants/demo";
import { CardsList, Gap } from "@/shared/ui/atoms";
import { FilterSidebar } from "@/shared/ui/templates";

import styles from "./styles.module.scss";

export const EducationalEstablishmentsPage: FC = () => (
  <div className={styles.template}>
    <FilterSidebar />
    <div>
      <Gap />
      <h1>
        Рекомендованные учебные заведения (EducationalEstablishmentsPage) -{" "}
        {educationalEstablishmentsList.length}
      </h1>
      <Gap />
      <CardsList entities={educationalEstablishmentsList} />
      <Gap />
    </div>
  </div>
);
