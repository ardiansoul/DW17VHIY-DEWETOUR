import React from "react";

import TourCard from "./TourCard";
import { TourData } from "../../fakedatas/TourData";
import "./tourgrid.css";

function TourGrid() {
  const list = TourData.map((TourData, i) => (
    <TourCard
      key={i}
      img={TourData.img}
      alt={TourData.alt}
      capacity={TourData.capacity}
      title={TourData.title}
      price={TourData.price}
      location={TourData.location}
    />
  ));

  return (
    <div className="tourgrid d-flex flex-wrap">
      <div className="col-12 my-3">
        <h3 className="text-center">Group Tour</h3>
      </div>
      {list}
    </div>
  );
}

export default TourGrid;
