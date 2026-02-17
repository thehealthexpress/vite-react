export default function FoodCard({ food }) {
  return (
    <div className="card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>₹{food.price}</p>
      <button>Add</button>
    </div>
  );
}
