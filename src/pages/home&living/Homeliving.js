import React, { useState, useEffect } from 'react';
import "./Homeliving.css";

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";

function Homeliving() {
  const [{ apiData, searchContext }, dispatch] = useStateValue();

  const [HomeData, setHomeData] = useState();

  function filterHomeLiving(apiData) {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1005) {
          tempArray.push(element);
        }
      });

    setHomeData(tempArray);
  }

  useEffect(() => {
    filterHomeLiving(apiData);
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

      filterHomeLiving(tempArray);
    } else {
      filterHomeLiving(apiData);
    }
  }, [searchContext]);

  return (
    <div>
      <Header />
      <Body data={HomeData && HomeData} />
      <Footer />
    </div>
  )
}

export default Homeliving