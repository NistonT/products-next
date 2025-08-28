import { Heart, Search, ShoppingCart, Sun } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="flex justify-between items-center absolute z-10 w-full bg-white shadow-xl p-2 mx-auto">
      <div className="flex items-center gap-5">
        {/* Логотип */}
        <Logo />

        {/* Навигация */}
        <Navigation />
      </div>
      <div className="flex items-center gap-2.5">
        <div className="flex items-center">
          <Input placeholder="Найти товар" className="border-r-0 rounded-r-none" />{" "}
          <div className="rounded-md border h-9 text-base border-l-0 rounded-l-none relative pr-3">
            <Search className="relative top-1/2 transform -translate-y-1/2 w-5" />
          </div>
        </div>
        <div>
          <Button>
            <Heart />
          </Button>
        </div>
        <div>
          <Button>
            <ShoppingCart />
          </Button>
        </div>
        <div>
          <Button>
            <Sun />
          </Button>
        </div>
        <div>
          <Button>En</Button>
        </div>
      </div>
    </header>
  );
};
