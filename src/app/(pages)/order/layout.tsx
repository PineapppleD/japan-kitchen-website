"use client";

import { FormProvider } from "@/app/context/FormContext";

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <FormProvider>{children}</FormProvider>;
}
