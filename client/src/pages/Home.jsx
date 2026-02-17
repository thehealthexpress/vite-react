import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>THE HEALTH EXPRESS</h1>
      <p>Bistro Style Healthy Food Delivery</p>
      <Link to="/menu">
        <button className="primary-btn">Explore Menu</button>
      </Link>
    </div>
  );
}
