import React, { useEffect, useState } from 'react';

interface BadgeProps {
  price: string;
}

export const Badge: React.FC<BadgeProps> = ({ price }) => {
  const [formattedPrice, setFormattedPrice] = useState<string>(price);

  useEffect(() => {
    let counter = 0;
    let result = '';
    
    for (let i = price.length - 1; i >= 0; i--) {
      counter++;
      result = price[i] + result;
      
      if (counter === 3 && i !== 0) {
        result = ',' + result;
        counter = 0;
      }
    }

    setFormattedPrice(result);
  }, [price]);

  return <div className="bg-danger-600 text-danger-100 text-xs rounded-xl px-2 py-0.5 font-normal">{formattedPrice + " تومان"}</div>;
};
