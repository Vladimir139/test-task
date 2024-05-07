import { ReactNode } from "react";

export interface SelectProps {
  placeholder: string;
  icon?: ReactNode;
  value: string;
  isOpen: boolean;
  noBorderBottom?: boolean;
  stretch?: boolean;
  onClick?: () => void;
}
