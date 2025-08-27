import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  icon: LucideIcon;
  name_en: string;
  name_ru: string;
};

export const LinkNavigation = ({ href, icon: Icon, name_en, name_ru }: Props) => {
  return (
    <Link key={href} href={href} className="flex items-center gap-0.5">
      <div>
        <Icon />
      </div>
      <div>{name_en || name_ru}</div>
    </Link>
  );
};
