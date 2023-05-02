import "../../main.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CategoryItems() {
  const [category, setCategory] = useState([]);
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/categories`,
      headers: { apiKey: apiKey },
    }).then(function (response) {
      console.log(response.data.data);
      setCategory(response.data.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {category.map((items) => {
            return (
              <>
                <div className="col-3" data-aos="fade-up">
                  <div className="card border-none" width="18rem">
                    <div className="card-body">
                      <a href={"/detail"}>
                        <img
                          src={items.imageUrl}
                          alt="content-photo"
                          className="card-img-top"
                        />
                        <h5 className="card-title mt-3 main-fonts">
                          {items.name}
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryItems;
