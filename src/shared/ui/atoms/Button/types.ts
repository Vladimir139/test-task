import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode | string;
  disabled?: boolean;
  isLoading?: boolean;
  isStretch?: boolean;
  type?: "submit" | "button" | "reset";
  size?: "medium" | "normal";
  textSize?: "medium" | "default";
  radius?: "normal" | "medium";
  theme?: "blue" | "dark" | "outline";
  onClick?: () => void;
}
