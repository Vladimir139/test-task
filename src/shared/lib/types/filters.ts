export interface IFilter {
  id: number;
  name: string;
  value: string;
  isChecked: boolean;
}

export interface FiltersProps {
  title: string;
  type: "checkbox" | "radio";
  filters: IFilter[];
  isOpen: boolean;
}
