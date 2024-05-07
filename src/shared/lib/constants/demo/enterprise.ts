import { IEnterprise } from "@/shared/lib/types";

export const enterprisesList: IEnterprise[] = [
  {
    id: 1,
    name: "name enterprise",
    type: "enterprise",
    transliterationName: "enterprise_transliteration",
    profession: {
      id: 1,
      type: "profession",
      name: "name profession",
      transliterationName: "transiteration_name_profession",
      icon: "/",
      startSalary: 50_000,
      endSalary: 250_000,
      averageSalary: 150_000,
      salaryCurrency: "rub",
      previewDesc: "previewDesc profession",
      description: "desc profession", // редактор
      photos: [""],
      previewPhoto: "/",
      subcategories: [], // IProfession[]
      knowledge: [""], // можно вставить редактор описние или массив строк
      tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
      dateOfBirth: new Date(),
      // ----
      similarProfessions: [],
      otherProfessions: [],
      educationalEstablishments: [],
      enterprises: [],
      internshipsAndInternships: [],
      vacancy: [],
    }, // IProfession
    icon: "/",
    startSalary: 50_000,
    endSalary: 250_000,
    previewDesc: "description enterprise",
    photos: [""],
    previewPhoto: "/",
    description: "desc full enterprise", // редактор
    fullNameLocation: "Yaroslavl",
    location: [1, 2],
    knowledge: [""], // можно вставить редактор описние или массив строк
    tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
    createdAt: new Date(),
    dateOfBirth: new Date(),
    contacts: [{ id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" }],
    city: "city enterprise",
    site: "site enterprise",
    specialization: "specialization enterprise",
    staff: [
      {
        id: 1,
        photo: "/",
        name: "Иван",
        surname: "Абрамович",
        middleName: "Юрьевич",
        position: "Основатель СЕВЕРМАШ",
        contactStaff: { id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" },
      },
    ],
    advantagesOfTheEntity: [{ icon: "icon", text: "Льготы по здоровью" }],
    phone: "7-777-777-77",
    // ----
    similarEnterprises: [
      {
        id: 1,
        name: "name enterprise",
        type: "enterprise",
        transliterationName: "enterprise_transliteration",
        profession: {
          id: 1,
          type: "profession",
          name: "name profession",
          transliterationName: "transiteration_name_profession",
          icon: "/",
          startSalary: 50_000,
          endSalary: 250_000,
          averageSalary: 150_000,
          salaryCurrency: "rub",
          previewDesc: "previewDesc profession",
          description: "desc profession", // редактор
          photos: [""],
          previewPhoto: "/",
          subcategories: [], // IProfession[]
          knowledge: [""], // можно вставить редактор описние или массив строк
          tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
          dateOfBirth: new Date(),
          // ----
          similarProfessions: [],
          otherProfessions: [],
          educationalEstablishments: [],
          enterprises: [],
          internshipsAndInternships: [],
          vacancy: [],
        }, // IProfession
        icon: "/",
        startSalary: 50_000,
        endSalary: 250_000,
        previewDesc: "description enterprise",
        photos: [""],
        previewPhoto: "/",
        description: "desc full enterprise", // редактор
        fullNameLocation: "Yaroslavl",
        location: [1, 2],
        knowledge: [""], // можно вставить редактор описние или массив строк
        tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
        createdAt: new Date(),
        dateOfBirth: new Date(),
        contacts: [{ id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" }],
        city: "city enterprise",
        site: "site enterprise",
        specialization: "specialization enterprise",
        staff: [
          {
            id: 1,
            photo: "/",
            name: "Иван",
            surname: "Абрамович",
            middleName: "Юрьевич",
            position: "Основатель СЕВЕРМАШ",
            contactStaff: { id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" },
          },
        ],
        advantagesOfTheEntity: [{ icon: "icon", text: "Льготы по здоровью" }],
        phone: "7-777-777-77",
        // ----
        similarEnterprises: [],
        otherEnterprises: [],
        educationalEstablishments: [],
        professions: [],
        internshipsAndInternships: [],
        vacancy: [],
      },
    ],
    otherEnterprises: [
      {
        id: 1,
        name: "name enterprise",
        type: "enterprise",
        transliterationName: "enterprise_transliteration",
        profession: {
          id: 1,
          type: "profession",
          name: "name profession",
          transliterationName: "transiteration_name_profession",
          icon: "/",
          startSalary: 50_000,
          endSalary: 250_000,
          averageSalary: 150_000,
          salaryCurrency: "rub",
          previewDesc: "previewDesc profession",
          description: "desc profession", // редактор
          photos: [""],
          previewPhoto: "/",
          subcategories: [], // IProfession[]
          knowledge: [""], // можно вставить редактор описние или массив строк
          tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
          dateOfBirth: new Date(),
          // ----
          similarProfessions: [],
          otherProfessions: [],
          educationalEstablishments: [],
          enterprises: [],
          internshipsAndInternships: [],
          vacancy: [],
        }, // IProfession
        icon: "/",
        startSalary: 50_000,
        endSalary: 250_000,
        previewDesc: "description enterprise",
        photos: [""],
        previewPhoto: "/",
        description: "desc full enterprise", // редактор
        fullNameLocation: "Yaroslavl",
        location: [1, 2],
        knowledge: [""], // можно вставить редактор описние или массив строк
        tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
        createdAt: new Date(),
        dateOfBirth: new Date(),
        contacts: [{ id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" }],
        city: "city enterprise",
        site: "site enterprise",
        specialization: "specialization enterprise",
        staff: [
          {
            id: 1,
            photo: "/",
            name: "Иван",
            surname: "Абрамович",
            middleName: "Юрьевич",
            position: "Основатель СЕВЕРМАШ",
            contactStaff: { id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" },
          },
        ],
        advantagesOfTheEntity: [{ icon: "icon", text: "Льготы по здоровью" }],
        phone: "7-777-777-77",
        // ----
        similarEnterprises: [],
        otherEnterprises: [],
        educationalEstablishments: [],
        professions: [],
        internshipsAndInternships: [],
        vacancy: [],
      },
    ],
    educationalEstablishments: [],
    professions: [],
    internshipsAndInternships: [],
    vacancy: [],
  },
];
