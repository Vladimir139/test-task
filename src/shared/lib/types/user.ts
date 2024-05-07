import {
  IContact,
  IEducationalEstablishments,
  IEnterprise,
  IInternshipsAndPractices,
  IProfession,
  IResponse,
  ITag,
  IVacancy,
} from "@/shared/lib/types/";

export interface IEnterpriseUserData {
  enterprise: IEnterprise;
  myInternshipsAndPractices: IInternshipsAndPractices[];
  myVacancy: IVacancy[];
  myProfessions: IProfession[];
  myApplications: IResponse[];
}

export interface IEducationalEstablishmentUserData {
  educationalEstablishment: IEducationalEstablishments;
  myInternshipsAndPractices: IInternshipsAndPractices[];
  myVacancy: IVacancy[];
  myProfessions: IProfession[];
  myApplications: IResponse[];
}

export interface ICommonUser {
  name: string; // +
  surname: string; // +
  middleName: string; // +
  contacts: IContact[]; // +
  description: string; // +
  city: string; // +
  photo: string; // +
  favourites: {
    vacancy: IVacancy[];
    educationalEstablishments: IEducationalEstablishments[];
    enterprises: IEnterprise[];
    internshipsAndPractices: IInternshipsAndPractices[];
  };
  filesResume: File[];
  tags: ITag[]; // +
  sendResponses: IResponse[];
  // testResult: ""
}

export interface IUser {
  createdAt: Date; // +
  id: number; // +
  email: string; // +
  password: string; // +
  role: "common" | "enterprise" | "educationalEstablishments"; // +
  commonUserData?: ICommonUser | null;
  enterpriseUserData?: IEnterpriseUserData | null;
  educationalEstablishmentsUserData?: IEducationalEstablishmentUserData | null;
}
