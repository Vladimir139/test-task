import { IAdvantages, IContact, IStaff } from "@/shared/lib/types";
import { ITag } from "@/shared/lib/types/info";

import { IEnterprise } from "./enterprise";
import { IInternshipsAndPractices } from "./internshipsAndPractices";
import { IProfession } from "./profession";
import { IVacancy } from "./vacancy";

export interface IEducationalEstablishments {
  id: number; // +
  name: string; // +
  type: "educationalEstablishments"; // +
  transliterationName: string; // +
  icon: string; // +
  previewDesc: string; // +
  photos: string[];
  previewPhoto: string; // +
  description: string; // + // редактор
  fullNameLocation: string; // +
  location: [number, number]; // +
  city: string; // +
  tags: ITag[]; // +
  createdAt: Date; // +
  dateOfBirth: Date; // +
  contacts: IContact[]; // +
  site: string; // +
  specialization: string; // +
  staff: IStaff[]; // +
  advantagesOfTheEntity: IAdvantages[]; // +
  phone?: string; // +
  // ----
  similarEducationalEstablishments: IEducationalEstablishments[];
  otherEducationalEstablishments: IEducationalEstablishments[];
  professions: IProfession[];
  enterprises: IEnterprise[];
  internshipsAndInternships: IInternshipsAndPractices[];
  vacancy: IVacancy[];
}
