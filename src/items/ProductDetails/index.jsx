import "../../main.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [activities, setActivities] = useState([]);
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
    });
  }, [id]);

  return (
    <>
      <div className="container">
        {activities.map((item) => {
          return (
            <>
              <h1 className="main-fonts">{item.title}</h1>
              <div className="row pt-4 mt">
                <div className="col-6">
                  <ImageGallery items={item.imageUrls} />;
                </div>
                <div className="col-6">
                  <h2 className="main-fonts">INFO</h2>
                  <ul>
                    <li className="main-fonts">
                      <span className="fw-bold">ALAMAT</span>: Jl. Lodan Timur
                      No.7, RW.10, Ancol, Kota Jakarta Utara, DKI Jakarta
                    </li>
                    <li className="main-fonts">
                      <span className="fw-bold">Nomor telepon</span>: (021)
                      29222222
                    </li>
                    <li className="main-fonts">
                      <span className="fw-bold">Kode pos</span>: 14430
                    </li>
                    <li className="main-fonts">
                      <span className="fw-bold">Kategori</span>: Taman Hiburan
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="main-fonts">Rp.100.000</h2>
              <h3 className="main-fonts">Overview</h3>
              <ul>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque libero voluptas vel eos adipisci, perferendis,
                  molestiae reprehenderit dignissimos distinctio consectetur
                  odit voluptate consequuntur neque error! Totam velit mollitia
                  nostrum itaque!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque libero voluptas vel eos adipisci, perferendis,
                  molestiae reprehenderit dignissimos distinctio consectetur
                  odit voluptate consequuntur neque error! Totam velit mollitia
                  nostrum itaque!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque libero voluptas vel eos adipisci, perferendis,
                  molestiae reprehenderit dignissimos distinctio consectetur
                  odit voluptate consequuntur neque error! Totam velit mollitia
                  nostrum itaque!
                </li>
              </ul>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success">Book Now</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductDetails;
