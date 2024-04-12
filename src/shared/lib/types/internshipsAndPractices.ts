import { IContact } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEducationalEstablishments } from "./educationalEstablishments";
import { IEnterprises } from "./enterprises";
import { IProfession } from "./profession";
import { IVacancy } from "./vacancy";

export interface IInternshipsAndPractices {
  id: number;
  type: "internshipsAndPractices";
  typeInternship: "internship" | "practice";
  name: string;
  transliterationName: string;
  enterprise: IEnterprises;
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
  location: string;
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  createdAt: Date;
  contacts: IContact[];
  city: string;
  // ----
  similarInternshipsAndPractices: IInternshipsAndPractices[];
  otherInternshipsAndPractices: IInternshipsAndPractices[];
  educationalEstablishments: IEducationalEstablishments;
  enterprises: IEnterprises[];
  professions: IProfession[];
  vacancy: IVacancy[];
}
