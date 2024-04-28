import { IAdvantages, IContact, IStaff } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEducationalEstablishments } from "./educationalEstablishments";
import { IInternshipsAndPractices } from "./internshipsAndPractices";
import { IProfession } from "./profession";
import { IVacancy } from "./vacancy";

export interface IEnterprise {
  id: number;
  name: string;
  type: "enterprise";
  transliterationName: string;
  profession: IProfession;
  icon: string;
  startSalary: number;
  endSalary: number;
  previewDesc: string;
  photos: string[];
  previewPhoto: string;
  description: string; // редактор
  fullNameLocation: string;
  location: [number, number];
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  createdAt: Date;
  DateOfBirth: Date;
  contacts: IContact[];
  city: string;
  site: string;
  sizeCompany: number[];
  specialization: string;
  staff: IStaff[];
  advantagesOfTheEntity: IAdvantages[];
  phone: string;
  // ----
  similarEnterprises: IEnterprise[];
  otherEnterprises: IEnterprise[];
  educationalEstablishments: IEducationalEstablishments[];
  professions: IProfession[];
  internshipsAndInternships: IInternshipsAndPractices[];
  vacancy: IVacancy[];
}
