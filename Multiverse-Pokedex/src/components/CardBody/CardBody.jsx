import React from "react";
import "./CardBody.css";
import Image from "../Image/Image";

const CardBody = (props) => {
  return (
    <div className="card__body">
      <div className="ability">
        <Image
          src={props.SkillImgSrc}
          alt={props.SkillImgAlt}
          loading={props.SkillImgLoading}
          width={props.SkillImgWidth}
          height={props.SkillImgHeight}
        />
        <span className="attack">{props.ability}</span>
      </div>
    </div>
  );
};

export default CardBody;
