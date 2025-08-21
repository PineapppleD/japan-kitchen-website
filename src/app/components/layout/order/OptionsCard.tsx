"use client";

import { useState } from "react";

export const OptionsCard = ({ options }: { options: string[] }) => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="bg-secondary-bg rounded-[44px] px-3 w-[290px] text-main-text flex items-center justify-center py-4">
      {options.map((option, index) => {
        return (
          <div
            onClick={() => setActive(index + 1)}
            className={`capitalize ${
              active === index + 1 ? "border-1 border-main-text rounded-[44px]" : null
            } w-[150px] py-2 text-center cursor-pointer`}
            key={index}
          >
            {option}
          </div>
        )
      })}
    </div>
  );
};
