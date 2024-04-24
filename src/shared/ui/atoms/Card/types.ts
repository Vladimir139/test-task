import { ForwardedRef } from "react";

import { IAdditionalText, ITag } from "@/shared/lib/types/info";

export interface ICard {
  id: number;
  transliterationName: string;
  icon: string;
  title: string;
  subTitle: IAdditionalText[];
  tags: ITag[];
  link: string;
  additionalText: IAdditionalText[];
  dateRecord?: Date;
  salary?: {
    value: number[];
    salaryPeriod: "hour" | "day" | "week" | "month" | "year" | "deal" | "none";
    salaryCurrency: "rub" | "usd";
  };
}

export interface CardProps extends ICard {
  onClick: () => void;
  ref?: ForwardedRef<HTMLDivElement>;
}
