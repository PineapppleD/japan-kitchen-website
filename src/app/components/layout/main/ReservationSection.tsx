import Image from "next/image";
import { ReservationForm } from "./ReservationForm";
import { Heading } from "../../ui/Heading";

export const ReservationSection = () => {
  return (
    <div className="w-full xl:px-[105px] px-[20px] mt-[39px]">
        <Heading className="text-main-text text-8xl font-bonzai mb-10">Reserve a table</Heading>
        <div className="flex justify-between flex-col md:flex-row items-center">
            <ReservationForm />
            <Image 
                src="/reservationimage.png" 
                alt="japanese girl welcoming" 
                className="w-[30%] aspect-4/6"
                width={500}
                height={750}
            />
        </div>
    </div>
  )
}
