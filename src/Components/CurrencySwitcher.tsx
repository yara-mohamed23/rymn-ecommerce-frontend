import { useCurrency } from "../context/useCurrency";

export const CurrencySwitcher = () => {
  const {currency, setCurrency} = useCurrency();
  return (
    <>
      <div
        style={{ padding: "10px", border: "1px solid #ccc", margin: "10px" }}
      >
        <p>
          العملة الحالية: <strong>{currency}</strong>
        </p>

        <button onClick={() => setCurrency("EGP")}>EGP</button>
        <button onClick={() => setCurrency("USD")}>USD</button>
        <button onClick={() => setCurrency("EUR")}>EUR</button>
      </div>
    </>
  );
};
