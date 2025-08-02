import React from "react";
import { Button } from "../../common/Button";
import Slider from "./Slider";
import { Heading } from "../../ui/Heading";
import { FilterList } from "../../common/FilterList";

export const HitsSection = () => {
  return (
    <div className="w-full xl:px-[105px] px-[20px] mt-[77px]">
      {/* <!-- Hits Heading --> */}
      <Heading className="text-[50px] text-center md:text-start md:text-[60px] lg:text-[77px] text-main-text font-bonzai">
        Hits of Japanese cuisine
      </Heading>

      {/* <!-- Hits Filters --> */}
      <div className="mt-[30px] mb-[50px] md:mb-[70px] lg:mt-[50px] lg:mb-[98px]">
        <FilterList />
      </div>
      <div className="relative flex flex-col items-center">
        <Slider />
        <Button className="mt-10">See all minis</Button>
      </div>
    </div>
  );
};
