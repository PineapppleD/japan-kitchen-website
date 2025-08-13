"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

type MenuContextType = {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within MenuProvider");
  return context;
};

export function MenuProvider({ children }: { children: ReactNode }) {
  const [type, setType] = useState<string>("all");

  return (
    <MenuContext.Provider value={{ type, setType }}>
      {children}
    </MenuContext.Provider>
  );
}
