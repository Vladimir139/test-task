import {
  IEducationalEstablishments,
  IEnterprise,
  IInternshipsAndPractices,
  ITag,
  IVacancy,
} from "@/shared/lib/types";

export interface IProfession {
  id: number;
  type: "profession";
  name: string;
  transliterationName: string;
  icon: string;
  startSalary: number;
  endSalary: number;
  averageSalary: number;
  salaryCurrency: "rub" | "usd";
  previewDesc: string;
  description: string; // редактор
  photos: string[];
  previewPhoto: string;
  subcategories: IProfession[];
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  DateOfBirth: Date;
  // ----
  similarProfessions: IProfession[];
  otherProfessions: IProfession[];
  educationalEstablishments: IEducationalEstablishments[];
  enterprises: IEnterprise[];
  internshipsAndInternships: IInternshipsAndPractices[];
  vacancy: IVacancy[];
}
