import { ReactNode } from "react";

import { ILogo } from "@/shared/lib/types";

export interface LogoCarouselProps {
  logos: ILogo[];
  additionalText?: string | ReactNode;
}
