import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CartBody from "../../components/cartbody/CartBody";
import './Cart.css';


function Cart() {
  return (
    <div>
      <Header />
      <CartBody/>
      <Footer />
    </div>
  );
}

export default Cart;
