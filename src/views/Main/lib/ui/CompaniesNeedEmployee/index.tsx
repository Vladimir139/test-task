import React, { FC } from "react";

import { logos } from "@/shared/lib/constants/logos";
import { LogoCarousel } from "@/shared/ui/molecules";

export const CompaniesNeedEmployee: FC = () => <LogoCarousel logos={logos} />;
