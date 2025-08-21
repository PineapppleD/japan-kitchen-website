import { BasketCardList } from "@/app/components/layout/basket/BasketCardList";
import { OrderForm } from "@/app/components/layout/basket/OrderForm";
import { FormProvider } from "@/app/context/FormContext";
import React from "react";

export default async function Basket() {
  return (
    <div className="w-full flex justify-between items-start">
      <BasketCardList />
      <FormProvider>
        <OrderForm />
      </FormProvider>
    </div>
  );
}
