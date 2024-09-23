import React, { useState } from 'react';
import Button2 from './button2';
import productImage from '../../public/images/image_product.png';
import shopIcon from '../assets/icons/shop_icon.svg';

const ProductCard: React.FC = () => {
    const [liked, setLiked] = useState<boolean>(false);

    const convertToPersianNumber = (num: string | number): string => {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
    };


    const formatNumber = (num: number): string => {
        return convertToPersianNumber(num.toLocaleString('fa-IR'));
    };

    const toggleLike = (): void => {
        setLiked(!liked);
    };

    return (
        <div className="relative w-96 h-auto bg-primary-900 rounded-lg font-primaryRegular text-white overflow-hidden" >

            <div className="relative w-full h-44 rounded-t-lg">
                <img
                    src={productImage}
                    alt="Product Background"
                    className="w-full h-full object-cover rounded-t-lg"
                />

                <div
                    className="absolute top-2 right-2 w-6 h-6 cursor-pointer z-10"
                    onClick={toggleLike}
                >
                    {liked ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ff0000" viewBox="0 0 24 24" stroke="none" className="w-full h-full">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#DFE3E8" strokeWidth="2" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    )}
                </div>

                <div
                    className="absolute bottom-4 right-4 flex items-center justify-center px-4 py-1 text-white rounded-[9999px] shadow-lg"
                    style={{
                        backgroundColor: '#831747', //
                        width: '51px',
                        height: '24px',
                        fontSize: '12px',
                    }}
                >
                    Apple
                </div>
            </div>

            <div className="w-full flex flex-col p-4 space-y-4 bg-default-900 rounded-b-lg">
                <div className="w-full h-9 flex justify-between font-primaryBold">
                    <span className="ml-auto text-gray-100 font-[Segoe UI] text-[20px] font-normal leading-[28px] text-left">Apple iPhone 14 Pro</span>
                    <span className="mr-auto text-danger">{formatNumber(10000)} تومان</span>
                </div>

                <div className="w-full h-12 text-gray-400">
                    <span>آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر Retina XDR است...</span>
                </div>

                <div className="w-full h-14 flex justify-between items-center pt-3">
                    <Button2>مشاهده بیشتر</Button2>
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
                        <img src={shopIcon} alt="Shop Icon" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
