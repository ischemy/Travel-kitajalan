import "../../main.css";
import axios from "axios";
import { useEffect, useState } from "react";

function FormItems() {
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/user`,
      headers: { apiKey: apiKey, Authorization: "Bearer " + isLogin },
    }).then(function (response) {
      console.log(response.data.data);
      setUser(response.data.data);
      setName(response.data.data.name);
      setEmail(response.data.data.email);
      setPhoneNum(response.data.data.phoneNumber);
    });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    axios({
      method: "post",
      url: `${URL_API}/api/v1/upload-image`,
      data: formData,
      headers: {
        apiKey: apiKey,
        Authorization: "Bearer " + isLogin,
      },
    }).then(function (response) {
      console.log(response);
      axios({
        method: "post",
        url: `${URL_API}/api/v1/update-profile`,
        data: {
          name: name,
          email: email,
          phoneNumber: phoneNum,
          profilePictureUrl: response.data.url,
        },
        headers: { apiKey: apiKey, Authorization: "Bearer " + isLogin },
      }).then(function (response2) {
        console.log(response2);
        window.location.reload();
      });
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneNumChange = (e) => {
    setPhoneNum(e.target.value);
  };
  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <img
          src={user.profilePictureUrl}
          className="rounded-circle"
          width="300px"
          alt="Profile Picture"
          height="300px"
        />
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-primary btn-rounded">
          <label className="form-label text-white m-1" htmlFor="customFile2">
            Choose file
          </label>
          <input
            type="file"
            className="form-control d-none"
            id="customFile2"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhoneNum">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={phoneNum}
              onChange={handlePhoneNumChange}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormItems;
