import { IAdvantages, IContact, IStaff } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEducationalEstablishments } from "./educationalEstablishments";
import { IEnterprise } from "./enterprises";
import { IProfession } from "./profession";
import { IVacancy } from "./vacancy";

export interface IInternshipsAndPractices {
  id: number;
  type: "internshipsAndPractices";
  typeInternship: "internship" | "practice";
  name: string;
  transliterationName: string;
  enterprise: IEnterprise;
  profession: IProfession;
  icon: string;
  startSalary: number;
  endSalary: number;
  salaryPeriod: "hour" | "day" | "week" | "month" | "year" | "deal" | "none";
  salaryCurrency: "rub" | "usd";
  previewDesc: string;
  photos: string[];
  previewPhoto: string;
  description: string; // редактор
  fullNameLocation: string;
  location: [number, number];
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  createdAt: Date;
  contacts: IContact[];
  city: string;
  sizeInternshipsOrPractice: number[];
  specialization: string;
  staff: IStaff[];
  advantagesOfTheEntity: IAdvantages[];
  phone: string;
  // ----
  similarInternshipsAndPractices: IInternshipsAndPractices[];
  otherInternshipsAndPractices: IInternshipsAndPractices[];
  educationalEstablishments: IEducationalEstablishments[];
  enterprises: IEnterprise[];
  professions: IProfession[];
  vacancy: IVacancy[];
}
