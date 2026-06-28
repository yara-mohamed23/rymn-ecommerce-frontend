import { useState } from "react";

export default function QuantityCounter() {
  const [quantityCounter, setQuantityCounter] = useState<number>(1);

  function incQuantityCounter() {
	if (quantityCounter <= 9)
    setQuantityCounter(quantityCounter + 1);
  }
  function decQuantityCounter() {
	if (quantityCounter > 1)
    setQuantityCounter(quantityCounter - 1);
  }
  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
		  alignItems:"center",
          gap: "10px",
        }}
      >
        <button style={{padding :"5px"}} onClick={incQuantityCounter}>+</button>
        <h5>
          Quantity{" "}
          {quantityCounter}
        </h5>
        <button style={{padding :"5px"}} onClick={decQuantityCounter}>-</button>
      </div>
    </>
  );
}
