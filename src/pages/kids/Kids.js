import React, {useEffect, useState} from 'react';
import './Kids.css';

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";


function Kids() {
  const [{ apiData, searchContext }, dispatch] = useStateValue();

  const [kidData, setkidData] = useState();

  function filterKidsData(apiData) {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1003) {
          tempArray.push(element);
        }
      });

    setkidData(tempArray);
  }

  useEffect(() => {
    filterKidsData(apiData);
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

      filterKidsData(tempArray);
    } else {
      filterKidsData(apiData);
    }
  }, [searchContext]);

  return (
    <div>
      <Header />
      <Body data={kidData && kidData} />
      <Footer />
    </div>
  )
}

export default Kids