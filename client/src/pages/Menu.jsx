import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

export default function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/food")
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div className="grid">
      {foods.map(food => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
}
