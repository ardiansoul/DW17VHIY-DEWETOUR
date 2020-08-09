import React from "react";
import "./login.css";

function Login({ handleLogin }) {
  return (
    <div className="modal-xl">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
          </div>
          <div className="modal-body">
            <form action="" method="post" className="form-group">
              <label>Email</label>
              <input type="email" name="email" className="form-control" />
              <label>Password</label>
              <input type="password" name="password" className="form-control" />
              <button
                type="button"
                onClick={() => {
                  handleLogin(true);
                }}
                className="yellow my-2 btn btn-block"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
