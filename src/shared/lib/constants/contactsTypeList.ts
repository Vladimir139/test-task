export const contactsTypeList = [
  { id: 1, value: "phone", title: "Телефон" },
  { id: 2, value: "tg", title: "Телеграм" },
  { id: 3, value: "vk", title: "Вконтакте" },
  { id: 4, value: "email", title: "Почта" },
  { id: 5, value: "whatsapp", title: "WhatsApp" },
  { id: 6, value: "viber", title: "Viber" },
  { id: 7, value: "inst", title: "Instagram" },
  { id: 8, value: "facebook", title: "Facebook" },
  { id: 9, value: "twitter", title: "Twitter" },
  { id: 10, value: "github", title: "GitHub" },
  { id: 11, value: "other", title: "Другое" },
];

export const ReturnTitleContactWithValue = (
  value:
    | "tg"
    | "vk"
    | "email"
    | "phone"
    | "whatsapp"
    | "viber"
    | "inst"
    | "facebook"
    | "other"
    | "twitter"
    | "github",
) => contactsTypeList.find((contact) => contact.value === value)?.title;
