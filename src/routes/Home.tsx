import { useState } from "react";
import Carousel from "../components/Slider";

const carouselData = [
  {
    imgSrc: "./public/images/iphone-14-pro-model-unselect-gallery-1-202209.png",
    price: "10,000",
    brand: "Apple",
    time: "چند لحظه پیش",
    rating: 5,
    quantity: 5,
    available: 10,
    productName: "Apple Iphone 16",
    reviews: 10,
    description:
      "آیفون 16 دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. تراشه A18 Bionic و سیستم دوربین دو گانه.",
  },
  {
    imgSrc: "./public/images/iphone1.png",
    price: "10,000",
    brand: "Apple",
    time: "چند لحظه پیش",
    rating: 5,
    quantity: 52,
    available: 10,
    productName: "Apple Iphone 16",
    reviews: 10,
    description:
      "آیفون 16 دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. تراشه A18 Bionic و سیستم دوربین دو گانه.",
  },
  {
    imgSrc: "./public/images/iphone15.png",
    price: "10,000",
    brand: "Apple",
    time: "چند لحظه پیش",
    rating: 5,
    quantity: 52,
    available: 10,
    productName: "Apple Iphone 16",
    reviews: 10,
    description:
      "آیفون 16 دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. تراشه A18 Bionic و سیستم دوربین دو گانه.",
  },
  {
    imgSrc: "./public/images/iphone2.png",
    price: "10,000",
    brand: "Apple",
    time: "چند لحظه پیش",
    rating: 5,
    quantity: 52,
    available: 10,
    productName: "Apple Iphone 16",
    reviews: 10,
    description:
      "آیفون 16 دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. تراشه A18 Bionic و سیستم دوربین دو گانه.",
  },
];

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
