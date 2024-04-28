import { IAdvantages, IContact, IStaff } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEducationalEstablishments } from "./educationalEstablishments";
import { IEnterprise } from "./enterprise";
import { IInternshipsAndPractices } from "./internshipsAndPractices";
import { IProfession } from "./profession";

export interface IVacancy {
  id: number;
  type: "vacancy";
  name: string;
  transliterationName: string;
  enterprise?: IEnterprise;
  profession?: IProfession;
  icon: string;
  startSalary: number;
  endSalary: number | null;
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
  site: string;
  sizeCompany: number[];
  specialization: string;
  staff: IStaff[];
  advantagesOfTheEntity: IAdvantages[];
  phone: string;
  // ----
  similarVacancy?: IVacancy[];
  otherVacancy?: IVacancy[];
  educationalEstablishments?: IEducationalEstablishments[];
  enterprises?: IEnterprise[];
  internshipsAndInternships?: IInternshipsAndPractices[];
}
