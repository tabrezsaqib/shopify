import React from "react";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Body data="Home" />
      <Footer />
    </div>
  );
}

export default Home;
