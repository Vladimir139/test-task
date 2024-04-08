import { IAdditionalText } from "@/shared/lib/types/info";

export interface ShortBlockInfoProps {
  icon: string;
  title: string;
  subTitle: IAdditionalText[];
  textSizeSubTitle?: "defaultSmall" | "default";
  textSizeTitle?: "defaultSmall" | "default";
  radiusLogo?: "square";
  isBig?: boolean;
}
