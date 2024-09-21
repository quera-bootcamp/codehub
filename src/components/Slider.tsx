import React from "react";

// Define the type for the Slider item
interface SliderlItem {
    imgSrc: string;
    price: string;
    brand: string;
    time: string;
    rating: number;
    quantity: number;
    available: number;
    reviews: number;
    description: string;
    productName: string;
}

// Define the props interface for the Slider component
interface SliderProps {
    activeItemIndex: number;
    setActiveItemIndex: React.Dispatch<React.SetStateAction<number>>;
    sliderData: SliderlItem[];
}

const Slider: React.FC<SliderProps> = ({
                                           activeItemIndex,
                                           setActiveItemIndex,
                                           sliderData,
                                       }) => {
    const totalItems = sliderData.length;
    const activeItem = sliderData[activeItemIndex];

    const goToPrevious = () => {
        setActiveItemIndex(
            (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
        );
    };

    const goToNext = () => {
        setActiveItemIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-2 min-w-[880px]">
            {/* Image Slider */}
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
                            fill="black"
                        />
                    </svg>
                </button>
                {/* Previous button */}

                {/* Active Slider Item Image */}
                <div className="flex justify-center">
                    <img
                        src={activeItem.imgSrc}
                        alt="Product"
                        className="w-[800px] max-h-[480px] object-cover rounded-lg"
                    />
                </div>

                {/* Next button */}
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
                            fill="black"
                        />
                    </svg>
                </button>
            </div>

            {/* Product Info */}
            <div className="flex w-[800px] gap-10">
                <div className="flex flex-col w-6/12 justify-center items-start">
                    <p className="w-full break-words whitespace-normal">
                        {activeItem.productName}
                    </p>
                    <p className="flex text-lg text-gray-500 w-full justify-end break-words whitespace-normal">
                        {activeItem.price} تومان
                    </p>
                    <p className="mt-4 text-sm text-gray-700 w-full break-words whitespace-normal line-clamp-3">
                        {activeItem.description}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-4">
                    <p className="flex text-sm w-full gap-2 break-words whitespace-normal">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_25_856)">
                                <path
                                    d="M7.70268 0.883346L5.88879 4.56112L1.83046 5.15279C1.10268 5.25835 0.811016 6.15557 1.33879 6.66946L4.2749 9.53057L3.58046 13.5722C3.45546 14.3028 4.2249 14.85 4.86935 14.5083L8.49991 12.6L12.1305 14.5083C12.7749 14.8472 13.5443 14.3028 13.4193 13.5722L12.7249 9.53057L15.661 6.66946C16.1888 6.15557 15.8971 5.25835 15.1693 5.15279L11.111 4.56112L9.29713 0.883346C8.97213 0.227791 8.03046 0.219458 7.70268 0.883346Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_856">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        امتیاز : {activeItem.rating}
                    </p>
                    <p className="flex text-sm w-full gap-2 break-words whitespace-normal">
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_25_862)">
                                <path
                                    d="M15.17 9.25889L16.4831 3.48111C16.5779 3.06394 16.2609 2.66669 15.8331 2.66669H4.92244L4.66783 1.42197C4.60439 1.11172 4.33139 0.888916 4.01469 0.888916H1.16667C0.798472 0.888916 0.5 1.18739 0.5 1.55558V2.00003C0.5 2.36822 0.798472 2.66669 1.16667 2.66669H3.10786L5.05919 12.2066C4.59236 12.475 4.27778 12.9784 4.27778 13.5556C4.27778 14.4147 4.97422 15.1111 5.83333 15.1111C6.69244 15.1111 7.38889 14.4147 7.38889 13.5556C7.38889 13.1202 7.20981 12.7268 6.92156 12.4445H12.7451C12.4569 12.7268 12.2778 13.1202 12.2778 13.5556C12.2778 14.4147 12.9742 15.1111 13.8333 15.1111C14.6924 15.1111 15.3889 14.4147 15.3889 13.5556C15.3889 12.9397 15.0309 12.4075 14.5117 12.1554L14.6649 11.4811C14.7597 11.0639 14.4427 10.6667 14.0149 10.6667H6.55881L6.377 9.77781H14.5199C14.8312 9.77781 15.101 9.56242 15.17 9.25889Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_862">
                                    <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                        transform="translate(0 0.5)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        تعداد : {activeItem.quantity}
                    </p>
                    <p className="flex text-sm w-full gap-2 break-words whitespace-normal">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_25_868)">
                                <path
                                    d="M16.4219 5.26875L14.8406 0.525C14.6375 -0.0875 14.0656 -0.5 13.4187 -0.5H9V5.5H16.4594C16.4469 5.42188 16.4469 5.34375 16.4219 5.26875ZM8 -0.5H3.58125C2.93437 -0.5 2.3625 -0.0875 2.15937 0.525L0.578125 5.26875C0.553125 5.34375 0.553125 5.42188 0.540625 5.5H8V-0.5ZM0.5 6.5V14C0.5 14.8281 1.17188 15.5 2 15.5H15C15.8281 15.5 16.5 14.8281 16.5 14V6.5H0.5Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_868">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        {activeItem.available
                            ? `موجودی : ${activeItem.available}`
                            : "ناموجود"}
                    </p>
                </div>

                <div className="flex flex-col justify-center items-start gap-4">
                    <p className="flex w-full gap-2 break-words whitespace-normal">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_25_837)">
                                <path
                                    d="M16.1364 3.93117L14.4507 1.24026C14.3 0.998699 14.0325 0.850647 13.7468 0.850647H3.25325C2.96754 0.850647 2.7 0.998699 2.54935 1.24026L0.863639 3.93117C-0.00649071 5.32078 0.764938 7.25324 2.39091 7.47402C2.5078 7.48961 2.62728 7.4974 2.74676 7.4974C3.51559 7.4974 4.19611 7.15974 4.66364 6.63766C5.13117 7.15974 5.81429 7.4974 6.58052 7.4974C7.34935 7.4974 8.02987 7.15974 8.49741 6.63766C8.96494 7.15974 9.64806 7.4974 10.4143 7.4974C11.1831 7.4974 11.8636 7.15974 12.3312 6.63766C12.8013 7.15974 13.4818 7.4974 14.2481 7.4974C14.3701 7.4974 14.487 7.48961 14.6039 7.47402C16.2351 7.25584 17.0091 5.32337 16.1364 3.93117ZM14.2533 8.33117C13.9935 8.33117 13.7364 8.29221 13.487 8.23247V10.8247H3.51299V8.23247C3.26364 8.28961 3.0065 8.33117 2.74676 8.33117C2.59091 8.33117 2.43247 8.32078 2.27922 8.3C2.13377 8.27922 1.99091 8.24545 1.85325 8.20649V13.3182C1.85325 13.7779 2.22468 14.1493 2.68442 14.1493H14.3208C14.7805 14.1493 15.152 13.7779 15.152 13.3182V8.20649C15.0117 8.24805 14.8714 8.28182 14.726 8.3C14.5675 8.32078 14.4117 8.33117 14.2533 8.33117Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_837">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        برند : {activeItem.brand}
                    </p>
                    <p className="flex text-sm w-full gap-2 break-words whitespace-normal">
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_25_843)">
                                <path
                                    d="M8.5 0.25C4.21875 0.25 0.75 3.71875 0.75 8C0.75 12.2812 4.21875 15.75 8.5 15.75C12.7812 15.75 16.25 12.2812 16.25 8C16.25 3.71875 12.7812 0.25 8.5 0.25ZM11.3903 10.0312L10.7653 10.8125C10.7243 10.8638 10.6736 10.9065 10.6161 10.9382C10.5585 10.9698 10.4954 10.9899 10.4301 10.9971C10.3648 11.0044 10.2988 10.9987 10.2357 10.9804C10.1726 10.9622 10.1138 10.9316 10.0625 10.8906L7.96875 9.33687C7.82246 9.21975 7.70437 9.07122 7.62323 8.90229C7.54209 8.73336 7.49998 8.54834 7.5 8.36094V3.5C7.5 3.36739 7.55268 3.24021 7.64645 3.14645C7.74021 3.05268 7.86739 3 8 3H9C9.13261 3 9.25979 3.05268 9.35355 3.14645C9.44732 3.24021 9.5 3.36739 9.5 3.5V8L11.3125 9.32812C11.3638 9.36917 11.4065 9.41992 11.4382 9.47747C11.4699 9.53503 11.4899 9.59826 11.4971 9.66356C11.5043 9.72886 11.4986 9.79494 11.4803 9.85804C11.462 9.92113 11.4314 9.97998 11.3903 10.0312Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_843">
                                    <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                        transform="translate(0 0.5)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        زمان بروزرسانی : {activeItem.time}
                    </p>
                    <p className="flex text-sm w-full gap-2 break-words whitespace-normal">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_25_856)">
                                <path
                                    d="M7.70268 0.883346L5.88879 4.56112L1.83046 5.15279C1.10268 5.25835 0.811016 6.15557 1.33879 6.66946L4.2749 9.53057L3.58046 13.5722C3.45546 14.3028 4.2249 14.85 4.86935 14.5083L8.49991 12.6L12.1305 14.5083C12.7749 14.8472 13.5443 14.3028 13.4193 13.5722L12.7249 9.53057L15.661 6.66946C16.1888 6.15557 15.8971 5.25835 15.1693 5.15279L11.111 4.56112L9.29713 0.883346C8.97213 0.227791 8.03046 0.219458 7.70268 0.883346Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_856">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        نظرات : {activeItem.reviews}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slider;
