import Image from "next/image";
import { Heading } from "./Heading";

export const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo.svg"
        width={68}
        height={68}
        alt="logo image"
        className="w-[68px] 
                md:w-[50px] lg:w-[68px]"
      />
      <Heading
        className="text-4xl/[74%] 
                md:text-2xl lg:text-4xl/[74%] text-main-text"
      >
        Foxy
        <br /> burrow
      </Heading>
    </div>
  );
};
