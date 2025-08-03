"use client";

import Image from "next/image";
import React, { useState } from "react";

export const BasketCounter = () => {
  const [counter, setCounter] = useState<number>(1);

  return (
    <div className="w-[200px] px-4 py-2 rounded-2xl flex items-center gap-10 border-1 border-main-text">
      <button className="cursor-pointer" onClick={() => setCounter(prev => prev - 1)}>
        <Image src={"/basketminus.svg"} width={30} height={30} alt="decrease" />
      </button>
      <span className="text-4xl text-main-text">{counter}</span>
      <button className="cursor-pointer" onClick={() => setCounter(prev => prev + 1)}>
        <Image src={"/basketplus.svg"} width={30} height={30} alt="increase" />
      </button>
    </div>
  );
};
