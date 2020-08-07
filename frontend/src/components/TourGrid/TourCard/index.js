import React from "react";
import "./tourcard.css";

function TourCard({ img, alt, title, price, location, capacity }) {
  return (
    <div className="card m-3">
      <span className="card-span">{capacity}</span>
      <img className="img-top-card" src={img} alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="card-text">{price}</p>
        <p className="card-text">{location}</p>
      </div>
    </div>
  );
}

export default TourCard;
