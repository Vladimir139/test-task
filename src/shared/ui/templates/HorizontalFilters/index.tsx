import React, { FC } from "react";

import { ArrowYIcon, MagnifierIcon } from "@/shared/lib/icons";
import { Container, Input, Select } from "@/shared/ui/atoms";
import { SalaryRange } from "@/shared/ui/molecules";

import styles from "./styles.module.scss";

export const HorizontalFilters: FC = () => (
  <div className={styles.horizontalFilter}>
    <Container>
      <div className={styles.innerWrapper}>
        <div className={styles.leftWrapper}>
          <Input placeholder="Поиск" firstIcon={<MagnifierIcon />} secondIcon={<ArrowYIcon />} />
          <span className={styles.verticalLine} />
          <Select placeholder="Местоположение" value="" icon={<ArrowYIcon />} isOpen={false} />
        </div>
        <div className={styles.rightWrapper}>
          <SalaryRange
            salaryCurrency="₽"
            step={1}
            minValue={0}
            maxValue={1000000}
            startSalary={100000}
            endSalary={300000}
          />
        </div>
      </div>
    </Container>
  </div>
);
