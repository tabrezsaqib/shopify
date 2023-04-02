import React, { useState, useEffect } from "react";
import "./Beauty.css";

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";

function Beauty() {
  const [{ apiData, searchContext }, dispatch] = useStateValue();

  const [beautyData, setBeautyData] = useState();

  function fiterBeautyData(apiData) {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1004) {
          tempArray.push(element);
        }
      });

    setBeautyData(tempArray);
  }

  useEffect(() => {
    fiterBeautyData(apiData);
  }, [apiData]);

  useEffect(() => {
    const temp = searchContext && searchContext.length - 1;
    let tempArray = [];
    if (searchContext[temp]) {
      apiData &&
        apiData.map((element) => {
          if (
            element?.brand
              .toLowerCase()
              .includes(searchContext[temp].toLowerCase())
          ) {
            tempArray.push(element);
          }
        });

      fiterBeautyData(tempArray);
    } else {
      fiterBeautyData(apiData);
    }
  }, [searchContext]);

  return (
    <div>
      <Header />
      <Body data={beautyData && beautyData} />
      <Footer />
    </div>
  );
}

export default Beauty;