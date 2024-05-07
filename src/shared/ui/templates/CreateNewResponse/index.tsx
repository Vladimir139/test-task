import React, { FC, useState } from "react";

import { EditorComponent } from "@/shared/ui/templates";

import styles from "./styles.module.scss";

export const CreateNewResponse: FC = () => {
  const [content, setContent] = useState("");

  return (
    <form className={styles.form}>
      <h2 className={styles.titleBlock}>Создание новой заявки</h2>
      <EditorComponent placeholder="Введите текст..." content={content} setContent={setContent} />
    </form>
  );
};
