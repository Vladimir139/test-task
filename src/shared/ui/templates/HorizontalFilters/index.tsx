import React, { FC, useState } from "react";

import { ArrowYIcon, MagnifierIcon } from "@/shared/lib/icons";
import { Container, Input, Select } from "@/shared/ui/atoms";
import { FoundEntitiesList, SalaryRange } from "@/shared/ui/molecules";

import styles from "./styles.module.scss";

export const HorizontalFilters: FC = () => {
  const [isOpenLocation, setIsOpenLocation] = useState(false);

  return (
    <div className={styles.horizontalFilter}>
      <Container>
        <div className={styles.innerWrapper}>
          <div className={styles.leftWrapper}>
            <Input placeholder="Поиск" firstIcon={<MagnifierIcon />} />
            <span className={styles.verticalLine} />
            <div className={styles.wrapperSelect}>
              <Select
                onClick={() => setIsOpenLocation((prev) => !prev)}
                placeholder="Местоположение"
                value=""
                icon={<ArrowYIcon />}
                isOpen={false}
                noBorderBottom={isOpenLocation}
              />
              <FoundEntitiesList isVisible={isOpenLocation} />
            </div>
          </div>
          <div className={styles.rightWrapper}>
            <SalaryRange
              salaryCurrency="₽"
              step={1}
              minValue={0}
              maxValue={1000000}
              startSalary={0}
              endSalary={300000}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
