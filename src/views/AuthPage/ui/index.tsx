import { useUnit } from "effector-react";
import React, { FC } from "react";

import { $authRole, handleRole } from "@/entities/auth/login/model";
import { LoginForm } from "@/entities/auth/login/ui";

export const AuthPage: FC = () => {
  const authRole = useUnit($authRole);

  return <LoginForm role={authRole} handleRole={handleRole} />;
};
