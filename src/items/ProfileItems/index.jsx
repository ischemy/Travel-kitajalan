import "../../main.css";
import FormItems from "./formInput";
import PhotoItems from "./photo";
import { useNavigate } from "react-router-dom";

function ProfileItems() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <div className="container">
        <PhotoItems />
        <FormItems />
        <a onClick={handleLogout}>
          <button className="btn btn-danger">Logout</button>
        </a>
      </div>
    </>
  );
}

export default ProfileItems;
