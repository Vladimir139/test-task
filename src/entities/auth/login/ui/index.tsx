import React, { FC } from "react";

import { SelectRoleForm } from "@/entities/auth/login/lib/ui";

import styles from "./styles.module.scss";

export const LoginForm: FC<{
  role: "common" | "enterprise" | "educationalEstablishments";
  handleRole: (role: "common" | "enterprise" | "educationalEstablishments") => void;
}> = ({ role, handleRole }) => {
  if (role === "enterprise") {
    return (
      <form>
        <SelectRoleForm role={role} handleRole={handleRole} />
        form enterprise
      </form>
    );
  }

  if (role === "educationalEstablishments") {
    return (
      <form>
        <SelectRoleForm role={role} handleRole={handleRole} />
        form educationalEstablishments
      </form>
    );
  }

  return (
    <form>
      <SelectRoleForm role={role} handleRole={handleRole} />
      form common
    </form>
  );
};
