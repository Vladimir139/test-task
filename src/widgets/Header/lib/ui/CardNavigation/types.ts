import { ReactElement, ReactNode } from "react";

export interface CardNavigationProps {
  icon: ReactNode | ReactElement;
  title: string;
  description: string;
  link: string;
  handleClose: () => void;
}
