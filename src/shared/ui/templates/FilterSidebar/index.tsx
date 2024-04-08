import React, { FC, useState } from "react";

import { filtersVacancy } from "@/shared/lib/constants/filters";
import { FilterList, Gap } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const FilterSidebar: FC = () => {
  const [filters] = useState(filtersVacancy);

  return (
    <div>
      <Gap />
      <div className={styles.wrapperBlocksFilters}>
        {filters.map((filterBlock) => (
          <FilterList
            key={filterBlock.title}
            isOpen={filterBlock.isOpen}
            filters={filterBlock.filters}
            type={filterBlock.type}
            title={filterBlock.title}
          />
        ))}
      </div>
      <Gap />
    </div>
  );
};
