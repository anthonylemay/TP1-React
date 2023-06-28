import React from "react";
import "./CardTitle.css";

const CardTitle = (props) => {
  return <h2 className="card__title">{props.title}</h2>;
}; // ne pas oublier que si c'est actif, mettre en h1

export default CardTitle;
