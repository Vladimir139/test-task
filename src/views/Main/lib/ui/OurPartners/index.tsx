import React, { FC } from "react";

import { logos } from "@/shared/lib/constants/logos";
import { LogoCarousel } from "@/shared/ui/molecules";

export const OurPartners: FC = () => (
  <LogoCarousel
    logos={logos}
    additionalText="Мы сотрудничаем с ведущими компаниями разных отраслей, чтобы обеспечить наилучшими возможностями наших пользователей"
  />
);
