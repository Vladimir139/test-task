import { IVacancy } from "@/shared/lib/types";

export const cardsVacancy: IVacancy[] = [
  {
    id: 1,
    name: "UX Writer",
    type: "vacancy",
    transliterationName: "ux_writer",
    // enterprise: IEnterprises;
    // profession: IProfession;
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
    // similarVacancy: IVacancy[];
    // otherVacancy: IVacancy[];
    // educationalEstablishments: IEducationalEstablishments;
    // enterprises: IEnterprises[];
    // internshipsAndInternships: IInternshipsAndPractices[];
  },
];
