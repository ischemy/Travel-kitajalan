import "../../main.css";
import axios from "axios";
import { useEffect, useState } from "react";
function FormItems() {
  const [user, setUser] = useState(null);
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [pictureEdit, setPictureEdit] = useState("");
  const [numberEdit, setNumberEdit] = useState("");
  const [images, setImages] = useState();
  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    axios
      .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setNameEdit(response.data.data.name);
        setEmailEdit(response.data.data.email);
        setPictureEdit(response.data.data.profilePictureUrl);
        setNumberEdit(response.data.data.phoneNumber);
        setImagePreview(response.data.data.profilePictureUrl);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleImage = (e) => {
    setImages(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let imageUrl = {
      url: pictureEdit,
    };

    if (images) {
      const formData = new FormData();
      formData.append("image", images);
      await axios
        .post(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
          formData,
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `Bearer ${isLogin}`,
            },
          }
        )
        .then((response) => {
          imageUrl = response.data;
          console.log(response.data);
        });
    }

    // await uploadImage();
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile",
        {
          name: nameEdit,
          email: emailEdit,
          profilePictureUrl: imageUrl.url,
          phoneNumber: numberEdit,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then((response1) => {
        console.log(response1.data);
        alert("Update Data Succes!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error Update Data. Try Again!.");
      });
  };
  if (!isLogin) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className="edit-account">
      <div className="container">
        <h1>Edit Account Detail</h1>
        <div className="profile-picture">
          <p>Profil Picture</p>
          <img src={imagePreview} alt="Profile" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={nameEdit}
              onChange={(event) => setNameEdit(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailEdit}
              onChange={(event) => setEmailEdit(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="picture">Profile Picture</label>
            <input
              accept="image/*"
              type="file"
              id="picture"
              name="picture"
              placeholder="Profile Picture URL"
              // value={pictureEdit}
              onChange={(e) => handleImage(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Profile Phone Number"
              value={numberEdit}
              onChange={(event) => setNumberEdit(event.target.value)}
            />
          </div>

          <button type="submit">Save Changes</button>
        </form>
        {/* <AllUser /> */}
      </div>
    </div>
  );
}

export default FormItems;

import "../../main.css";
import axios from "axios";
import { useEffect, useState } from "react";

function FormItems() {
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const isLogin = JSON.parse(localStorage.getItem("token"));

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [pictureEdit, setPictureEdit] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/user`,
      headers: { apiKey: apiKey, Authorization: "Bearer " + isLogin },
    })
      .then(function (response) {
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setPictureEdit(response.data.data.profilePictureUrl);
        setPhoneNum(response.data.data.phoneNumber);
        setImagePreview(response.data.data.profilePictureUrl);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    let imageUrl = {
      url: pictureEdit,
    };
    if (image) {
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
        imageUrl = response.data;
        console.log(response.data);
      });
    }
    axios({
      method: "post",
      url: `${URL_API}/api/v1/update-profile`,
      data: {
        name: name,
        email: email,
        phoneNumber: phoneNum,
        profilePictureUrl: imageUrl.url,
      },
      headers: { apiKey: apiKey, Authorization: "Bearer " + isLogin },
    }).then(function (response2) {
      console.log(response2.data);
      alert("Update Data Succes!");
      window.location.reload();
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

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <img
          src={imagePreview}
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
            accept="image/*"
            type="file"
            className="form-control d-none"
            id="customFile2"
            onChange={(e) => handleImage(e)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <form onSubmit={handleEdit}>
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

