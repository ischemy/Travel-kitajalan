import "../../main.css";
import FormItems from "./formInput";

import PhotoItems from "./photo";

function ProfileItems() {
  return (
    <>
      <div className="container">
        <PhotoItems />
        <FormItems />
      </div>
    </>
  );
}

export default ProfileItems;
