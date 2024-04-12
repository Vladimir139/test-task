import React, { FC } from "react";

import { Gap } from "@/shared/ui/atoms";
import {
  CareerGuidance,
  CompaniesNeedEmployee,
  OurPartners,
  Preview,
  WhoAreWe,
} from "@/views/Main/lib/ui";

export const HomePage: FC = () => (
  <>
    <Gap />
    <Gap />
    <Preview />
    <Gap />
    <CompaniesNeedEmployee />
    <Gap />
    <CareerGuidance />
    <Gap />
    <WhoAreWe />
    <Gap />
    <OurPartners />
    <Gap />
    <Gap />
  </>
);
