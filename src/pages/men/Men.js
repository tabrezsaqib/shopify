import Reac, {useState, useEffect} from 'react'
import './Men.css';
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";
function Men() {

  const [{ apiData }, dispatch] = useStateValue();

  const [menData, setMenData] = useState();

  useEffect(() => {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1001) {
          tempArray.push(element);
        }
      });

    setMenData(tempArray);
  }, [apiData]);


  return (
    <div>
      <Header />
      <Body data={menData && menData} />
      <Footer />
    </div>
  )
}

export default Men