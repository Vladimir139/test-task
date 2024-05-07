import { enterprisesList, professionsList } from "@/shared/lib/constants/demo/";
import { IVacancy } from "@/shared/lib/types";

export const vacancyList: IVacancy[] = [
  {
    id: 1,
    name: "UX Writer",
    type: "vacancy",
    transliterationName: "ux_writer",
    enterprise: {
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
    },
    icon: "/",
    startSalary: 50_000,
    endSalary: 250_000,
    salaryPeriod: "month",
    salaryCurrency: "rub",
    previewDesc:
      "Как дизайнер пользовательского интерфейса в Pixelz Studio, вы сосредоточитесь на разработке удобного для пользователя дизайна на нескольких платформах .(веб, мобильные устройства, панель мониторинга и т.д.)",
    photos: ["/", "/"],
    location: [1, 2],
    previewPhoto: "/",
    description:
      "Как дизайнер пользовательского интерфейса в Pixelz Studio, вы сосредоточитесь на разработке удобного для пользователя дизайна на нескольких платформах .(веб, мобильные устройства, панель мониторинга и т.д.)", // редактор
    fullNameLocation: "Силикатное шоссе, 17",
    knowledge: ["Ботаника", "Механика", "Кинематика"], // можно вставить редактор описние или массив строк
    tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
    createdAt: new Date(),
    contacts: [{ id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" }],
    city: "Yaroslavl",
    site: "www.site.ru",
    sizeCompany: [10],
    specialization: "Производство труб",
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
    views: 1, // Добавлено поле views
    responses: 0, // Добавлено поле responses
    // ----
    similarVacancy: [
      {
        id: 1,
        name: "UX Writer",
        type: "vacancy",
        transliterationName: "ux_writer",
        enterprise: enterprisesList[0],
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
        },
        icon: "/",
        startSalary: 50_000,
        endSalary: 250_000,
        salaryPeriod: "month",
        salaryCurrency: "rub",
        previewDesc:
          "Как дизайнер пользовательского интерфейса в Pixelz Studio, вы сосредоточитесь на разработке удобного для пользователя дизайна на нескольких платформах .(веб, мобильные устройства, панель мониторинга и т.д.)",
        photos: ["/", "/"],
        location: [1, 2],
        previewPhoto: "/",
        description:
          "Как дизайнер пользовательского интерфейса в Pixelz Studio, вы сосредоточитесь на разработке удобного для пользователя дизайна на нескольких платформах .(веб, мобильные устройства, панель мониторинга и т.д.)", // редактор
        fullNameLocation: "Силикатное шоссе, 17",
        knowledge: ["Ботаника", "Механика", "Кинематика"], // можно вставить редактор описние или массив строк
        tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
        createdAt: new Date(),
        contacts: [{ id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" }],
        city: "Yaroslavl",
        site: "www.site.ru",
        sizeCompany: [10],
        specialization: "Производство труб",
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
        views: 0, // Добавлено поле views
        responses: 0, // Добавлено поле responses
      },
    ],
    otherVacancy: [
      {
        id: 1,
        views: 111,
        responses: 123,
        name: "UX Writer",
        type: "vacancy",
        transliterationName: "ux_writer",
        enterprise: enterprisesList[0],
        profession: professionsList[0],
        icon: "/",
        startSalary: 50_000,
        endSalary: 250_000,
        salaryPeriod: "month",
        salaryCurrency: "rub",
        previewDesc:
          "Как дизайнер пользовательского интерфейса в Pixelz Studio, вы сосредоточитесь на разработке удобного для пользователя дизайна на нескольких платформах .(веб, мобильные устройства, панель мониторинга и т.д.)",
        photos: ["/", "/"],
        location: [1, 2],
        previewPhoto: "/",
        description:
          "Как дизайнер пользовательского интерфейса в Pixelz Studio, вы сосредоточитесь на разработке удобного для пользователя дизайна на нескольких платформах .(веб, мобильные устройства, панель мониторинга и т.д.)", // редактор
        fullNameLocation: "Силикатное шоссе, 17",
        knowledge: ["Ботаника", "Механика", "Кинематика"], // можно вставить редактор описние или массив строк
        tags: [{ name: "Fulltime" }, { name: "Hybrid" }, { name: "2-4 Years" }],
        createdAt: new Date(),
        contacts: [{ id: 1, name: "Vladimir", contact: "7-777-777-777", type: "phone" }],
        city: "Yaroslavl",
        site: "www.site.ru",
        sizeCompany: [10],
        specialization: "Производство труб",
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
        similarVacancy: [],
        otherVacancy: [],
        educationalEstablishments: [],
        enterprises: [],
        internshipsAndInternships: [],
      },
    ],
    educationalEstablishments: [],
    enterprises: [],
    internshipsAndInternships: [],
  },
];
