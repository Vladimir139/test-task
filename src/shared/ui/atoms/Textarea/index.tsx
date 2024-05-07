import React, { FC } from "react";

import styles from "./styles.module.scss";
import { TextareaProps } from "./types";

export const Textarea: FC<TextareaProps> = ({
  cols = 30,
  rows = 10,
  placeholder,
  value,
  onChange,
  name,
  title,
  isRequired,
  ...props
}) => (
  <div className={styles.wrapper}>
    {title && (
      <p>
        {title} {isRequired && <span style={{ color: "red" }}>*</span>}
      </p>
    )}
    <label className={styles.label}>
      <textarea
        className={styles.textarea}
        {...props}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  </div>
);
