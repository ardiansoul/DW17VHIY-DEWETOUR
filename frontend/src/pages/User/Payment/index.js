import React from "react";

function Payment() {
  return (
    <>
      <div className="card  payment-wrapper">
        {/* <div className="card-content"> */}
        <div className="payment-header d-flex justify-content-between">
          <img src="" alt="logo" />
          <div className="booking">
            <h3>Booking</h3>
            <p>
              Saturday,<span>12 juny 2020</span>
            </p>
          </div>
        </div>
        <div className="trip-detail col-10 d-flex">
          <div className="col-5">
            <h4>6D/4N Fun Tassie Vacation</h4>
            <span>Australia</span>

            <span className="pending">Waiting Payment</span>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-2">
                <h4>Date Trip</h4>
                <p>26 August 2020</p>
              </div>
              <div className="col-2">
                <h4>Duration</h4>
                <p>6 Day 4 Night</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <h4>Accommodation</h4>
                <p>Hotel 4 Night</p>
              </div>
              <div className="col-2">
                <h4>Transportation</h4>
                <p>Qatar Airways</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src="" alt="" />
            <span>upload payment proof</span>
          </div>
        </div>
        <table className="col-10">
          <thead>
            <th>No</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Phone</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>Radif Ganteng</td>
            <td>Male</td>
            <td>083896833112</td>
          </tbody>
        </table>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Payment;
