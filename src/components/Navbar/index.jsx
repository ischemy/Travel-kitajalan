import "../../main.css";
import logoKita from "../../assets/kitajalan.com.svg";
import CategoryItems from "../../items/CategoryItems";
import Login from "../Login";
import Avatar from "../Avatar";

function Navbar() {
  const isLogin = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <nav className="navbar navbar-expand-lg my-nav" data-aos="fade-down">
        <div className="container-fluid">
          <a className="navbar-brand" href={"/"}>
            <img src={logoKita} width="200px" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href={"/"}>
                Home
              </a>

              <CategoryItems />

              <a className="nav-link" href={"/activity"}>
                Activity
              </a>
            </div>
            {!isLogin ? (
              <div className="navbar-nav ms-auto">
                <a
                  className="nav-link btn btn-primary ms-auto"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  Login
                </a>
              </div>
            ) : (
              <Avatar />
            )}
          </div>
        </div>
      </nav>

      <Login />
    </>
  );
}

export default Navbar;
