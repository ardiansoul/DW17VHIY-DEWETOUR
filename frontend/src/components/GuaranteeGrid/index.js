import React from "react";
import GuaranteeCard from "./GuaranteeCard";
import { GuaranteeData } from "../../fakedatas/GuaranteeData";

function GuaranteeGrid() {
  const list = GuaranteeData.map((GuaranteeData, i) => (
    <GuaranteeCard
      key={i}
      title={GuaranteeData.title}
      image={GuaranteeData.image}
      desc={GuaranteeData.desc}
    />
  ));

  return (
    <div className="guaranteegrid d-flex justify-content-around">{list}</div>
  );
}

export default GuaranteeGrid;
