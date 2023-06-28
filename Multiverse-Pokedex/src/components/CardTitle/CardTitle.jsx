import React from "react";
import "./CardTitle.css";

const CardTitle = (props) => {
  return <h2 className="card__title">{props.title}</h2>;
};

export default CardTitle;
