import { useState, type ReactNode } from "react";
import { CurrencyContext } from "./CurrencyContext"

export const CurrencyProvider = ({children} : {children:ReactNode})=>{
	const [currency, setCurrency] = useState("EGP");
	return(
		<>
		<CurrencyContext.Provider value={{currency, setCurrency}}>
			{children}
		</CurrencyContext.Provider>
		</>
	)
}
