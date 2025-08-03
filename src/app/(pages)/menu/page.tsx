import { FilterList } from "@/app/components/common/FilterList";
import { Slider } from "@/app/components/layout/menu/Slider";
import React from "react";
import ClientLayout from "./ClientLayout";
import { Filter } from "@/app/components/layout/menu/Filter";

export default async function Menu() {
  const data = await fetch("https://688b08f42a52cabb9f4fc059.mockapi.io/menu");
  const menuItems = await data.json();

  return (
    <ClientLayout>
      <div className="flex justify-center items-start w-full mx-auto gap-6">
        <Filter />
        <FilterList className="mb-20 w-fit mx-0" />
      </div>
      <Slider menuItems={menuItems} />
    </ClientLayout>
  );
}
