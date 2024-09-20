import { useState } from "react";
import Carousel from "../components/Slider";
import carouselData from "../../mock-data/SliderItems";

const Home = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Carousel
        activeItemIndex={activeItemIndex}
        setActiveItemIndex={setActiveItemIndex}
        carouselData={carouselData}
      />
    </div>
  );
};
export default Home;
