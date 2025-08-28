import { PAGES } from "@/config/pages.config";
import type { INavigation } from "@/shared/interface/navigation.interface";
import { House, ShoppingCart, User } from "lucide-react";

export const headerNavigation: INavigation[] = [
  {
    icon: House,
    name_en: "HOME",
    name_ru: "Главная",
    href: PAGES.HOME,
  },
  {
    icon: ShoppingCart,
    name_en: "STORE",
    name_ru: "Каталог",
    href: PAGES.PRODUCT_LIST,
  },
  {
    icon: User,
    name_en: "ABOUT ME",
    name_ru: "Обо мне",
    href: PAGES.ABOUT_US,
  },
];
