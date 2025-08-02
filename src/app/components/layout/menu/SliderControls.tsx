"use client";

import Image from "next/image";

type SliderControlsProps = {
  handlePrevBtn: () => void;
  handleNextBtn: () => void;
  totalPages: number;
  currentIndex: number;
};

export const SliderControls = ({
  handleNextBtn,
  handlePrevBtn,
  totalPages,
  currentIndex,
}: SliderControlsProps) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={handlePrevBtn}>
        <Image
          src={"/prev.svg"}
          width={16}
          height={28}
          alt="go to previous slide"
        />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const isActive = index === Math.floor(currentIndex / 6);
        return (
        <span key={index} 
              className={`w-5 h-1 rounded-[10px] ${isActive ? "bg-main-text" : 'bg-main-text/30'}`}
        >

        </span>)
      })}
      <button onClick={handleNextBtn}>
        <Image
          src={"/next.svg"}
          width={16}
          height={28}
          alt="go to next slide"
        />
      </button>
    </div>
  );
};
