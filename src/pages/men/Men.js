import Reac, {useState, useEffect} from 'react'
import './Men.css';
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";
function Men() {

  const [{ apiData, searchContext }, dispatch] = useStateValue();

  const [menData, setMenData] = useState();

  function filterMenData(apiData) {
    let tempArray = [];
    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1001) {
          tempArray.push(element);
        }
      });

    setMenData(tempArray);
  }

  useEffect(() => {
    filterMenData(apiData);
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

      filterMenData(tempArray);
    } else {
      filterMenData(apiData);
    }
  }, [searchContext]); 


  return (
    <div>
      <Header />
      <Body data={menData && menData} />
      <Footer />
    </div>
  );
}

export default Men