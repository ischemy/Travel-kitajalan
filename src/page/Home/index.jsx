import "../../main.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarouselItem from "../../items/CarouselItem";
import FeaturedItem from "../../items/FeaturedItem";

function Home() {
  return (
    <>
      <Navbar />
      <CarouselItem />
      <FeaturedItem />
      <Footer />
    </>
  );
}

export default Home;
