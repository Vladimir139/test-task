import { useUnit } from "effector-react";
import React, { FC } from "react";

import { $user } from "@/entities/user/model";
import { Button, Gap, Input, Line, WhiteWrapper } from "@/shared/ui/atoms";
import { UploadListFiles } from "@/shared/ui/molecules/UploadListFiles";
import { FormProfile, NavigationUserPage } from "@/views/UserPage/lib/ui";
import { CardsListProfile } from "@/views/UserPage/lib/ui/CardsList";

import styles from "../lib/ui/EnterpriseUserForm/styles.module.scss";

export const UserPage: FC = () => {
  const user = useUnit($user);

  console.log("user", user);

  return (
    <>
      <WhiteWrapper>
        <NavigationUserPage />
      </WhiteWrapper>
      <FormProfile role={user?.role || "common"} />
      {user?.role !== "common" && (
        <WhiteWrapper smallBottomMargin>
          <CardsListProfile />
        </WhiteWrapper>
      )}
      {user?.role !== "common" && (
        <WhiteWrapper smallBottomMargin>
          <UploadListFiles />
        </WhiteWrapper>
      )}
      <Gap />
    </>
  );
};
