import "../../main.css";

import axios from "axios";
import { useEffect, useState } from "react";

function PhotoItems() {
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
      <div className="container">
        <div>
          <div className="d-flex justify-content-center mb-4">
            <img
              src={user.profilePictureUrl}
              className="rounded-circle"
              width="300px"
              alt="example placeholder"
              height="300px"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
              <label
                className="form-label text-white m-1"
                htmlFor="customFile2"
              >
                Choose file
              </label>
              <input
                type="file"
                className="form-control d-none"
                id="customFile2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoItems;
