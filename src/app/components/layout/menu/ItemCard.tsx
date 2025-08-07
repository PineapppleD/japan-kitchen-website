// "use client";

import { MenuItem } from "@/app/interfaces/MenuItem";
import Image from "next/image";
import { Button } from "./Button";
import { addItemToCart, getCartItemsCount } from "@/app/lib/menuApi";
import { useMenu } from "@/app/context/MenuContext";

type ItemCardProps = {
  item: MenuItem;
  className?: string;
};

export const ItemCard = ({ item, className }: ItemCardProps) => {
  const { setCartItemsCount } = useMenu();

  const handleClick = async () => {
    addItemToCart(item.id);
    const { count } = await getCartItemsCount();
    setCartItemsCount(count ?? 0);
  };

  return (
    <div
      className={` flex flex-col items-center rounded-tl-[10%] rounded-br-[10%] bg-secondary-bg
                        px-[16px] py-[12px] w-[400px] text-center
                        md:rounded-tl-[10%] md:rounded-br-[10%] md:px-[15px] md:py-[12px]
                        lg:rounded-tl-[15%] lg:rounded-br-[15%] lg:px-[20px] lg:py-[18px]
                        xl:rounded-tl-[20%] xl:rounded-br-[20%] xl:px-[26px] xl:py-[16px]
                        2xl:rounded-tl-[25%] 2xl:rounded-br-[25%] 2xl:px-[34px] 2xl:py-[20px] ${className}`}
    >
      <Image
        src={item.image_url}
        alt={item.name}
        className="w-[170px] h-[170px] object-cover mx-auto rounded-2xl"
        width={230}
        height={230}
      />
      <h3 className="text-main-text font-bold text-[16px] md:text-[18px] lg:text-[24px] 2xl:text-[28px] font-alegreya py-5 h-[100px]">
        {item.name}
      </h3>
      <p className="text-main-text md:text-[12px] lg:text-[14px] 2xl:text-[18px] font-alegreya mb-8 h-[50px]">
        {item.description}
      </p>

      <p className="text-main-text">
        {item.kcal} kcal
        <span className="mx-1 inline-block w-[6px] h-[6px] rounded-full bg-main-text"></span>
        {item.weight_grams} grams
      </p>

      <Button onclick={handleClick} price={item.price_usd} />
    </div>
  );
};
