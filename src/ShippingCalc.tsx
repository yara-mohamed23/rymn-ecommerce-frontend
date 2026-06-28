import { useState, MouseEvent } from "react";

export default function ShippingCalc() {
  const [shippingCalc, setShippingCalc] = useState<number>(2233);

  // event handeler
  const handelClick = (event: MouseEvent) => console.log(event.currentTarget);
  return (
    <>
      <div style={{ margin: 50 }}>
        <h2 style={{ color: "blue" }} className="active" onClick={handelClick}>
          Total Price: {shippingCalc} EGP
        </h2>

        {shippingCalc > 500 ? (
          <p>Congrats! You have Free Shipping 🥳🎉</p>
        ) : (
          <p> Shipping fees: 50 EGP 🚚 </p>
        )}
      </div>
    </>
  );
}
