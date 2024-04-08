import { ITag } from "@/shared/lib/types/info";

import { Contact } from "./contact";
import { IEducationalEstablishments } from "./educationalEstablishments";
import { IInternshipsAndPractices } from "./internshipsAndPractices";
import { IProfession } from "./profession";
import { IVacancy } from "./vacancy";

export interface IEnterprises {
  id: number;
  name: string;
  type: "enterprises";
  transliterationName: string;
  enterprise: IEnterprises;
  profession: IProfession;
  icon: string;
  startSalary: number;
  endSalary: number;
  previewDesc: string;
  photos: string[];
  previewPhoto: string;
  description: string; // редактор
  location: string;
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  createdAt: Date;
  DateOfBirth: Date;
  contacts: Contact[];
  city: string;
  // ----
  similarEnterprises: IEnterprises[];
  otherEnterprises: IEnterprises[];
  educationalEstablishments: IEducationalEstablishments;
  professions: IProfession[];
  internshipsAndInternships: IInternshipsAndPractices[];
  vacancy: IVacancy[];
}
