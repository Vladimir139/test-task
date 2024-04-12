import cx from "classnames";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  name,
  firstIcon,
  type,
  value,
  defaultValue,
  onChange,
  placeholder,
  title,
  isRequired,
  stretch,
  secondIcon,
  size,
  borderBottomNone,
  ...props
}) => {
  if (title) {
    <div className={styles.wrapper}>
      {title && (
        <>
          {title} {isRequired && <span style={{ color: "red" }}>*</span>}
        </>
      )}
      <label
        className={cx(styles.label, {
          [styles.sizeMedium]: size === "medium",
          [styles.borderBottomNone]: borderBottomNone,
        })}
      >
        {firstIcon || null}
        <input
          {...props}
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          className={cx(styles.input, {
            stretch,
          })}
        />
      </label>
    </div>;
  }

  return (
    <label
      className={cx(styles.label, {
        [styles.sizeMedium]: size === "medium",
        [styles.borderBottomNone]: borderBottomNone,
      })}
    >
      {firstIcon && <span style={{ display: "flex" }}>{firstIcon}</span>}
      <input
        {...props}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        className={cx(styles.input, {
          stretch,
        })}
      />
      <span>{secondIcon && secondIcon}</span>
    </label>
  );
};
