import { createContext } from "react";

export interface CurrencyContextProps {
  currency: string;
  setCurrency: (curr: string) => void;
}

export const CurrencyContext = createContext<CurrencyContextProps |undefined>(undefined);