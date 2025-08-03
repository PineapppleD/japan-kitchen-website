import { MenuItem } from "@/app/interfaces/MenuItem";
import Image from "next/image";
import { BasketCounter } from "./BasketCounter";

type BasketCardProps = {
  menuItem: MenuItem;
};

export const BasketCard = ({ menuItem }: BasketCardProps) => {
  const { image_url, price_usd, name, description, kcal, weight_grams } =
    menuItem;

  return (
    <div className="w-[700px] pl-10 pr-8 py-6 rounded-[50px] bg-secondary-bg flex items-center gap-16">
      <Image
        src={image_url}
        width={130}
        height={100}
        alt={description}
        className="rounded-3xl w-[130px] h-[100px] object-cover"
      />

      <div className="w-[80%]">
        <div className="text-main-text flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold w-[230px]">{name}</h1>
          <p
          >
            {kcal} kcal
            <span className="mx-1 inline-block w-[6px] h-[6px] rounded-full bg-main-text"></span>
            {weight_grams} grams
          </p>
          <p className="text-2xl">${price_usd}</p>
        </div>

        <div className="flex items-center justify-between">
          <BasketCounter />
          <button className="cursor-pointer">
            <Image
              src={"/trash.svg"}
              width={23}
              height={28}
              alt="remove from cart"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
