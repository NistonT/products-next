import type { LucideIcon } from "lucide-react";

export interface INavigation {
  icon: LucideIcon;
  name_en: string;
  name_ru: string;
  href: string;
  isAction?: boolean;
}
