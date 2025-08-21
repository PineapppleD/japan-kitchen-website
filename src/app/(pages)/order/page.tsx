import { OrderCard } from "@/app/components/layout/order/OrderCard";
import { OrderInfo } from "@/app/components/layout/order/OrderInfo";
import { PaymentForm } from "@/app/components/layout/order/PaymentForm";
import React from "react";

export default function OrderPage() {
  return (
      <div className="flex justify-between">
          <div>
            <OrderCard />
            <OrderInfo />
          </div>
          <PaymentForm />
      </div>
  );
}
