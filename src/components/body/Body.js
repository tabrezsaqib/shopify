import React from "react";
import "./Body.css";
import Card from '../card/Card';

function Body(props) {
  return (
  <div className="body">
      {props.data}
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
