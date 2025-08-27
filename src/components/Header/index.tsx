import { headerNavigation } from "@/constants/navigation.constant";
import { Apple } from "lucide-react";
import { useMemo } from "react";
import { LinkNavigation } from "./Link";

export const Header = () => {
  const navigation = useMemo(() => {
    return headerNavigation.map((link) => (
      <LinkNavigation key={link.href} href={link.href} icon={link.icon} name_en={link.name_en} name_ru={link.name_ru} />
    ));
  }, []);

  return (
    <header className="flex gap-4">
      <div className="flex text-2xl items-center gap-1">
        <div className="font-manrope font-bold">Product</div>
        <div>
          <Apple />
        </div>
      </div>
      <div className="flex items-center gap-2">{navigation}</div>
      <div>Поиск</div>
      <div>Избранное</div>
      <div>Корзина</div>
    </header>
  );
};
