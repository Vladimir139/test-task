import React, { FC, useState } from "react";

import { ArrowYIcon } from "@/shared/lib/icons";
import { Select } from "@/shared/ui/atoms";
import { SelectList } from "@/shared/ui/molecules";

import styles from "./styles.module.scss";

export const SelectRoleForm: FC<{
  role: "common" | "enterprise" | "educationalEstablishments";
  handleRole: (role: "common" | "enterprise" | "educationalEstablishments") => void;
}> = ({ role, handleRole }) => {
  const [isOpenRole, setIsOpenRole] = useState(false);

  let roleTitleFormat;

  if (role === "common") {
    roleTitleFormat = "Пользователь";
  } else if (role === "enterprise") {
    roleTitleFormat = "Компания";
  } else {
    roleTitleFormat = "Учебное заведение";
  }

  return (
    <div className={styles.wrapperSelect}>
      <Select
        onClick={() => setIsOpenRole((prev) => !prev)}
        placeholder="Выберите роль"
        value={roleTitleFormat}
        icon={<ArrowYIcon />}
        isOpen={isOpenRole}
        noBorderBottom={isOpenRole}
      />
      <SelectList
        isVisible={isOpenRole}
        handleClose={() => setIsOpenRole(false)}
        items={[
          { id: 1, value: "common", title: "Пользователь" },
          { id: 2, value: "enterprise", title: "Компания" },
          { id: 3, value: "educationalEstablishments", title: "Учебное заведение" },
        ]}
        // @ts-ignore
        handleChange={handleRole}
      />
    </div>
  );
};
