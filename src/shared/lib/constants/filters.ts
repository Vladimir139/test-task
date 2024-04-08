import { FiltersProps } from "@/shared/lib/types/filters";

export const filtersVacancy: FiltersProps[] = [
  {
    title: "Оформление",
    type: "checkbox",
    isOpen: true,
    filters: [
      {
        id: 999,
        name: "Оформление по ГПХ или по совместительству",
        value: "registrationByGPH_OrPart-time",
        isChecked: false,
      },
    ],
  },
  {
    title: "Образование",
    type: "checkbox",
    isOpen: true,
    filters: [
      {
        id: 1,
        name: "Не требуется или не указано",
        value: "notRequiredOrNotSpecified",
        isChecked: false,
      },
      {
        id: 2,
        name: "Среднее профессиональное",
        value: "secondaryProfessionalEducation",
        isChecked: false,
      },
      {
        id: 3,
        name: "Высшее",
        value: "higher",
        isChecked: false,
      },
    ],
  },
  {
    title: "Требуемый опыт работы",
    type: "radio",
    isOpen: true,
    filters: [
      {
        id: 4,
        name: "Не имеет значения",
        value: "itDoesntMatter",
        isChecked: true,
      },
      {
        id: 5,
        name: "Нет опыта",
        value: "noExperience",
        isChecked: false,
      },
      {
        id: 6,
        name: "От 1 до 3 лет",
        value: "from1To3",
        isChecked: false,
      },
      {
        id: 7,
        name: "От 3 до 6 лет",
        value: "from3To6",
        isChecked: false,
      },
      {
        id: 8,
        name: "Более 6 лет",
        value: "moreThan6Years",
        isChecked: false,
      },
    ],
  },
  {
    title: "Тип занятости",
    type: "checkbox",
    isOpen: true,
    filters: [
      {
        id: 9,
        name: "Полная занятость",
        value: "fullTime",
        isChecked: false,
      },
      {
        id: 10,
        name: "Частичная занятость",
        value: "partTime",
        isChecked: false,
      },
      {
        id: 11,
        name: "Проектная работа/разовое задание",
        value: "projectWork_oneTimeAssignment",
        isChecked: false,
      },
      {
        id: 12,
        name: "Волонтерство",
        value: "Volunteering",
        isChecked: false,
      },
      {
        id: 13,
        name: "Стажировка",
        value: "Internship",
        isChecked: false,
      },
    ],
  },
  {
    title: "Другие параметры",
    type: "checkbox",
    isOpen: false,
    filters: [
      {
        id: 14,
        name: "Доступные людям с инвалидностью",
        value: "partTime",
        isChecked: false,
      },
      {
        id: 15,
        name: "Доступные с 14 лет",
        value: "onWeekends",
        isChecked: false,
      },
    ],
  },
  {
    title: "Сортировка",
    type: "radio",
    isOpen: false,
    filters: [
      {
        id: 16,
        name: "По соответствию",
        value: "byCorrespondence",
        isChecked: true,
      },
      {
        id: 17,
        name: "По дате создания",
        value: "byCreationDate",
        isChecked: false,
      },
      {
        id: 18,
        name: "По убыванию зарплат",
        value: "inDescendingOrderOfSalaries",
        isChecked: false,
      },
      {
        id: 19,
        name: "По возрастанию зарплаты",
        value: "inAscendingOrderOfSalary",
        isChecked: false,
      },
    ],
  },
  {
    title: "Выводить",
    type: "radio",
    isOpen: false,
    filters: [
      {
        id: 20,
        name: "За все время",
        value: "forAllTheTime",
        isChecked: true,
      },
      {
        id: 21,
        name: "За месяц",
        value: "perMonth",
        isChecked: false,
      },
      {
        id: 22,
        name: "За неделю",
        value: "inAWeek",
        isChecked: false,
      },
      {
        id: 23,
        name: "За последние три дня",
        value: "inTheLastThreeDays",
        isChecked: false,
      },
      {
        id: 24,
        name: "За сутки",
        value: "perDay",
        isChecked: false,
      },
    ],
  },
  {
    title: "Показывать на странице",
    type: "radio",
    isOpen: false,
    filters: [
      {
        id: 25,
        name: "20 вакансий",
        value: "20",
        isChecked: true,
      },
      {
        id: 26,
        name: "50 вакансий",
        value: "50",
        isChecked: false,
      },
      {
        id: 27,
        name: "100 вакансий",
        value: "100",
        isChecked: false,
      },
    ],
  },
];
