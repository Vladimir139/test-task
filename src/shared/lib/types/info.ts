import { IContact } from "@/shared/lib/types/contact";

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

export interface IStaff {
  id: number;
  photo: string;
  name: string;
  surname: string;
  middleName: string;
  position: string;
  contact: IContact;
}
