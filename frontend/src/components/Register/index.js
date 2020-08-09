import React from "react";

function Register({ handleLogin }) {
  return (
    <div className="modal-xl">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register</h5>
          </div>
          <div className="modal-body">
            <form className="form-group" action="/" method="post">
              <label>Full Name</label>
              <input type="text" name="fullName" className="form-control" />
              <label>Email</label>
              <input type="email" name="email" className="form-control" />
              <label>Password</label>
              <input type="password" name="password" className="form-control" />
              <label>Phone</label>
              <input type="number" name="phone" className="form-control" />
              <button
                type="button"
                onClick={() => {
                  handleLogin(true);
                }}
                className="btn btn-block yellow"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
