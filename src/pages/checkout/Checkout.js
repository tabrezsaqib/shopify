import React from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const Navigate = useNavigate();


  return (
    <div className="CheckOutParentDiv">
      <form
        onSubmit={() => {
          alert("Thank you for shopping with us");
          Navigate("/");
        }}
      >
        <ul className="formContainer">
          <li>
            <label>First Name</label>
            <input type="text" />
          </li>
          <li>
            <label>Last Name</label>
            <input type="text" />
          </li>
          <li>
            <label>Email</label>
            <input type="email" />
          </li>
          <li>
            <label>Phone Number</label>
            <input type="number" />
          </li>
          <li>
            <label>Address</label>
            <input type="text" />
          </li>
          <li>
            <label>Mode Of Payment</label>
            <select>
              <option disabled selected>
                Payment
              </option>
              <option>Cash on Delivery</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>UPI</option>
            </select>
          </li>

          <li>
            <button>Submit</button>
          </li>
          <li>
            <button
              onClick={() => {
                Navigate("/");
              }}
            >
              Cancel
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Checkout;