import React, { useState, useEffect } from 'react';
import './Women.css';

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";

function Women() {

    const [{ apiData, searchContext }, dispatch] = useStateValue();

  const [womenData, setWoMenData] = useState();

  function filterWomenData(apiData) {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1002) {
          tempArray.push(element);
        }
      });

    setWoMenData(tempArray);
  }

  useEffect(() => {
    filterWomenData(apiData);
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

      filterWomenData(tempArray);
    } else {
      filterWomenData(apiData);
    }
  }, [searchContext]);



  return (
    <div>
      <Header />
      <Body data={womenData && womenData} />
      <Footer />
    </div>
  );
}

export default Women