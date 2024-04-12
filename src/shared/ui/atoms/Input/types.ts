import { ChangeEvent, ReactNode } from "react";

export interface InputProps {
  placeholder?: string;
  name?: string;
  firstIcon?: ReactNode;
  secondIcon?: ReactNode;
  type?:
    | "text"
    | "tel"
    | "password"
    | "checkbox"
    | "email"
    | "number"
    | "radio"
    | "search"
    | "date";
  defaultValue?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  isRequired?: boolean;
  stretch?: boolean;
  size?: "medium";
  borderBottomNone?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}
