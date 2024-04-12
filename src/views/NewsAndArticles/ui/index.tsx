import React, { FC } from "react";

import { MagnifierIcon } from "@/shared/lib/icons";
import { CardOfNewsAndArticles, Gap, Input } from "@/shared/ui/atoms";

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
    <div className={styles.listNews}>
      <CardOfNewsAndArticles
        title="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet."
        transliterationName="lorem_ipsum"
        type={type === "articles" ? "article" : "news"}
        previewDesc="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. "
        createdAt={new Date()}
        previewPhoto="/"
      />
      <CardOfNewsAndArticles
        title="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet."
        transliterationName="lorem_ipsum"
        type={type === "articles" ? "article" : "news"}
        previewDesc="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. "
        createdAt={new Date()}
        previewPhoto="/"
      />
      <CardOfNewsAndArticles
        title="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet."
        transliterationName="lorem_ipsum"
        type={type === "articles" ? "article" : "news"}
        previewDesc="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. "
        createdAt={new Date()}
        previewPhoto="/"
      />
      <CardOfNewsAndArticles
        title="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet."
        transliterationName="lorem_ipsum"
        type={type === "articles" ? "article" : "news"}
        previewDesc="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. "
        createdAt={new Date()}
        previewPhoto="/"
      />
      <CardOfNewsAndArticles
        title="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet."
        transliterationName="lorem_ipsum"
        type={type === "articles" ? "article" : "news"}
        previewDesc="Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit amet. "
        createdAt={new Date()}
        previewPhoto="/"
      />
    </div>
    <Gap />
    <Gap />
  </>
);
