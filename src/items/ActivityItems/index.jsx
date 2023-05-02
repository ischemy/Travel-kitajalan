import "../../main.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ActivityItems() {
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const [activities, setActivities] = useState([{}]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/activities`,
      headers: { apiKey: apiKey },
    }).then(function (response) {
      console.log(response.data.data);
      setActivities(response.data.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {activities.map((item) => {
            return (
              <>
                <div className="col-3" data-aos="fade-up">
                  <div className="card border-none" width="18rem">
                    <div className="card-body">
                      <a href={"/detail"}>
                        <img
                          src={item.imageUrls}
                          alt="content-photo"
                          className="card-img-top"
                        />
                        <h5 className="card-title mt-3 main-fonts">
                          {item.title}
                        </h5>
                        <p className="main-fonts">{item.description}</p>
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

export default ActivityItems;
