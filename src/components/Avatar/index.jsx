import "../../main.css";

import axios from "axios";
import { useState, useEffect } from "react";
import defaultpict from "../../assets/profileDefault.svg";

function Avatar() {
  const [user, setUser] = useState([]);
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/user`,
      headers: { apiKey: apiKey, Authorization: "Bearer " + isLogin },
    }).then(function (response) {
      setUser(response.data.data);
    });
  }, []);
  return (
    <>
      <div className="ms-auto">
        <a href={"/profile"}>
          <button className="btn btn-primary">
            {user.name}
            {!user.profilePictureUrl ? (
              <img
                src={defaultpict}
                className="ava-rounded ml-1"
                width={30}
                height={30}
                alt="Profile Picture"
              />
            ) : (
              <img
                src={user.profilePictureUrl}
                alt="ProfilePicture"
                className="ava-rounded ml-1"
                width={30}
                height={30}
              />
            )}
          </button>
        </a>
      </div>
    </>
  );
}

export default Avatar;
