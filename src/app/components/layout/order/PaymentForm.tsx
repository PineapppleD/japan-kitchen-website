import React from "react";
import { OptionsCard } from "./OptionsCard";
import { Button } from "../../common/Button";
import { CreditCard } from "lucide-react";

export const PaymentForm = () => {
  return (
    <div className="text-main-text">
      <h1>Payment</h1>
      <div className="flex gap-4">
        <OptionsCard options={["Cash", "By Card"]} />
        <OptionsCard options={["Delivery", "Pickup"]} />
      </div>
      <div className="mt-20">
        <h1>Add a card</h1>
        <div className="flex items-center w-full relative">
          <CreditCard className="absolute left-10" width={20} />
          <input
            className="w-full py-3 pl-20 rounded-[74px] bg-secondary-bg"
            type="text"
            placeholder="Card number"
          />
        </div>
        <div className="w-full flex justify-between mt-4">
          <input type="text" placeholder="Validity" className="w-[45%] py-3 pl-10 rounded-[74px] bg-secondary-bg focus:ouline-none focus:border-none"/>
          <input type="text" placeholder="CVV/CVC" className="w-[45%] py-3 pl-10 rounded-[74px] bg-secondary-bg focus:ouline-none focus:border-none"/>
        </div>
        <Button className="w-full mt-10">Link a card</Button>
      </div>
    </div>
  );
};
