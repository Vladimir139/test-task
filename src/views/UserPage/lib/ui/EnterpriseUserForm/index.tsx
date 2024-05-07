import cx from "classnames";
import { useUnit } from "effector-react";
import React, { FC, useState } from "react";

import { $user } from "@/entities/user/model";
import { ArrowYIcon } from "@/shared/lib/icons";
import {
  AdvantageCard,
  Button,
  Columns,
  Gap,
  Input,
  Line,
  Select,
  StaffCard,
  Textarea,
} from "@/shared/ui/atoms";
import { SelectList, UploadPhotosProfile } from "@/shared/ui/molecules";
import { EditorComponent } from "@/shared/ui/templates";

import styles from "./styles.module.scss";

export const EnterpriseUserForm: FC = () => {
  const user = useUnit($user);

  const [content, setContent] = useState<string>("<p>Hello World! 🌎️</p>");

  console.log("content", content);

  const [isOpenProfessions, setIsOpenProfessions] = useState(false);
  const [isOpenTags, setIsOpenTags] = useState(false);
  const [isOpenStaffTypeContact, setIsOpenStaffTypeContact] = useState(false);
  const [isOpenTypeContact, setIsOpenTypeContact] = useState(false);
  const [isOpenAdvantages, setIsOpenAdvantages] = useState(false);

  return (
    <form className={styles.form}>
      <p className={cx(styles.titleBlock, styles.marginBottomNone)}>Фотографии профиля</p>
      <UploadPhotosProfile />
      <div className={styles.hr} />
      <div className={styles.wrapperSelect}>
        <p className={styles.titleBlock}>Профессия</p>
        <Select
          onClick={() => setIsOpenProfessions((prev) => !prev)}
          placeholder="Выберите профессию"
          value="Фронтенд"
          icon={<ArrowYIcon />}
          isOpen={isOpenProfessions}
          noBorderBottom={isOpenProfessions}
        />
        <SelectList
          stretch
          isVisible={isOpenProfessions}
          handleClose={() => setIsOpenProfessions(false)}
          items={[
            { id: 1, value: "frontend", title: "Фронтенд" },
            { id: 2, value: "backend", title: "Бекенд" },
          ]}
          // @ts-ignore
          handleChange={setIsOpenProfessions}
        />
      </div>
      <Line>
        <Input
          title="Название: "
          onChange={() => {}}
          placeholder="Введите название компании: "
          value={user?.enterpriseUserData?.enterprise.name}
          name="name"
          type="text"
          isRequired
        />
        <Input
          title="День создания/открытия: "
          onChange={() => {}}
          placeholder="Введите день: "
          value={user?.enterpriseUserData?.enterprise.dateOfBirth}
          name="dateOfBirth"
          type="date"
          isRequired
        />
        <Input
          title="Город: "
          onChange={() => {}}
          placeholder="Введите название города: "
          value={user?.enterpriseUserData?.enterprise.city}
          name="city"
          type="text"
          isRequired
        />
      </Line>
      <Line>
        <Input
          title="Сайт: "
          onChange={() => {}}
          placeholder="Введите ссылку сайта: "
          value={user?.enterpriseUserData?.enterprise.site}
          name="site"
          type="text"
          isRequired
        />
        <Input
          title="Специализация: "
          onChange={() => {}}
          placeholder="Введите название специализации: "
          value={user?.enterpriseUserData?.enterprise.specialization}
          name="specialization"
          type="text"
          isRequired
        />
        <Input
          title="Телефон: "
          onChange={() => {}}
          placeholder="Введите номер телефона: "
          value={user?.enterpriseUserData?.enterprise.phone}
          name="specialization"
          type="tel"
        />
      </Line>
      <div className={styles.hr} />
      <Line>
        <Input
          title="Адресс: "
          onChange={() => {}}
          placeholder="Г. Вельск, ул. Надежды, д. 89"
          value={user?.enterpriseUserData?.enterprise.fullNameLocation}
          name="fullNameLocation"
          type="text"
          isRequired
        />
        <Input
          title="Широта: "
          onChange={() => {}}
          placeholder="Введите широту: "
          value={user?.enterpriseUserData?.enterprise.location[0]}
          name="location"
          type="number"
          isRequired
        />
        <Input
          title="Долгота: "
          onChange={() => {}}
          placeholder="Введите долготу: "
          value={user?.enterpriseUserData?.enterprise.location[1]}
          name="location"
          type="number"
          isRequired
        />
      </Line>
      <div className={styles.hr} />
      <Line>
        <Input
          isRequired
          stretch
          title="Начальная зарплата"
          type="number"
          name="startSalary"
          onChange={() => {}}
          value=""
          placeholder="Введите начальную зарплату"
        />
        <Input
          isRequired
          stretch
          title="Конечная зарплата"
          type="number"
          name="endSalary"
          onChange={() => {}}
          value=""
          placeholder="Введите конечную зарплату"
        />
      </Line>
      <div className={styles.hr} />
      <Columns
        leftWrapper={
          <div>
            <Line alignBottom>
              <Input
                title="Контакт: "
                onChange={() => {}}
                placeholder="Введите контакт: "
                value=""
                name="contacts"
                type="text"
              />
              <Input
                title="Название контакта: "
                onChange={() => {}}
                placeholder="Введите название: "
                value=""
                name="contacts"
                type="text"
              />
              <div className={styles.wrapperSelect}>
                <Select
                  stretch
                  onClick={() => setIsOpenTypeContact((prev) => !prev)}
                  placeholder="Выберите тип контакта: "
                  value="Телефон"
                  icon={<ArrowYIcon />}
                  isOpen={isOpenTypeContact}
                  noBorderBottom={isOpenTypeContact}
                />
                <SelectList
                  stretch
                  isVisible={isOpenTypeContact}
                  handleClose={() => setIsOpenTypeContact(false)}
                  items={[
                    { id: 1, value: "phone", title: "Телефон" },
                    { id: 2, value: "tg", title: "Телеграм" },
                  ]}
                  // @ts-ignore
                  handleChange={setIsOpenTypeContact}
                />
              </div>
            </Line>
            <div className={styles.wrapperBtn}>
              <Button radius="little" size="normal">
                Добавить
              </Button>
            </div>
          </div>
        }
        rightWrapper={
          <div>
            <p className={styles.titleBlock}>Контакты</p>
            <ul className={styles.columnWrapper}>
              {user?.enterpriseUserData?.enterprise.contacts.map((contact) => (
                <li key={contact.name} className={styles.contact}>
                  {contact.contact} - {contact.name}
                </li>
              ))}
            </ul>
          </div>
        }
      />
      <div className={styles.hr} />
      <Columns
        leftWrapper={
          <div className={styles.columnWrapper}>
            <div className={styles.wrapperSelect}>
              <p className={styles.titleBlock}>Теги</p>
              <Select
                stretch
                onClick={() => setIsOpenTags((prev) => !prev)}
                placeholder="Выберите теги"
                value="Полная занятость"
                icon={<ArrowYIcon />}
                isOpen={isOpenTags}
                noBorderBottom={isOpenTags}
              />
              <SelectList
                stretch
                isVisible={isOpenTags}
                handleClose={() => setIsOpenTags(false)}
                items={[
                  { id: 1, value: "fullday", title: "Полная занятость" },
                  { id: 2, value: "remote", title: "Удаленная работа" },
                ]}
                // @ts-ignore
                handleChange={setIsOpenTags}
              />
            </div>
          </div>
        }
        rightWrapper={
          <ul className={styles.tagsList}>
            {[
              { id: 1, value: "fullday", title: "Полная занятость" },
              { id: 2, value: "remote", title: "Удаленная работа" },
            ].map((tag) => (
              <li key={tag.id}> {tag.title}</li>
            ))}
          </ul>
        }
      />
      <div className={styles.hr} />
      <Columns
        leftWrapper={
          <div>
            <Input
              title="Знания/умения: "
              onChange={() => {}}
              placeholder="Введите название знания/умения: "
              value={user?.enterpriseUserData?.enterprise.knowledge[0]}
              name="knowledge"
              type="text"
              isRequired
            />
            <div className={styles.wrapperBtn}>
              <Button radius="little" size="normal">
                Добавить
              </Button>
            </div>
          </div>
        }
        rightWrapper={
          <ul className={styles.tagsList}>
            {[
              { id: 1, value: "фыва", title: "Ответственность" },
              { id: 2, value: "фывац", title: "10-ти пальцевый набор" },
            ].map((knowledge) => (
              <li key={knowledge.id}> {knowledge.title}</li>
            ))}
          </ul>
        }
      />
      <div className={styles.hr} />
      <Columns
        leftWrapper={
          <div className={cx(styles.columnWrapper, styles.smallGap)}>
            <Input
              title="Имя сотрудника: "
              onChange={() => {}}
              placeholder="Введите имя сотрудника: "
              value=""
              name="staff"
              type="text"
            />
            <Input
              title="Отчество сотрудника: "
              onChange={() => {}}
              placeholder="Введите отчество сотрудника: "
              value=""
              name="staff"
              type="text"
            />
            <Input
              title="Фамилия сотрудника: "
              onChange={() => {}}
              placeholder="Введите фамилию сотрудника: "
              value=""
              name="staff"
              type="text"
            />
            <Input
              title="Должность сотрудника: "
              onChange={() => {}}
              placeholder="Введите должность сотрудника: "
              value=""
              name="staff"
              type="text"
            />
            <Line alignBottom>
              <Input
                title="Контакт сотрудника: "
                onChange={() => {}}
                placeholder="Введите контакт: "
                value=""
                name="staff"
                type="text"
              />
              <div className={styles.wrapperSelect}>
                <Select
                  stretch
                  onClick={() => setIsOpenStaffTypeContact((prev) => !prev)}
                  placeholder="Выберите тип контакта: "
                  value="Телефон"
                  icon={<ArrowYIcon />}
                  isOpen={isOpenStaffTypeContact}
                  noBorderBottom={isOpenStaffTypeContact}
                />
                <SelectList
                  stretch
                  isVisible={isOpenStaffTypeContact}
                  handleClose={() => setIsOpenStaffTypeContact(false)}
                  items={[
                    { id: 1, value: "phone", title: "Телефон" },
                    { id: 2, value: "tg", title: "Телеграм" },
                  ]}
                  // @ts-ignore
                  handleChange={setIsOpenStaffTypeContact}
                />
              </div>
            </Line>
            <div>
              <Button radius="little" size="normal">
                Добавить сотрудника
              </Button>
            </div>
          </div>
        }
        rightWrapper={
          <div>
            <p className={styles.titleBlock}>Сотрудники</p>
            <div className={styles.columnWrapper}>
              {user?.enterpriseUserData?.enterprise?.staff?.map((staff) => (
                <StaffCard
                  name={staff.name}
                  id={staff.id}
                  surname={staff.surname}
                  photo={staff.photo}
                  contactStaff={staff.contactStaff}
                  middleName={staff.middleName}
                  position={staff.position}
                />
              ))}
            </div>
          </div>
        }
      />
      <div className={styles.hr} />
      <Columns
        leftWrapper={
          <div>
            <Line alignBottom>
              <Input
                title="Приемущества и льготы: "
                onChange={() => {}}
                placeholder="Введите название преимущества/льготы: "
                value=""
                name="advantagesOfTheEntity"
                type="text"
              />
              <div className={styles.wrapperSelect}>
                <Select
                  stretch
                  onClick={() => setIsOpenAdvantages((prev) => !prev)}
                  placeholder="Выберите иконку льготы: "
                  value="Иконка"
                  icon={<ArrowYIcon />}
                  isOpen={isOpenAdvantages}
                  noBorderBottom={isOpenAdvantages}
                />
                <SelectList
                  stretch
                  isVisible={isOpenAdvantages}
                  handleClose={() => setIsOpenAdvantages(false)}
                  items={[
                    { id: 1, value: "1", title: "Иконка 1" },
                    { id: 2, value: "2", title: "Иконка 2" },
                  ]}
                  // @ts-ignore
                  handleChange={setIsOpenAdvantages}
                />
              </div>
            </Line>
            <div className={styles.wrapperBtn}>
              <Button radius="little" size="normal">
                Добавить
              </Button>
            </div>
          </div>
        }
        rightWrapper={
          <div>
            <p className={styles.titleBlock}>Преимущства и льготы</p>
            <div className={styles.columnWrapper}>
              {user?.enterpriseUserData?.enterprise?.advantagesOfTheEntity?.map((advantage) => (
                <AdvantageCard text={advantage.text} icon={advantage.icon} />
              ))}
            </div>
          </div>
        }
      />
      <div className={styles.hr} />
      <Textarea
        name="previewDesc"
        value=""
        placeholder="Введите превью описание"
        rows={10}
        cols={100}
        onChange={() => {}}
        title="Превью описание: "
        isRequired
      />
      <div className={styles.hr} />
      <div className={styles.wrapperBlock}>
        <p className={styles.titleBlock}>Описание</p>
        <EditorComponent placeholder="Описание..." content={content} setContent={setContent} />
      </div>
    </form>
  );
};
