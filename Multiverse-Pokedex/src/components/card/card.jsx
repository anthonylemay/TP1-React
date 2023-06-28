import React from "react";
import Image from "../Image/Image"
import CardTitle from "../CardTitle/CardTitle";
import CardBody from "../CardBody/CardBody";
import "./Card.css";

const Card = (props) => {
    const classNames = ["card"];
    if (props.className) classNames.push(props.className);
    if (props.value === props.active) {
      classNames.push("active");
    }
    const onMouseEnter = () => {
      props.onMouseEnter(props.value);
    };

    const onMouseLeave = () => {
      props.onMouseLeave(props.value);
    };

    const cardstyle = {};
    if (props.color) {
      cardstyle.backgroundColor = props.color;
    }

    return (
        <div style={cardstyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classNames.join(" ")}>
          <Image
            src={props.ImgSrc}
            alt={props.ImgAlt}
            loading={props.ImgLoading}
            width={props.ImgWidth}
            height={props.ImgHeight}
          />
          <CardTitle title={props.title} />
          {props.value === props.active &&  <CardBody
          SkillImgSrc={props.SkillImgSrc}
          SkillImgAlt={props.SkillImgAlt}
          SkillImgLoading={props.SkillImgLoading}
          SkillImgWidth={props.SkillImgWidth}
          SkillImgHeight={props.SkillImgHeight}
          ability={props.ability}
          />}
        </div>
      );
};

export default Card;