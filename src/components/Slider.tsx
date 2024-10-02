import React, { useState } from "react";
import Info from "./Info";

interface SliderItem {
  id: number;
  imgSrc: string;
  price: string;
  productName: string;
  description: string;
  brand: string;
  time: string;
  rating: number;
  quantity: number;
  stock: number;
  comments: number;
}

interface SliderProps {
  sliderData: SliderItem[];
}

const Slider: React.FC<SliderProps> = ({ sliderData }) => {
  const [activeItemId, setActiveItemId] = useState<number>(sliderData[0].id);
  const totalItems = sliderData.length;

  const activeItem = sliderData.find((item) => item.id === activeItemId);

  const goToPrevious = () => {
    const currentIndex = sliderData.findIndex(
      (item) => item.id === activeItemId
    );
    const newIndex = (currentIndex - 1 + totalItems) % totalItems;
    setActiveItemId(sliderData[newIndex].id);
  };

  const goToNext = () => {
    const currentIndex = sliderData.findIndex(
      (item) => item.id === activeItemId
    );
    const newIndex = (currentIndex + 1) % totalItems;
    setActiveItemId(sliderData[newIndex].id);
  };

  if (!activeItem) {
    return <div>No active item found</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-2 min-w-[880px]">
      <div className="flex items-center gap-2">
        <button
          onClick={goToPrevious}
          className="min-w-[40px] h-[30px] rounded-full grid place-items-center"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.96875 16.0312C9.85156 16.1484 9.69531 16.2266 9.5 16.2266C9.30469 16.2266 9.10938 16.1484 8.99219 16.0312L7.85938 14.8594C7.70312 14.7422 7.625 14.5859 7.625 14.3906C7.625 14.1953 7.70312 14 7.85938 13.8828L11.2578 10.4453L7.85938 7.00781C7.70312 6.89062 7.625 6.69531 7.625 6.5C7.625 6.30469 7.70312 6.14844 7.85938 6.03125L8.99219 4.85938C9.10938 4.74219 9.30469 4.66406 9.5 4.66406C9.69531 4.66406 9.85156 4.74219 9.96875 4.85938L15.0469 9.9375C15.2031 10.0938 15.2812 10.25 15.2812 10.4453C15.2812 10.6406 15.2031 10.7969 15.0469 10.9531L9.96875 16.0312ZM19.1094 10.4453C19.1094 8.88281 18.7578 7.4375 17.9766 6.14844C17.1953 4.82031 16.1797 3.80469 14.8516 3.02344C13.5625 2.24219 12.1172 1.89062 10.5547 1.89062C8.99219 1.89062 7.54688 2.24219 6.25781 3.02344C4.92969 3.80469 3.91406 4.82031 3.13281 6.14844C2.35156 7.4375 2 8.88281 2 10.4453C2 12.0078 2.35156 13.4531 3.13281 14.7422C3.91406 16.0703 4.92969 17.0859 6.25781 17.8672C7.54688 18.6484 8.99219 19 10.5547 19C12.1172 19 13.5625 18.6484 14.8516 17.8672C16.1797 17.0859 17.1953 16.0703 17.9766 14.7422C18.7578 13.4531 19.1094 12.0078 19.1094 10.4453Z"
              className="fill-default-950 dark:fill-default-300"
            />
          </svg>
        </button>

        <div className="flex justify-center">
          <img
            src={activeItem.imgSrc}
            alt="Product"
            className="w-[800px] max-h-[480px] object-cover rounded-lg"
          />
        </div>

        <button
          onClick={goToNext}
          className="min-w-[30px] h-[30px] rounded-full grid place-items-center"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1172 16.0312C12 16.1484 11.8047 16.2266 11.6094 16.2266C11.4141 16.2266 11.2578 16.1484 11.1406 16.0312L6.0625 10.9531C5.90625 10.7969 5.82812 10.6406 5.82812 10.4453C5.82812 10.25 5.90625 10.0938 6.0625 9.9375L11.1406 4.85938C11.2578 4.74219 11.4141 4.66406 11.6094 4.66406C11.8047 4.66406 12 4.74219 12.1172 4.85938L13.25 6.03125C13.4062 6.14844 13.4844 6.30469 13.4844 6.5C13.4844 6.69531 13.4062 6.89062 13.25 7.00781L9.85156 10.4453L13.25 13.8828C13.4062 14 13.4844 14.1953 13.4844 14.3906C13.4844 14.5859 13.4062 14.7422 13.25 14.8594L12.1172 16.0312ZM19.1094 10.4453C19.1094 8.88281 18.7578 7.4375 17.9766 6.14844C17.1953 4.82031 16.1797 3.80469 14.8516 3.02344C13.5625 2.24219 12.1172 1.89062 10.5547 1.89062C8.99219 1.89062 7.54688 2.24219 6.25781 3.02344C4.92969 3.80469 3.91406 4.82031 3.13281 6.14844C2.35156 7.4375 2 8.88281 2 10.4453C2 12.0078 2.35156 13.4531 3.13281 14.7422C3.91406 16.0703 4.92969 17.0859 6.25781 17.8672C7.54688 18.6484 8.99219 19 10.5547 19C12.1172 19 13.5625 18.6484 14.8516 17.8672C16.1797 17.0859 17.1953 16.0703 17.9766 14.7422C18.7578 13.4531 19.1094 12.0078 19.1094 10.4453Z"
              className="fill-default-950 dark:fill-default-300"
            />
          </svg>
        </button>
      </div>

      <div className="flex w-[800px] gap-10">
        <div className="flex flex-col w-6/12 justify-center items-start">
          <p className="w-full break-words whitespace-normal">
            {activeItem.productName}
          </p>
          <p className="flex text-lg  w-full justify-end break-words whitespace-normal">
            {activeItem.price} تومان
          </p>
          <p className="mt-4 text-sm  w-full break-words whitespace-normal line-clamp-3">
            {activeItem.description}
          </p>
        </div>

        <Info productId={activeItem.id} />
      </div>
    </div>
  );
};

export default Slider;
