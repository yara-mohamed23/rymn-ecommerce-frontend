import { useContext } from "react"
import { CurrencyContext } from "./CurrencyContext"

export const useCurrency = ()=>{
	const currency = useContext(CurrencyContext);

	if(!currency){
		throw new Error("useCurrency must be used within currencyProvider")
	}
	return currency;
}