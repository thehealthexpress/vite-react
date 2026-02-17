import { useState } from "react";

export default function AddressModal({ close }) {
  const [address, setAddress] = useState("");

  const saveAddress = () => {
    localStorage.setItem("address", address);
    alert("Address Saved Successfully");
    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Enter Delivery Address</h3>
        <textarea
          placeholder="Full Address"
          onChange={e => setAddress(e.target.value)}
        />
        <button onClick={saveAddress}>Save</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}
