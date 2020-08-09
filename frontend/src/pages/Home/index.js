import React from "react";

import HeroImage from "../../components/HeroImage";
import GuaranteeGrid from "../../components/GuaranteeGrid";
import TourGrid from "../../components/TourGrid";

function Home() {
  return (
    <div>
      <HeroImage />
      <GuaranteeGrid />
      <div className="col-12 my-3">
        <h3 className="text-center">Group Tour</h3>
      </div>
      <TourGrid />
    </div>
  );
}

export default Home;
