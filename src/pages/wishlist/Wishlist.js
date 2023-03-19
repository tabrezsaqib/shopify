import React from "react";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";

function Wishlist() {
  const [{ apiData }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <Body data={apiData} />
      <Footer />
    </div>
  );
}

export default Wishlist;
