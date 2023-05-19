import "../../main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import defaultpict from "../../assets/profileDefault.svg";
function FormItems() {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pictureEdit, setPictureEdit] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
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
    setImages(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          name: name,
          email: email,
          profilePictureUrl: imageUrl.url,
          phoneNumber: phoneNum,
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
        window.location.reload();
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
    <div className="container">
      <div className="d-flex justify-content-center mb-4">
        {!pictureEdit ? (
          <img
            src={defaultpict}
            className="rounded-circle"
            width="300px"
            alt="Profile Picture"
            height="300px"
          />
        ) : (
          <img
            src={imagePreview}
            className="rounded-circle"
            width="300px"
            alt="Profile Picture"
            height="300px"
          />
        )}
      </div>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
              <div className="form-group">
                <label htmlFor="picture">Choose File</label>
                <input
                  accept="image/*"
                  type="file"
                  id="picture"
                  name="picture"
                  className="form-control d-none"
                  placeholder="Profile Picture URL"
                  // value={pictureEdit}
                  onChange={(e) => handleImage(e)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mt-3">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormItems;
