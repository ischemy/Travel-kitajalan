import "../../main.css";

function MustLogin() {
  return (
    <>
      <div className="d-flex justify-content-center mt-6">
        <h1 className="main-font">You Have To Login First</h1>
      </div>
      <div className="d-flex justify-content-center mt-6">
        <a href={"/"}>
          <button className="btn btn-danger">Go Back</button>
        </a>
      </div>
    </>
  );
}

export default MustLogin;
