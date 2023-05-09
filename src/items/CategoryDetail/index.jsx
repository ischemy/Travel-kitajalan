import "../../main.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CategoryDetail() {
  const [category, setCategory] = useState([]);
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/activities-by-category/${id}`,
      headers: { apiKey: apiKey },
    }).then(function (response) {
      setCategory(response.data.data);
    });
  }, [id]);

  return (
    <>
      
        <div className="row mt-3">
          {category.map((item) => {
            return (
              <>
                <div className="col-3" data-aos="fade-up">
                  <div className="card border-none" width="18rem">
                    <div className="card-body">
                      <a href={`/detail/${item.id}`}>
                        <img
                          src={item.imageUrls}
                          alt="content-photo"
                          className="card-img-top"
                          height={250}
                          width={300}
                        />
                        <h5 className="card-title mt-3 main-fonts">
                          {item.title}
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      
    </>
  );
}

export default CategoryDetail;
