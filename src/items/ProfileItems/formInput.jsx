import "../../main.css";
import axios from "axios";
import { useEffect, useState } from "react";

function FormItems() {
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/user`,
      headers: { apiKey: apiKey, Authorization: "Bearer " + isLogin },
    }).then(function (response) {
      console.log(response.data.data);
      setUser(response.data.data);
    });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={user.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={user.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Change Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhoneNum">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={user.phoneNumber}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormItems;
