import { Link } from "react-router-dom";
import { useState } from "react";
import AddressModal from "./AddressModal";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const address = localStorage.getItem("address");

  return (
    <div className="navbar">
      <div>
        <h2>THE HEALTH EXPRESS</h2>
        <p onClick={() => setShow(true)} className="address">
          {address ? address : "Use Your Current Location"}
        </p>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/orders">My Orders</Link>
      </div>

      {show && <AddressModal close={() => setShow(false)} />}
    </div>
  );
}
