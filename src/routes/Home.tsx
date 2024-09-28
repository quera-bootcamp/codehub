import Slider from "../components/Slider";
import productInfo from "../../mock-data/ProductInfo.tsx";
import ProductCard from "../components/ProductCard.tsx";

const Home = () => {
  return (
    <>
      <div className="flex justify-between">
        {/*TO DO: Card home page*/}
        <div>
          <ProductCard />
        </div>
        <Slider sliderData={productInfo} />
      </div>
    </>
  );
};
export default Home;
