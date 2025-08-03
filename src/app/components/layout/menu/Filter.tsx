import Image from "next/image";
import React from "react";
import { FilterCard } from "../../ui/FilterCard";

export const Filter = () => {
  return (
    <FilterCard className="flex items-center gap-2">
      <p>Filters</p>
      <Image src={"/filtericon.svg"} alt="filters" width={20} height={20} />
    </FilterCard>
  );
};
