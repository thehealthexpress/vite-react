export default function FoodCard({ food }) {

  const placeOrder = async () => {
    const userId = localStorage.getItem("userId");

    await fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        items: [food],
        total: food.price
      })
    });

    alert("Order Placed Successfully");
  };

  return (
    <div className="card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <h4>₹{food.price}</h4>
      <button onClick={placeOrder}>Order Now</button>
    </div>
  );
}
