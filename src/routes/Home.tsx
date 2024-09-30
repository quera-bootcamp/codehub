import Slider from "../components/Slider";
import productInfo from "../../mock-data/ProductInfo";
import WelcomeHomePage from "../components/WelcomeHomePage.tsx";

const Home = () => {
    return (
        <>
            <div className="flex justify-between">
                <WelcomeHomePage/>
                <Slider sliderData={productInfo}/>
            </div>
            {/* مجصولات ویژه */}
        </>
    );
};
export default Home;
