import { ReactNode } from "react";

export interface SelectProps {
  placeholder: string;
  icon?: ReactNode;
  value: string;
  isOpen: boolean;
}
