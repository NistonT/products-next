import { headerNavigation } from "@/constants/navigation.constant";
import { useMemo } from "react";
import { LinkNavigation } from "./Link";

export const Navigation = () => {
  const navigation = useMemo(() => {
    return headerNavigation.map((link) => (
      <LinkNavigation key={link.href} href={link.href} icon={link.icon} name_en={link.name_en} name_ru={link.name_ru} isActive={link.isAction} />
    ));
  }, []);

  return <div className="flex items-center gap-2.5">{navigation}</div>;
};
