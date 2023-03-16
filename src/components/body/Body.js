import React from "react";
import "./Body.css";
import Card from '../card/Card';
import { useStateValue } from "../../redux/StateProvider";

function Body(props) {
  const [{ name, age }, dispatch] = useStateValue();
  return (
  <div className="body">
      {props.data &&
          props?.data.map((element, index, arr) => {
            return <Card data={element} index={index} />;
          })}
  </div>
  );
}

export default Body;
