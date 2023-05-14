import axios from "axios";
import "../../main.css";
import { useState } from "react";
import Register from "../Register";

function Login() {
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${URL_API}/api/v1/login`,
      data: {
        email: email,
        password: password,
      },
      headers: { apiKey: apiKey },
    }).then(function (response) {
      localStorage.setItem("token", JSON.stringify(response.data.token));

      window.location.reload();
    });
  }
  return (
    <>
      {/* MODAL */}
      <div>
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                      {"We'll never share your email with anyone else."}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => handleLogin(e)}
                  >
                    Login
                  </button>
                </form>
              </div>
              {/* REGISTER */}
              <div className="modal-footer">
                <p>{"Don't have an account?"}</p>
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <Register />
      </div>
    </>
  );
}

export default Login;
