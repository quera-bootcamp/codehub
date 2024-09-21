import React from "react";
import flashImage from '../assets/icons/image-flash.png'; //  تصویر فلش

// تعریف نوع props
interface Button2Props {
    text?: string;
    onClick?: () => void;
}

const Button2: React.FC<Button2Props> = ({ text = "مشاهده بیشتر", onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center w-[132px] h-[36px] bg-danger text-white font-primaryRegular text-[14px] leading-[20px] rounded-[8px] p-[8px_8px_8px_6px] hover:bg-danger-600 focus:outline-none"
            style={{ direction: 'rtl' }} // راست‌چین کردن محتوای دکمه
        >
            {/* متن دکمه در سمت راست */}
            <div className="flex-grow text-center m-0 p-0 text-right">
                {text}
            </div>
            {/* آیکون فلش در سمت چپ */}
            <div className="w-[14px] h-[10px] flex items-center justify-center"> {/* اندازه جدید */}
                <img src={flashImage} alt="فلش" className="w-full h-full" />
            </div>
        </button>
    );
};

export default Button2;
