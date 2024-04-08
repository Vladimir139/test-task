import { IEducationalEstablishments } from "@/shared/lib/types/educationalEstablishments";
import { IEnterprises } from "@/shared/lib/types/enterprises";
import { IInternshipsAndPractices } from "@/shared/lib/types/internshipsAndPractices";
import { IProfession } from "@/shared/lib/types/profession";
import { IVacancy } from "@/shared/lib/types/vacancy";

export interface CardsListProps {
  entities:
    | IVacancy[]
    | IProfession[]
    | IEducationalEstablishments[]
    | IEnterprises[]
    | IInternshipsAndPractices[];
}
