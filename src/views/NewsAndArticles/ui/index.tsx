import { motion } from "framer-motion";
import React, { FC } from "react";

import { bottomToTop100Animation } from "@/shared/lib/constants";
import { MagnifierIcon } from "@/shared/lib/icons";
import { Gap, Input, MCardOfNewsAndArticles } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const NewsAndArticlesPage: FC<{ titlePage: string; type: "articles" | "news" }> = ({
  titlePage,
  type,
}) => (
  <>
    <h2 className={styles.titlePage}>{titlePage}</h2>
    <div className={styles.filters}>
      <div className={styles.searchBlock}>
        <Input
          placeholder={`Введите название ${type === "news" ? "новости" : "статьи"}`}
          firstIcon={<MagnifierIcon />}
        />
      </div>
      <div className={styles.sortBlock}>
        Сортировка по: <span>последним изменениям</span>
      </div>
    </div>
    <motion.div
      className={styles.listNews}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MCardOfNewsAndArticles
        variants={bottomToTop100Animation}
        custom={1}
        title="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet."
        transliterationName="lorem_ipsum"
        type={type === "articles" ? "article" : "news"}
        previewDesc="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. "
        createdAt={new Date()}
        previewPhoto="/"
      />
    </motion.div>
    <Gap />
    <Gap />
  </>
);
