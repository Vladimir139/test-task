import { IAdditionalText, ITag } from "@/shared/lib/types";

export interface CardOtherOfferProps {
  tags: ITag[];
  icon: string;
  title: string;
  subTitle: IAdditionalText[];
  additionalText: IAdditionalText[];
  dateRecord: Date;
  salary?: {
    value: number[];
    salaryPeriod: "hour" | "day" | "week" | "month" | "year" | "deal" | "none";
    salaryCurrency: "rub" | "usd";
  };
}
