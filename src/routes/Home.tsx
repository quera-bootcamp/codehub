import Slider from "../components/Slider";
import productInfo from "../../mock-data/ProductInfo";

const Home = () => {
  return (
    <>
      <div className="flex justify-between">
        {/*TO DO: Card home page*/}
        <div></div>
        <Slider sliderData={productInfo} />
      </div>
      {/* مجصولات ویژه */}
    </>
  );
};
export default Home;
