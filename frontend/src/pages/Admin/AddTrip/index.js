import React from "react";

function AddTrip() {
  return (
    <>
      <div className="card m-4 p-4">
        <form className="form-group" action="" method="post">
          <label>Title Trip</label>
          <input type="text" className="form-control" />
          <label>Country</label>
          <select className="form-control">
            <option value="">localhe</option>
          </select>
          <label>Accommodation</label>
          <input type="text" className="form-control" />
          <label>Transportation</label>
          <input type="text" className="form-control" />
          <label>Eat</label>
          <input type="text" className="form-control" />
          <label>Duratin</label>
          <input type="text" className="form-control" />
          <span>Day</span>
          <input type="text" className="form-control" />
          <span>Night</span>
          <label>Date Trip</label>
          <input type="text" className="form-control" />
          <label>Price</label>
          <input type="text" className="form-control" />
          <label>Quota</label>
          <input type="text" className="form-control" />
          <label>Description</label>
          <textarea name="" className="form-control"></textarea>
          <label>Image</label>
          <input type="file" className="form-control" />
          <button className="btn btn-block my-4">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddTrip;
