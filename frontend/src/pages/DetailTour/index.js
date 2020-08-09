import React from "react";
import bigImage from "../../images/bigImage.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import InfoTrip from "../../components/InfoTrip";
import { TourData } from "../../fakedatas/TourData";

function DetailTour() {
  // const { id } = match.params;
  // const data = TourData.find(
  //   (TourData) => TourData.id === { id }
  //   // (TourData) => { TourData.id == { id };}
  // );
  const data = TourData.find(() => {
    return TourData.id === 2;
  });

  console.log(data);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title m-2">6D/4N Fun Tassie Vacation + Sidney</h1>
        {/* <h1 className="card-title m-2">{data.title}</h1> */}
        <span className="mx-2">Australia</span>
        <div className="card-image row">
          <img src={bigImage} alt="funTassie" className="col-12 mt-4" />
          <div className="other-image d-flex algin-items-center col-12 py-4">
            <img src={image1} alt="funTassie" className="col-4" />
            <img src={image2} alt="funTassie" className="col-4" />
            <img src={image3} alt="funTassie" className="col-4" />
          </div>
        </div>
        <InfoTrip />
        <div className="col-12">
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
            mauris vestibulum, iaculis justo commodo, lacinia leo. Suspendisse
            semper nisi vel enim elementum finibus non egestas ex. Vivamus et
            nisl arcu. Aenean sodales euismod euismod. Integer nisl metus,
            blandit vel massa quis, rhoncus dictum magna. Praesent ut cursus
            nisi. Vestibulum semper orci ac sapien consequat, vehicula
            sollicitudin tellus vehicula. Proin non elementum mauris. Curabitur
            vel felis nisi. Aliquam a massa euismod, dictum nibh sed, ornare
            ante. Nam ultrices imperdiet sem, eu sollicitudin ante ullamcorper
            vel. Vestibulum scelerisque ac mi eu tincidunt.
          </p>
        </div>
        <div className="col-12 d-flex row justify-content-between">
          <div className="increment-wrapper d-flex justify-content-between col-12">
            <h4>IDR. 12,398,000/Person</h4>
            <div className="increment">
              <button className="minus">-</button>
              <input type="number" name="person" className="increment-number" />
              <button className="plus">-</button>
            </div>
          </div>
          <div className="total col-12 d-flex justify-content-between">
            <h4>Total:</h4>
            <h4>IDR. 12,398,000</h4>
          </div>
          <button className="d-flex align-items-end">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default DetailTour;
