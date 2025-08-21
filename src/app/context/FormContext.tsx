"use client";

import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
  useMemo
} from "react";

type FormData = {
  name: string;
  city: string;
  street: string;
  house: string;
  phone: string;
  wishes: string;
};

type FormContextType = {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
};

const FormContext = createContext<FormContextType | null>(null);

export const useForm = () => {
  const formContext = useContext(FormContext);
  if (!formContext)
    throw new Error("formContext must be used within FormProvider");
  return formContext;
};

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    city: "",
    street: "",
    house: "",
    phone: "",
    wishes: "",
  });


  useEffect(() => {
    const data = localStorage.getItem('order-info');
    if (data) setFormData(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('order-info', JSON.stringify(formData));
  }, [formData])

  const value = useMemo(() => ({formData, setFormData}), [formData])
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}
