import React, { useState } from "react";
import DropDownAdmin from "./DropDownAdmin";
import DropDownUser from "./DropDownUser";

function Dropdown() {
  const [isUser, setIsUser] = useState("user");

  return (
    <div className="dropdown-wrapper container">
      <ul className="dropdown-content">
        {isUser === "user" ? <DropDownUser /> : <DropDownAdmin />}
        <li>
          <img src="" alt="" />
          LogOut
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
