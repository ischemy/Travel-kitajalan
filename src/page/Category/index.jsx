import "../../main.css";
import SecondNavbar from "../../components/SecondNavbar";
import Footer from "../../components/Footer";
import CategoryDetail from "../../items/CategoryDetail";

function Category() {
  return (
    <>
    <div className="container-fluid">

      <SecondNavbar />
    </div>
      <div className="container">
        <CategoryDetail />
      </div>
      <Footer />
    </>
  );
}

export default Category;
