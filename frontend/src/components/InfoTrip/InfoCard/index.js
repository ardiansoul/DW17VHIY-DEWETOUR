import React from "react";

function InfoCard({ head, title, image }) {
  return (
    <div className="infocard container row col-2">
      <span className="info-title col-12">{head}</span>
      <span className="col-3">
        <img src={image} alt={title} />
      </span>
      <h6 className="info-desc col-9">{title}</h6>
    </div>
  );
}

export default InfoCard;
