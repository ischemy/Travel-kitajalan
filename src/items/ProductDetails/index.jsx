import "../../main.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [activities, setActivities] = useState([]);
  const [categories, setCategories] = useState([]);
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const { id } = useParams();
  console.log(activities);
  console.log(id);

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/activity/${id}`,
      headers: { apiKey: apiKey },
    }).then(function (response) {
      console.log(response.data.data);
      setActivities(response.data.data);
      setCategories(response.data.data.category);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h1 className="main-fonts">{activities.title}</h1>
        <div className="row pt-4 mt">
          <div className="col-6">
            <img src={activities.imageUrls} alt="thumbnail" width={500} />
          </div>
          <div className="col-6">
            <h2 className="main-fonts">INFO</h2>
            <ul>
              <li className="main-fonts">
                <span className="fw-bold">ALAMAT</span>: {activities.address} ,{" "}
                {activities.province}, {activities.city}
              </li>
              <li className="main-fonts">
                <span className="fw-bold">Nomor telepon</span>: (021) 29222222
              </li>
              <li className="main-fonts">
                <span className="fw-bold">Kode pos</span>: 14430
              </li>
              <li className="main-fonts">
                <span className="fw-bold">Kategori</span>: {categories.name}
              </li>
            </ul>
          </div>
        </div>

        <h2 className="main-fonts">Rp.{activities.price}</h2>
        <h2 className="main-fonts">RATING : {activities.rating}</h2>
        <h3 className="main-fonts">Overview</h3>
        <p className="main-font">{activities.description}</p>

        <div className="d-flex justify-content-center">
          <button className="btn btn-success">Book Now</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
