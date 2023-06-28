import React from "react";
import Image from "../Image/Image"
import CardTitle from "../CardTitle/CardTitle";
import CardBody from "../CardBody/CardBody";
import "./Card.css";

const Card = (props) => {
    const classNames = ["card"];
    if (props.className) classNames.push(props.className);

    return (
        <article className={classNames.join(" ")}>
          <Image
            src={props.ImgSrc}
            alt={props.ImgAlt}
            loading={props.ImgLoading}
            width={props.ImgWidth}
            height={props.ImgHeight}
          />
          <CardTitle title={props.title} />
          <CardBody ability={props.ability} />
        </article>
      );
};

export default Card;