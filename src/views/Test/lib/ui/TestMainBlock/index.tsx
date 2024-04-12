import React, { FC } from "react";

import { ArrowXIcon } from "@/shared/lib/icons/Arrows/ArrowX";
import { Button } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const TestMainBlock: FC = () => (
  <div className={styles.wrapper}>
    <section className={styles.questionInfo}>
      <p className={styles.countQuestion}>Вопрос 3 из 10</p>
      <p className={styles.questionText}>
        Любите ли вы находиться в динамичной обстановке при работе?
      </p>
      <div className={styles.wrapperBtns}>
        <div className={styles.answerLineBtns}>
          <Button theme="darkBlue" isStretch size="normal" radius="medium" textSize="medium">
            Да
          </Button>
          <Button theme="outlineDarkBlue" size="normal" isStretch radius="medium" textSize="medium">
            Нет
          </Button>
        </div>
        <div className={styles.nextBtn}>
          <Button radius="medium" size="normal" isStretch textSize="medium">
            Далее
          </Button>
        </div>
      </div>
    </section>
    <button className={styles.btnGoBack}>
      <ArrowXIcon /> Назад
    </button>
  </div>
);
