import { IAdvantages, IContact, IStaff } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEnterprise } from "./enterprises";
import { IInternshipsAndPractices } from "./internshipsAndPractices";
import { IProfession } from "./profession";
import { IVacancy } from "./vacancy";

export interface IEducationalEstablishments {
  id: number;
  name: string;
  type: "educationalEstablishments";
  transliterationName: string;
  icon: string;
  previewDesc: string;
  photos: string[];
  previewPhoto: string;
  description: string; // редактор
  fullNameLocation: string;
  location: [number, number];
  city: string;
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  createdAt: Date;
  DateOfBirth: Date;
  contacts: IContact[];
  site: string;
  sizeUniversity: number[];
  specialization: string;
  staff: IStaff[];
  advantagesOfTheEntity: IAdvantages[];
  phone: string;
  // ----
  similarEducationalEstablishments: IEducationalEstablishments[];
  otherEducationalEstablishments: IEducationalEstablishments[];
  professions: IProfession[];
  enterprises: IEnterprise[];
  internshipsAndInternships: IInternshipsAndPractices[];
  vacancy: IVacancy[];
}
