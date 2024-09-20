import { useState } from "react";
import Slider from "../components/Slider";
import sliderData from "../../mock-data/SliderItems";

const Home = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Slider
        activeItemIndex={activeItemIndex}
        setActiveItemIndex={setActiveItemIndex}
        sliderData={sliderData}
      />
    </div>
  );
};
export default Home;
