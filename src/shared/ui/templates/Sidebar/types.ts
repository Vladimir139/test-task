import { ReactNode } from "react";

export interface SidebarProps {
  isOpened: boolean;
  handleClose: () => void;
  children: ReactNode;
}
