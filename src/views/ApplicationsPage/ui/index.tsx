import React, { FC } from "react";

import { Gap } from "@/shared/ui/atoms";
import { ResponsesList } from "@/views/ApplicationsPage/lib/ui";
import { WhiteWrapper } from "@/views/EntityInfo/lib/ui";
import { NavigationUserPage } from "@/views/UserPage/lib/ui";

export const ApplicationsPage: FC = () => (
  <>
    <WhiteWrapper>
      <NavigationUserPage />
    </WhiteWrapper>
    <h3>Filters and sorted</h3>
    <ResponsesList />
    <Gap />
  </>
);
