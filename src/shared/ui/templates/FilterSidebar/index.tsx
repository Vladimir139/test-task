import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { leftToRight100Animation } from "@/shared/lib/constants";
import { filtersVacancy } from "@/shared/lib/constants/filters";
import { Gap, MFilterList } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const FilterSidebar: FC = () => {
  const [filters] = useState(filtersVacancy);

  return (
    <div>
      <Gap />
      <motion.div
        className={styles.wrapperBlocksFilters}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filters.map((filterBlock, index) => (
          <MFilterList
            custom={(index + 1) / 3}
            variants={leftToRight100Animation}
            key={filterBlock.title}
            isOpen={filterBlock.isOpen}
            filters={filterBlock.filters}
            type={filterBlock.type}
            title={filterBlock.title}
          />
        ))}
      </motion.div>
      <Gap />
    </div>
  );
};
