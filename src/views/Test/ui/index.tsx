import React, { FC } from "react";

import { TestAside, TestHeader, TestMainBlock } from "@/views/Test/lib/ui";

import styles from "./styles.module.scss";
import { TestPageProps } from "./types";

export const TestPage: FC<TestPageProps> = () => (
  <>
    <TestHeader />
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <TestAside
          themes={[
            { id: 1, text: "Общие интересы", isActive: true },
            { id: 1, text: "Общие интересы", isActive: false },
            { id: 1, text: "Общие интересы", isActive: false },
            { id: 1, text: "Общие интересы", isActive: false },
            { id: 1, text: "Общие интересы", isActive: false },
            { id: 1, text: "Общие интересы", isActive: false },
          ]}
        />
        <TestMainBlock />
      </div>
    </div>
  </>
);
