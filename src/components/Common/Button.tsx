import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

interface Button_Type {
    type?: ButtonType;
    button_style: string;
    children: React.ReactNode;
}

export const Button: React.FC<Button_Type> = ({button_style, children, type}) => {
    return (
        <button
            type={type}
            className={`bg-danger ${button_style}`}>
            {children}
        </button>
    );
};
