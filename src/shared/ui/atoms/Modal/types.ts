import { ReactNode } from "react";

export interface ModalProps {
  isOpened: boolean;
  handleClose: () => void;
  children: ReactNode;
  size?: "big";
}
