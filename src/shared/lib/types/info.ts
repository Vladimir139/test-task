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
  contact: IContact;
}
