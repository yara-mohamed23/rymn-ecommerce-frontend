import { useState } from "react";

interface ClothingProductProps {
  //اى حد ينادى الكومبوننت دة لازم يبعت معاه الداتا دى اجبارى
  title: string;
  price: number;
  hasDiscount: boolean;
  color?: 'red'|'blue'|'black';
}

export default function ClothingProduct(props: ClothingProductProps) {
  const [details, setDetails] = useState<boolean>(false);

  function updateDetails() {
    setDetails(!details);
  }
  return (
    <>
      <h3>{props.title}</h3>
      <h5>{props.price}</h5>
      <h5>{props.hasDiscount && "discount 50%"}</h5>
      <h5>{props.color}</h5>

      <div style={{ padding: "20px" }}>
        <button onClick={updateDetails}>
          {details ? "Show Less" : "Show More"}
        </button>
      </div>
      <div style={{ padding: "7px" }}>
        {details && (
          <p>
            هذا الفستان مصنوع من الحرير الطبيعي الناعم (Silk Jacquard) ومناسب
            جداً للمناسبات السعيدة والمظهر الأنيق.
          </p>
        )}
      </div>
    </>
  );
}
