import React from "react";

function Register() {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register</h5>
          </div>
          <div className="modal-body">
            <form>
              <label>Full Name</label>
              <input type="text" name="fullName" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Password</label>
              <input type="password" name="password" />
              <label>Phone</label>
              <input type="number" name="phone" />
              <button type="button" class="btn btn-block yellow">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
