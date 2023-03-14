import React from "react";
import "./Body.css";
import Card from '../card/Card';
import { useStateValue } from "../../redux/StateProvider";

function Body(props) {
  const [{ name, age }, dispatch] = useStateValue();
  return (
  <div className="body">
      {props.data}
        {name && name}
        {age && age}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
  </div>
  );
}

export default Body;
