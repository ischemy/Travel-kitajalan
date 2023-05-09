import "../../main.css";
import pp from "../../assets/Ancol.jpg";


function PhotoItems() {
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
      </div>
    </>
  );
}

export default PhotoItems;
