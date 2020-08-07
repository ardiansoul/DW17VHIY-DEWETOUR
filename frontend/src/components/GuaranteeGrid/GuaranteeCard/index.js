import React from "react";

import "./guaranteecard.css";

function GuaranteeCard({ title, image, desc }) {
  return (
    <div className="text-center col-3 mx-2 py-4 guaranteecard">
      <img src={image} className="image-card" alt="guaranteecard" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
}

export default GuaranteeCard;
