import Button from "@/components/ui/Button";
import Image from "next/image";

export const Main = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 relative">
        <Image src={"/product.png"} fill alt={"product"} className="object-cover" />
      </div>
      <div className="w-1/2">
        <div className="relative top-1/2 transform -translate-y-1/2 flex flex-col gap-20 p-5">
          <h1 className="font-manrope font-extrabold text-9xl cursor-default select-none border-8 text-white bg-black border-black rounded-4xl text-center shadow-2xl">
            ЛУЧШИЕ ТОВАРЫ
          </h1>
          <div className="border-b-8 border-black rounded-4xl" />
          <Button className="text-4xl w-full h-full rounded-4xl py-5 shadow-2xl">Перейти</Button>
        </div>
      </div>
    </div>
  );
};
