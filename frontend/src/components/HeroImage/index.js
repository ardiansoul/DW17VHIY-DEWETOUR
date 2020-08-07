import React from "react";

import "./heroimage.css";

function HeroImage() {
  return (
    <div className="intro">
      <h1 className="Explore">Explore</h1>
      <p className="lead">your amazing ciry together</p>
      <form className="search container row" method="post">
        <label className="col-12">Find great places to holliday</label>
        <input type="text" name="search" className="col-10" />
        <button type="submit" className="col-2">
          Search
        </button>
      </form>
    </div>
  );
}

export default HeroImage;
