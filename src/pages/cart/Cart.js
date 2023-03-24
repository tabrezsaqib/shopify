import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import WishlistBody from "../../components/wishlistbody/WishlistBody";
import './Cart.css';


function Cart() {
  return (
    <div>
      <Header />
      <WishlistBody/>
      <Footer />
    </div>
  );
}

export default Cart;
