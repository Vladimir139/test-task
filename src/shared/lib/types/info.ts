import { ICommonUser } from "@/shared/lib/types/user";

export interface ITag {
  name: string;
}

export interface IAdditionalText {
  text: string;
}

export interface IAdvantages {
  icon: string | SVGElement;
  text: string;
}

export interface IContact {
  id: number;
  type:
    | "tg"
    | "vk"
    | "email"
    | "phone"
    | "whatsapp"
    | "viber"
    | "inst"
    | "facebook"
    | "other"
    | "twitter"
    | "github";
  name: string;
  contact: string;
}

export interface IStaff {
  id: number;
  photo: string;
  name: string;
  surname: string;
  middleName: string;
  position: string;
  contactStaff: IContact;
}

export interface IResponse {
  idResponse: number;
  sendIdEnterprise: number | null;
  content: string;
  sendIdInternshipsAndPractices: number | null;
  sendUser: ICommonUser;
  sendTime: Date;
}
