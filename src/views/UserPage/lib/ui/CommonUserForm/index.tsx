import cx from "classnames";
import { useUnit } from "effector-react";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  $editUser,
  $isUserUpdated,
  editFormSubmitted,
  resetEditUser,
  setEditUser,
} from "@/entities/user/model";
import { contactsTypeList, ReturnTitleContactWithValue } from "@/shared/lib/constants";
import { ArrowYIcon } from "@/shared/lib/icons";
import { IUser } from "@/shared/lib/types";
import { Button, Columns, Input, Line, Select, WhiteWrapper } from "@/shared/ui/atoms";
import { SelectList, UploadPhotosProfile } from "@/shared/ui/molecules";
import { EditorComponent } from "@/shared/ui/templates";

import styles from "../EnterpriseUserForm/styles.module.scss";

export const CommonUserForm: FC = () => {
  const editUser = useUnit($editUser);
  const isUserUpdated = useUnit($isUserUpdated);

  console.log("editUser", editUser);

  const [isOpenTypeContact, setIsOpenTypeContact] = useState(false);
  const [isOpenTags, setIsOpenTags] = useState(false);
  const [newContactValue, setNewContactValue] = useState("");
  const [newContactType, setNewContactType] = useState("phone");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    reValidateMode: "onChange",
  });

  const handleChangeDescription = (content: string) => {
    setEditUser({
      ...editUser,
      commonUserData: {
        ...editUser?.commonUserData,
        description: content,
      },
    });
  };

  const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
    console.log("editFormSubmitted", data);

    editFormSubmitted(data);

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <WhiteWrapper smallBottomMargin>
        <div className={styles.innerWrapForm}>
          <p className={cx(styles.titleBlock, styles.marginBottomNone)}>Фотографии профиля</p>
          <UploadPhotosProfile isUserUpload />
          <div className={styles.hr} />
          <Line>
            <Input
              title="Имя: "
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  commonUserData: { ...editUser.commonUserData, name: e.target.value },
                })
              }
              placeholder="Введите имя: "
              value={editUser?.commonUserData?.name}
              name="name"
              type="text"
              isRequired
              handleRegister={() => register("name")}
            />
            <Input
              title="Отчество: "
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  commonUserData: { ...editUser.commonUserData, middleName: e.target.value },
                })
              }
              placeholder="Введите отчество: "
              value={editUser?.commonUserData?.middleName}
              name="middleName"
              type="text"
              isRequired
              handleRegister={() => register("middleName")}
            />
            <Input
              title="Фамилия: "
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  commonUserData: { ...editUser.commonUserData, surname: e.target.value },
                })
              }
              placeholder="Введите фамилию: "
              value={editUser?.commonUserData?.surname}
              name="surname"
              type="text"
              isRequired
              handleRegister={() => register("surname")}
            />
          </Line>
          <Input
            title="Город: "
            onChange={(e) =>
              setEditUser({
                ...editUser,
                commonUserData: { ...editUser.commonUserData, city: e.target.value },
              })
            }
            placeholder="Введите название города: "
            value={editUser?.commonUserData?.city}
            name="city"
            type="text"
            isRequired
            handleRegister={() => register("city")}
          />
          <div className={styles.hr} />
          <Columns
            leftWrapper={
              <div className={styles.wrapperFormContacts}>
                <Line alignBottom>
                  <Input
                    title="Контакт: "
                    onChange={(e) => setNewContactValue(e.target.value)}
                    placeholder="Введите контакт: "
                    value={newContactValue}
                    name="contacts"
                    type="text"
                  />
                  <div className={styles.wrapperSelect}>
                    <Select
                      stretch
                      onClick={() => setIsOpenTypeContact((prev) => !prev)}
                      placeholder="Выберите тип контакта: "
                      value={ReturnTitleContactWithValue(newContactType)}
                      icon={<ArrowYIcon />}
                      isOpen={isOpenTypeContact}
                      noBorderBottom={isOpenTypeContact}
                    />
                    <SelectList
                      stretch
                      isVisible={isOpenTypeContact}
                      handleClose={() => setIsOpenTypeContact(false)}
                      items={contactsTypeList}
                      // @ts-ignore
                      handleChange={setNewContactType}
                    />
                  </div>
                </Line>
                <Button
                  radius="little"
                  onClick={() => {
                    if (editUser) {
                      const contactsLength = editUser.commonUserData.contacts.length;
                      setEditUser({
                        ...editUser,
                        commonUserData: {
                          ...editUser.commonUserData,
                          contacts: [
                            ...editUser.commonUserData.contacts,
                            {
                              id: contactsLength + 1,
                              contact: newContactType || "",
                              type: newContactValue || "",
                              name: `${editUser.commonUserData.surname} ${editUser.commonUserData.name} ${editUser.commonUserData.middleName}`,
                            },
                          ],
                        },
                      });
                    }
                  }}
                >
                  Добавить
                </Button>
              </div>
            }
            rightWrapper={
              <ul className={styles.columnWrapper}>
                {editUser?.commonUserData.contacts.map((contact) => (
                  <li key={contact.name} className={styles.contact}>
                    {contact.contact} - {contact.name}
                  </li>
                ))}
              </ul>
            }
          />
          <div className={styles.hr} />
          <div className={styles.wrapperBlock}>
            <p className={styles.titleBlock}>Описание</p>
            <EditorComponent
              placeholder="Описание..."
              content={editUser?.commonUserData?.description}
              setContent={handleChangeDescription}
            />
          </div>
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
        </div>
      </WhiteWrapper>
      <WhiteWrapper smallBottomMargin>
        <Line>
          <Input
            title="Почта: "
            name="email"
            placeholder="Введите почту"
            onChange={(e) =>
              setEditUser({
                ...editUser,
                email: e.target.value,
              })
            }
            isRequired
            value={editUser?.email}
            type="text"
            handleRegister={() => register("email")}
          />
          <Input
            title="Пароль: "
            name="password"
            placeholder="Введите пароль"
            value={editUser?.password}
            isRequired
            type="text"
            onChange={(e) =>
              setEditUser({
                ...editUser,
                password: e.target.value,
              })
            }
            handleRegister={() => register("password")}
          />
        </Line>
      </WhiteWrapper>
      <Line>
        <div className={styles.leftWrapperBtns}>
          <Button radius="little" type="submit" textSize="medium">
            Сохранить изменения
          </Button>
          {isUserUpdated && (
            <Button
              radius="little"
              type="button"
              textSize="medium"
              theme="outline"
              onClick={resetEditUser}
            >
              Отмена
            </Button>
          )}
        </div>
        <div className={styles.rightWrapperBtns}>
          <Button radius="little" type="submit" textSize="medium" theme="red">
            Удалить аккаунт
          </Button>
        </div>
      </Line>
    </form>
  );
};
