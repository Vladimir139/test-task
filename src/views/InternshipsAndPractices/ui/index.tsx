import React, { FC } from "react";

import { internshipsAndPracticesList } from "@/shared/lib/constants/demo";
import { CardsList, Gap } from "@/shared/ui/atoms";
import { FilterSidebar } from "@/shared/ui/templates";

import styles from "./styles.module.scss";

export const InternshipsAndPracticesPage: FC = () => (
  <div className={styles.template}>
    <FilterSidebar />
    <div>
      <Gap />
      <h1>
        Рекомендованные практики (InternshipsAndPracticesPage) -{" "}
        {internshipsAndPracticesList.length}
      </h1>
      <Gap />
      <CardsList entities={internshipsAndPracticesList} />
      <Gap />
    </div>
  </div>
);
