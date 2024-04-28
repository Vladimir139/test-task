import { IProfession } from "@/shared/lib/types";

export const professionsList: IProfession[] = [
  {
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
    DateOfBirth: new Date(),
    // ----
    similarProfessions: [
      {
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
        DateOfBirth: new Date(),
        // ----
        similarProfessions: [],
        otherProfessions: [],
        educationalEstablishments: [],
        enterprises: [],
        internshipsAndInternships: [],
        vacancy: [],
      },
    ],
    otherProfessions: [
      {
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
        DateOfBirth: new Date(),
        // ----
        similarProfessions: [],
        otherProfessions: [],
        educationalEstablishments: [],
        enterprises: [],
        internshipsAndInternships: [],
        vacancy: [],
      },
    ],
    educationalEstablishments: [],
    enterprises: [],
    internshipsAndInternships: [],
    vacancy: [],
  },
];
