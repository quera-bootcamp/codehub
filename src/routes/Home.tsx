import {useState} from "react";
import Slider from "../components/Slider";
import sliderData from "../../mock-data/SliderItems";
import Button2 from "../components/button2.tsx";
import ProductCard from "../components/ProductCard.tsx";

const Home = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    return (
        <>
            <div className="flex justify-between">
                {/*TO DO: Card home page*/}
                <div>
                <ProductCard />
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
