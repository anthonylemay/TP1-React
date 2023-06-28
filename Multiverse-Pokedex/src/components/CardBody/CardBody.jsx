import React from "react";
import "./CardBody.css";

const CardBody = (props) => {
  return (
    <div className="card__body">
      <p>{props.ability}</p>
    </div>
  );
};

export default CardBody;
