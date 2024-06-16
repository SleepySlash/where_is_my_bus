import About from "./Home/About";
import CarouselSection from "./Home/Carousel";
import Footer from "./Home/Footer";

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden" id="moreinfo">
      <About />
      <CarouselSection />
      <Footer />
    </div>
  );
};
export default Home;