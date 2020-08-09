import React from "react";

import TourCard from "./TourCard";
import { TourData } from "../../fakedatas/TourData";
import "./tourgrid.css";

function TourGrid() {
  const list = TourData.map((TourData, i) => (
    <TourCard
      key={i}
      id={TourData.id}
      img={TourData.img}
      alt={TourData.alt}
      capacity={TourData.capacity}
      title={TourData.title}
      price={TourData.price}
      location={TourData.location}
    />
  ));

  return <div className="tourgrid d-flex flex-wrap">{list}</div>;
}

export default TourGrid;
