import React from 'react';
import "../Image/Image.css";

const Image = (props) => {
  return (
    <img
      className="img"
      src={props.src}
      alt={props.alt}
      loading={props.loading}
      width={props.width}
      height={props.height}
    />
  )
}

export default Image;
