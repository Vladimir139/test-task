import { ReactNode } from "react";

export const navigationItems: {
  text: string | ReactNode;
  link: string;
}[] = [
  {
    text: "О нас",
    link: "/about-us",
  },
  {
    text: "Профессии",
    link: "/professions",
  },
  {
    text: "Предприятия",
    link: "/enterprises",
  },
  {
    text: "Учебные заведения",
    link: "/educational-establishments",
  },
  {
    text: "Стажировки и практики",
    link: "/internships-and-practices",
  },
  {
    text: "Вакансии",
    link: "/vacancy",
  },
  {
    text: "Предприятиям и учебным заведениям",
    link: "/",
  },
];

export const careerNavItems = [
  {
    icon: "ProfessionIcon",
    title: "Профессии",
    description:
      "Информация о различных профессиях, требованиях к специалистам и перспективах развития в выбранной сфере деятельности.",
    link: "/professions",
  },
  {
    icon: "InternshipsIcon",
    title: "Стажировки",
    description:
      "Возможность приобрести практический опыт работы в выбранной области под руководством опытных специалистов.",
    link: "/internships-and-practices",
  },
  {
    icon: "PracticesIcon",
    title: "Практики",
    description:
      "Возможность применить теоретические знания на практике в реальных рабочих условиях для лучшего понимания профессиональной деятельности.",
    link: "/internships-and-practices",
  },
  {
    icon: "VacancyIcon",
    title: "Вакансии",
    description:
      "Актуальная информация о свободных рабочих местах, требованиях к кандидатам и условиях труда.",
    link: "/vacancy",
  },
  {
    icon: "EducationalEstablishmentsIcon",
    title: "Учебные заведения",
    description:
      "Список образовательных учреждений, предлагающих курсы и программы по различным специальностям.",
    link: "/educational-establishments",
  },
  {
    icon: "EnterprisesIcon",
    title: "Предприятия",
    description:
      "Информация о компаниях и организациях, их деятельности, структуре, возможностях трудоустройства и сотрудничества.",
    link: "/enterprises",
  },
];
