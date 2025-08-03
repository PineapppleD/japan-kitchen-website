"use client";

import { FilterCard } from "../ui/FilterCard";
import { useMenu } from "@/app/context/MenuContext";

const filterList = [
  { name: "All" },
  { name: "Ramen" },
  { name: "Rolls" },
  { name: "Salads" },
  { name: "Beverages" },
  { name: "Sets" },
];

export const FilterList = ({ className }: { className?: string }) => {
  const { type, setType } = useMenu();

  return (
    <ul className={`flex gap-6 justify-center flex-wrap ${className}`}>
      {filterList.map((filter, index) => (
        <FilterCard
          key={index}
          isActive={type === filter.name}
          onClick={() => {
            setType(filter.name);
          }}
        >
          {filter.name}
        </FilterCard>
      ))}
    </ul>
  );
};
