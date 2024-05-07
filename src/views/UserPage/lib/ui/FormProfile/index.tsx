import React, { FC } from "react";

import {
  CommonUserForm,
  EducationalEstablishmentsUserForm,
  EnterpriseUserForm,
} from "@/views/UserPage/lib/ui";

import { FormProfileProps } from "./types";

export const FormProfile: FC<FormProfileProps> = ({ role }) => {
  if (role === "enterprise") {
    return <EnterpriseUserForm />;
  }

  if (role === "educationalEstablishments") {
    return <EducationalEstablishmentsUserForm />;
  }

  return <CommonUserForm />;
};
