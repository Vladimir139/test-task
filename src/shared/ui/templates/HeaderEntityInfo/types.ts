import { IContact } from "@/shared/lib/types";

export interface HeaderEntityInfoProps {
  logo: string;
  additionalInformation: string;
  title: string;
  contacts: IContact[];
  blocksInfo: {
    urlSite: string;
    urlSiteTitle: string;
    sizeEntity: string;
    city: string;
    specialization: string | string[];
  };
}
