import React, { useState, useEffect } from 'react';
import './Women.css';

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";

function Women() {

    const [{ apiData }, dispatch] = useStateValue();

  const [womenData, setWoMenData] = useState();

  useEffect(() => {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1002) {
          tempArray.push(element);
        }
      });

    setWoMenData(tempArray);
  }, [apiData]);


  return (
    <div>
      <Header />
      <Body data={womenData && womenData} />
      <Footer />
    </div>
  )
}

export default Women