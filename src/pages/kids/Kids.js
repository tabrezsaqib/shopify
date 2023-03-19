import React, {useEffect, useState} from 'react';
import './Kids.css';

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";


function Kids() {
  const [{ apiData }, dispatch] = useStateValue();

  const [kidData, setkidData] = useState();

  useEffect(() => {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1003) {
          tempArray.push(element);
        }
      });

    setkidData(tempArray);
  }, [apiData]);

  return (
    <div>
      <Header />
      <Body data={kidData && kidData} />
      <Footer />
    </div>
  )
}

export default Kids