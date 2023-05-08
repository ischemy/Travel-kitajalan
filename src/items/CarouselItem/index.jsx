import "../../main.css";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

function CarouselItem() {
  const URL_API = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
  const [promo, setPromo] = useState([{}]);
  const [active, setActive] = useState([]);
  const [intervalz, setIntervalz] = useState(100);
  const onChange = (index, item) => {
    setIntervalz(item.props["data-interval"]);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/api/v1/promos`,
      headers: { apiKey: apiKey },
    }).then(function (response) {
      console.log(response.data.data);
      setPromo(response.data.data);
    });
  }, []);

  return (
    <>
      <Carousel
        onChange={onChange}
        autoPlay
        infiniteLoop={true}
        swipeable={false}
        interval={intervalz}
        showThumbs={false}
      >
        {promo.map((item) => {
          return (
            <>
              <div
                key={item.id}
                onClick={() => setActive(item)}
                className={`list-item ${active == item && "active"}`}
              >
                <img src={item.imageUrl} height={700} />
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselItem;
