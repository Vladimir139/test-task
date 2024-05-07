import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode | string;
  disabled?: boolean;
  isLoading?: boolean;
  isStretch?: boolean;
  type?: "submit" | "button" | "reset";
  size?: "medium" | "normal" | "average";
  textSize?: "medium" | "default";
  radius?: "normal" | "medium" | "small" | "little";
  theme?: "blue" | "dark" | "outline" | "outlineBlue" | "darkBlue" | "outlineDarkBlue" | "red";
  onClick?: () => void;
}
