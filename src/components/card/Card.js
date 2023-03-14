import React from 'react';
import './Card.css';
import VanHeusenGreenshirt from "../../assets/images/men/VanHeusenGreenshirt.jpg";
import cart from "../../assets/icons/cart.svg";
import wishlist from "../../assets/icons/wishlist.svg";

function Card() {
  return (
    <div>
        <div className="card">
      <div className="cardImg">
        <img src={VanHeusenGreenshirt} />
      </div>
      <div className="cardDesc">
        <p>Van Huesen</p>
      </div>
      <div className="cardBtnDiv">
        <button className="cardBtn">
          <img src={wishlist} />
        </button>
        <button className="cardBtn">
          <img src={cart} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Card