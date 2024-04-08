import { IProfession } from "./profession";

export interface ISphereOfActivity {
  id: number;
  name: string;
  transliterationName: string;
  icon: string;
  previewDesc: string;
  description: string; // редактор
  photos: string[];
  previewPhoto: string;
  tags: string[];
  // ----
  professions: IProfession[];
}
