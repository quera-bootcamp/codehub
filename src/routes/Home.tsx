import {useState} from "react";
import Slider from "../components/Slider";
import sliderData from "../../mock-data/SliderItems";

const Home = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    return (
        <>
            <div className="flex justify-between">


                {/*TO DO: Card home page*/}
                <div>
                </div>
                <Slider
                    activeItemIndex={activeItemIndex}
                    setActiveItemIndex={setActiveItemIndex}
                    sliderData={sliderData}
                />

            </div>
            {/* مجصولات ویژه */}
        </>
    );
};
export default Home;
