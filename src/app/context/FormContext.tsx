import { useContext, createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type FormData = {
    name: string;
    city: string;
    street: string;
    house: string;
    phone: string;
    wishes: string;
}

type FormContextType = {
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>
}

const FormContext = createContext<FormContextType | null>(null);

export const useForm = () => {
    const formContext = useContext(FormContext);
    if (!formContext) throw new Error("formContext must be used within FormProvider");
    return formContext;
}

export function FormProvider({children}: {children: ReactNode}) {
    const [formData, setFormData] = useState<FormData>({name: "",
    city: "",
    street: "",
    house: "",
    phone: "",
    wishes: "",});

    return (
        <FormContext.Provider value={{formData, setFormData}}>
            {children}
        </FormContext.Provider>
    )
}