import {
  educationalEstablishmentsList,
  enterprisesList,
  internshipsAndPracticesList,
  professionsList,
  vacancyList,
} from "@/shared/lib/constants/demo";
import {
  ICommonUser,
  IEducationalEstablishmentUserData,
  IEnterpriseUserData,
  IUser,
} from "@/shared/lib/types";

export const commonUserData: ICommonUser = {
  name: "Vladimir",
  surname: "Zenovsky",
  middleName: "Nikolaevich",
  contacts: [{ id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" }],
  description: "",
  city: "Velsk",
  photo: "/",
  favourites: {
    vacancy: vacancyList,
    educationalEstablishments: educationalEstablishmentsList,
    enterprises: enterprisesList,
    internshipsAndPractices: internshipsAndPracticesList,
  },
  filesResume: [],
  tags: [{ name: "filltime" }],
  sendResponses: [
    {
      idResponse: 1,
      sendIdEnterprise: 1,
      content: "",
      sendIdInternshipsAndPractices: null,
      sendUser: {} as ICommonUser,
      sendTime: new Date(),
    },
  ],
  // testResult: ""
};

export const enterpriseUserInfo: IEnterpriseUserData = {
  enterprise: enterprisesList[0],
  myInternshipsAndPractices: internshipsAndPracticesList,
  myVacancy: vacancyList,
  myProfessions: professionsList,
  myApplications: [
    {
      idResponse: 1,
      sendIdEnterprise: 1,
      content: "",
      sendIdInternshipsAndPractices: null,
      sendUser: {} as ICommonUser,
      sendTime: new Date(),
    },
  ],
};

export const educationalEstablishmentUser: IEducationalEstablishmentUserData = {
  educationalEstablishment: educationalEstablishmentsList[0],
  myInternshipsAndPractices: internshipsAndPracticesList,
  myVacancy: vacancyList,
  myProfessions: professionsList,
  myApplications: [
    {
      idResponse: 1,
      sendIdEnterprise: 1,
      content: "",
      sendIdInternshipsAndPractices: null,
      sendUser: {} as ICommonUser,
      sendTime: new Date(),
    },
  ],
};

// ----------------------------------------------------------

export const commonUser: IUser = {
  createdAt: new Date(),
  id: 1,
  email: "commonUser@gmail.com",
  password: "asdfasdf",
  role: "common",
  commonUserData,
  enterpriseUserData: null,
  educationalEstablishmentsUserData: null,
};

export const enterpriseUser: IUser = {
  createdAt: new Date(),
  id: 2,
  email: "enterpriseUser@gmail.com",
  password: "asdfasdf",
  role: "enterprise",
  commonUserData: null,
  enterpriseUserData: enterpriseUserInfo,
  educationalEstablishmentsUserData: null,
};

export const educationalEstablishmentsUserInfo: IUser = {
  createdAt: new Date(),
  id: 3,
  email: "educationalEstablishmentsUser@gmail.com",
  password: "asdfasdf",
  role: "educationalEstablishments",
  commonUserData: null,
  enterpriseUserData: null,
  educationalEstablishmentsUserData: educationalEstablishmentUser,
};
