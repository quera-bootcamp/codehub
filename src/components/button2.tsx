import React from "react";

interface Button2Props {
    onClick?: () => void;
}

const Button2: React.FC<Button2Props> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex justify-between items-center w-32 h-9 p-2 bg-danger text-white rounded-lg hover:bg-danger-600 active:bg-danger-700"
        >
            <div className="flex-grow m-0 p-0 text-right text-sm whitespace-nowrap overflow-hidden">
                مشاهده بیشتر
            </div>
            <div className="w-3.5 h-2.5 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_336)">
                        <path d="M13 7H1M1 7L5 3M1 7L5 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_14_336">
                            <rect width="14" height="14" fill="white" transform="matrix(-1 0 0 1 14 0)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </button>
    );
};

export default Button2;
