import { MenuItem } from "@/app/interfaces/MenuItem";
import { ItemCard } from "./ItemCard";

type SliderDataProps = {
    currentCards: MenuItem[];
}

export const SliderData = ({currentCards}: SliderDataProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 transition-transform duration-300 ease-in-out w-full">
      {currentCards.map((item, index) => {
        return (
          <ItemCard
            className="self-start"
            key={index + item.name}
            item={item}
          />
        );
      })}
    </div>
  );
};
