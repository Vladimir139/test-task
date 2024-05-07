import { ChangeEvent, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

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
  value?: string | Date | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  isRequired?: boolean;
  stretch?: boolean;
  size?: "medium";
  borderBottomNone?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  handleRegister?: () => UseFormRegisterReturn;
}
