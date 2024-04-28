import { ForwardedRef } from "react";

export interface PersonCardProps {
  id: number;
  name: string;
  surname: string;
  photo: string;
  post: string;
  ref?: ForwardedRef<HTMLDivElement>;
}
