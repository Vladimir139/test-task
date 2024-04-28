import { IEducationalEstablishments } from "@/shared/lib/types/educationalEstablishments";
import { IEnterprise } from "@/shared/lib/types/enterprise";
import { IInternshipsAndPractices } from "@/shared/lib/types/internshipsAndPractices";
import { IProfession } from "@/shared/lib/types/profession";
import { IVacancy } from "@/shared/lib/types/vacancy";

export interface CardsListProps {
  entities:
    | IVacancy[]
    | IProfession[]
    | IEducationalEstablishments[]
    | IEnterprise[]
    | IInternshipsAndPractices[];
}
