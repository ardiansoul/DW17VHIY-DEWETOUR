import React from "react";
import InfoCard from "./InfoCard";
import { InfoTrips } from "../../fakedatas/InfoTrip";

function InfoTrip() {
  const list = InfoTrips.map((InfoTrip, i) => (
    <InfoCard
      head={InfoTrip.head}
      title={InfoTrip.title}
      image={InfoTrip.image}
    />
  ));
  return (
    <>
      <h5>Information Trip</h5>

      <div className="InfoTrip d-flex align-items-center justify-content-around">
        {list}
      </div>
    </>
  );
}

export default InfoTrip;
