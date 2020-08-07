import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
          </div>
          <div className="modal-body">
            <form action="" method="post">
              <label>Email</label>
              <input type="email" name="email" />
              <label>Password</label>
              <input type="password" name="password" />
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

export default Login;
