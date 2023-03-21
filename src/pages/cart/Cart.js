import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import WishlistCart from "../../components/wishlistcart/WishlistCart";
import './Cart.css';


function Cart() {
  return (
    <div>
      <Header />
      <WishlistCart />
      <Footer />
    </div>
  );
}

export default Cart;
