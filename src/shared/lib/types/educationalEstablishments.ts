import { IContact } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEnterprises } from "./enterprises";
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
  location: string;
  city: string;
  knowledge: string[]; // можно вставить редактор описние или массив строк
  tags: ITag[];
  createdAt: Date;
  DateOfBirth: Date;
  contacts: IContact[];
  // ----
  similarEducationalEstablishments: IEducationalEstablishments[];
  otherEducationalEstablishments: IEducationalEstablishments[];
  professions: IProfession[];
  enterprises: IEnterprises[];
  internshipsAndInternships: IInternshipsAndPractices[];
  vacancy: IVacancy[];
}
