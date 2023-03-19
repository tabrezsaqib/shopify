import React, {useEffect, useState} from 'react';
import "./Beauty.css";

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";

function Beauty() {
  const [{ apiData }, dispatch] = useStateValue();

  const [beautyData, setBeautyData] = useState();
  useEffect(() => {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1004) {
          tempArray.push(element);
        }
      });

    setBeautyData(tempArray);
  }, [apiData]);

  return (
    <div>
      <Header />
      <Body data={beautyData && beautyData} />
      <Footer />
    </div>
  )
}

export default Beauty