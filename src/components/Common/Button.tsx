import React from 'react';

interface Button_Type {
    button_style: string;
    children: React.ReactNode;
}

export const Button: React.FC<Button_Type> = ({ button_style, children }) => {
  return (
    <button className={`bg-danger ${button_style}`}>
      {children}
    </button>
  );
};
