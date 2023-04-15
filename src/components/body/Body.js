import React from "react";
import "./Body.css";
import Card from '../card/Card';

function Body(props) {
  return (
  <>
      <div className="body">
        <div className="cardData">
          {props.data &&
              props?.data.map((element, index, arr) => {
                return <Card data={element} index={index} key={index} />;
              })}
        </div>
      </div>
  </>
  );
}

export default Body;
