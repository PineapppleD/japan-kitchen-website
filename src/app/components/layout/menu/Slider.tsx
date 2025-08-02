"use client";

import React, { useEffect, useState, useMemo } from "react";
import { ItemCard } from "./ItemCard";
import { MenuItem } from "@/app/interfaces/MenuItem";
import { SliderControls } from "./SliderControls";
import { useMenu } from "@/app/context/MenuContext";

type SliderProps = {
  menuItems: MenuItem[];
};

export const Slider = ({ menuItems }: SliderProps) => {
  const { type } = useMenu();
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredMenu = useMemo(() => {
    if (type.toLowerCase() === "all") return menuItems;
    return menuItems.filter(
      (item) => item.type.toLowerCase() === type.toLowerCase()
    );
  }, [menuItems, type]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredMenu])

  const CARDS_FOR_PAGE = 6;
  const totalPages = Math.ceil(filteredMenu.length / CARDS_FOR_PAGE);
  const currentCards = filteredMenu.slice(
    currentIndex,
    currentIndex + CARDS_FOR_PAGE
  );

  const handlePrevBtn = () => {
    if (currentIndex < CARDS_FOR_PAGE - 1) return;
    setCurrentIndex((prev) => prev - CARDS_FOR_PAGE);
  };

  const handleNextBtn = () => {
    if (!filteredMenu[currentIndex + CARDS_FOR_PAGE]) return;
    setCurrentIndex((prev) => prev + CARDS_FOR_PAGE);
  };

  return (
    <div className="w-full overflow-hidden flex flex-col items-center gap-10 h-[1100px]">
      <div className="flex flex-wrap justify-center gap-10 transition-transform duration-300 ease-in-out w-full">
        {currentCards.map((item, index) => (
          <ItemCard
            className="self-start"
            key={index + item.name}
            item={item}
          />
        ))}
      </div>

      <SliderControls
        handleNextBtn={handleNextBtn}
        handlePrevBtn={handlePrevBtn}
        totalPages={totalPages}
        currentIndex={currentIndex}
      />
    </div>
  );
};
