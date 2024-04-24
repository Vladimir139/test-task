import { ForwardedRef } from "react";

export interface CardOfNewsAndArticlesProps {
  transliterationName: string;
  type: "article" | "news";
  previewPhoto: string;
  createdAt: Date;
  title: string;
  previewDesc: string;
  ref: ForwardedRef<HTMLAnchorElement>;
}
