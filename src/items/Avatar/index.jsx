import "../../main.css";
import pp from "../../assets/Ancol.jpg";

function Avatar() {
  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <div className="navbar-nav ms-auto">
        <div className="dropdown ">
          <a
            className=""
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              className="ava-rounded"
              src={pp}
              alt="ProfilePict"
              width={30}
              height={30}
            />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href={"/profile"}>
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Avatar;
