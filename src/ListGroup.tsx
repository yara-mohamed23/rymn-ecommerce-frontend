export default function ListGroup() {
  const items = ["Dresses", "Abayas", "Skirts", "Blazers", "Accessories"];
  const products = [
    { id: 1, name: "Silk Jacquard Dress", price: 2355 },
    { id: 2, name: "Linen Summer Abaya", price: 3200 },
    { id: 3, name: "Velvet Evening Blazer", price: 4800 },
  ];

  const cartItems = [
    { id: 101, title: "Silk Jacquard Dress", price: 5500, quantity: 1 },
    { id: 102, title: "Linen Summer Abaya", price: 3200, quantity: 2 },
    { id: 103, title: "Velvet Evening Blazer", price: 4800, quantity: 1 },
  ];

  const reviews = [
    { id: 1, text: "The Silk dress is amazing!", stars: 5 },
    { id: 2, text: "The fabric is too heavy for summer", stars: 2 },
    { id: 3, text: "Good quality but late delivery", stars: 4 },
  ];

  return (
    <>
      {/* items */}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id} {product.name} {product.price}
          </li>
        ))}
      </ul>

      {/* cartItems */}
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.id} {cartItem.title} {cartItem.price}
            {cartItem.quantity > 1 && (
              <span> you have {cartItem.quantity} peice</span>
            )}
            ,
          </li>
        ))}
      </ul>

      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.id} {cartItem.title} {cartItem.price}
            {cartItem.quantity > 1 ? (
              <span style={{ color: "red" }}>
                {" "}
                you have {cartItem.quantity} peice
              </span>
            ) : (
              cartItem.quantity
            )}
            ,
          </li>
        ))}
      </ul>

      {/* reviews */}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.id} {review.text} 
            {review.stars < 3 ? (<span style={{ color: "yellow" }}>Need review {review.stars} Stars</span>) :(review.stars)}
          </li>
        ))}
      </ul>
    </>
  );
}
