import { ChangeEvent } from "react";

export interface TextareaProps {
  cols: number;
  rows: number;
  placeholder: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  title?: string;
  isRequired?: boolean;
  name: string;
}
