import "../../main.css";
import pp from "../../assets/Ancol.jpg";

function ProfileItems() {
  return (
    <>
      <div className="container">
        <div>
          <div className="d-flex justify-content-center mb-4">
            <img
              src={pp}
              className="rounded-circle"
              width="300px"
              alt="example placeholder"
              height="300px"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
              <label
                className="form-label text-white m-1"
                htmlFor="customFile2"
              >
                Choose file
              </label>
              <input
                type="file"
                className="form-control d-none"
                id="customFile2"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="phoneNumber"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileItems;
