import { IContact } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEducationalEstablishments } from "./educationalEstablishments";
import { IEnterprises } from "./enterprises";
import { IInternshipsAndPractices } from "./internshipsAndPractices";
import { IProfession } from "./profession";

export interface IVacancy {
  id: number;
  type: "vacancy";
  name: string;
  transliterationName: string;
  enterprise?: IEnterprises;
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
  location: string;
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  createdAt: Date;
  contacts: IContact[];
  city: string;
  // ----
  similarVacancy?: IVacancy[];
  otherVacancy?: IVacancy[];
  educationalEstablishments?: IEducationalEstablishments;
  enterprises?: IEnterprises[];
  internshipsAndInternships?: IInternshipsAndPractices[];
}
