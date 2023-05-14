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
      url: `${URL_API}/api/v1/categories/`,
      headers: { apiKey: apiKey },
    }).then(function (response) {
      setCategory(response.data.data);
    });
  }, []);

  return (
    <>
      <div className="dropdown">
        <button
          className="btn main-font dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {category.map((item) => {
            return (
              <>
                <li>
                  <a
                    className="dropdown-item main-font"
                    href={`/category/${item.id}`}
                  >
                    {item.name}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CategoryItems;
