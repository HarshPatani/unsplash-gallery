import React from "react";
import "./ImageCard.scss";
import moment from "moment/moment";

const ImageCard = ({ src, alt, name, url, date }) => {
  return (
    <>
      <div className="imageCard">
        <img src={src} alt={alt} loading="lazy" />
        <div className="imageCard__header">
          <h3>{name}</h3>
          <p>{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
