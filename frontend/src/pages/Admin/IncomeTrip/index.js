import React from "react";
import TourGrid from "../../../components/TourGrid";
import { Link } from "react-router-dom";

function IncomeTrip() {
  return (
    <>
      <div className="income-trip">
        <div className="income-header d-flex justify-content-between m-4">
          <h3>Income Trip</h3>
          <Link to="/admin/addtrip">
            <button className="btn yellow">Add Trip</button>
          </Link>
        </div>
        <TourGrid />
      </div>
    </>
  );
}

export default IncomeTrip;
