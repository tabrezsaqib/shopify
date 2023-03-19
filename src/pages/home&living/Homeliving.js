import React, { useState, useEffect } from 'react';
import "./Homeliving.css";

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";

function Homeliving() {
  const [{ apiData }, dispatch] = useStateValue();

  const [HomeData, setHomeData] = useState();

  useEffect(() => {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1005) {
          console.log("eeeeeeeeee", element);
          tempArray.push(element);
        }
      });

    setHomeData(tempArray);
  }, [apiData]);

  return (
    <div>
      <Header />
      <Body data={HomeData && HomeData} />
      <Footer />
    </div>
  )
}

export default Homeliving