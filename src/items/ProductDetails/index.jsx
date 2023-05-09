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
            <img src={activities.imageUrls} alt="thumbnail" width={400} />
          </div>
          <div className="col-6">
            <h2 className="main-fonts">INFO</h2>
            <ul>
              <li className="main-fonts">
                <span className="fw-bold">ALAMAT</span>: {activities.address} ,{" "}
                {activities.province}, {activities.city}
              </li>
              <li className="main-fonts">
                <span className="fw-bold">Kategori</span>: {categories.name}
              </li>
            </ul>
          </div>
        </div>

        <h2 className="main-fonts">Rp.{activities.price}</h2>
        <h2 className="main-fonts">
          RATING : {activities.rating}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        </h2>
        <h3 className="main-fonts">Overview</h3>
        <p className="main-font">{activities.description}</p>
      </div>
    </>
  );
}

export default ProductDetails;
