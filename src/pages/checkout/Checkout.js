import React from "react";
import "./Checkout.css";
import { useLocation, useParams } from "react-router-dom";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";
import CheckoutBody from "../../components/checkoutBody/CheckoutBody";

function Checkout() {
  const { state } = useLocation();
  const [{ cartArray }, dispatch] = useStateValue();


  return (
    <div>
      <Header />
      <CheckoutBody />
      <Footer />
    </div>
  );
}

export default Checkout;