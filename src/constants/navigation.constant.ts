import { PAGES } from "@/config/pages.config";
import type { INavigation } from "@/shared/interface/navigation.interface";
import { House, ShoppingCart, User } from "lucide-react";

export const headerNavigation: INavigation[] = [
  {
    icon: House,
    name_en: "Home",
    name_ru: "Главная",
    href: PAGES.HOME,
  },
  {
    icon: ShoppingCart,
    name_en: "ProductList",
    name_ru: "Товары",
    href: PAGES.PRODUCT_LIST,
  },
  {
    icon: User,
    name_en: "AboutUs",
    name_ru: "О нас",
    href: PAGES.ABOUT_US,
  },
];
