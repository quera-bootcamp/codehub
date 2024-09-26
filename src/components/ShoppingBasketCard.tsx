import React, { useEffect, useState } from 'react';

interface BasketItemsType {
  imgsrc: string;
  number: number;
  title: string;
  price: string;
  brand: string;
}

interface ShoppingBasketProps {
  BasketItems: BasketItemsType;
}

const ShoppingBasketCard: React.FC<ShoppingBasketProps> = ({ BasketItems }) => {


  const [formattedPrice, setFormattedPrice] = useState<string>(BasketItems.price);

  // State to keep track of the selected value
  const [selectedNumber, setSelectedNumber] = useState<number>(BasketItems.number);

  // Create options for the dropdown
  const optionsArray = [
    // Generate numbers from 1 to BasketItems.number
    ...Array.from({ length: BasketItems.number-1 }, (_, index) => index+1),
    
    // Generate numbers from BasketItems.number to BasketItems.number + 4
    ...Array.from({ length: 5 }, (_, index) => BasketItems.number + index),
  ];

  // Handle change in the dropdown
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    const value = parseInt(e.target.value);
    setSelectedNumber(value);
  };

  useEffect(() => {
    let counter = 0;
    let result = '';
    
    for (let i = formattedPrice.length - 1; i >= 0; i--) {
      counter++;
      result = formattedPrice[i] + result;
      
      if (counter === 3 && i !== 0) {
        result = ',' + result;
        counter = 0;
      }
    }

    setFormattedPrice(result);
  }, [BasketItems]);

  

  return (
    <div className='w-full flex flex-row items-center justify-between'>
      <div className="flex flex-row justify-start items-stretch gap-6">
        <img  src={BasketItems.imgsrc} alt="" />
        <div className="flex flex-col justify-between items-start">
          <p className="font-normal text-base text-danger">{BasketItems.title}</p>
          <p className="font-normal text-base text-default-950 dark:text-default-50">
            {BasketItems.brand}
          </p>
          <p className="font-bold text-base text-default-950 dark:text-default-50">
            {formattedPrice}
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-4'>

        <select className='pl-6 rounded-md dark:text-default-50 dark:bg-[#3F4043]' value={selectedNumber} onChange={handleSelectChange}>
          {optionsArray.map((i) => (
            <option className='dark:text-default-50  dark:bg-[#3F4043]' key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

        <svg
        className='cursor-pointer'
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 1.00001H9.75L9.45625 0.41563C9.39402 0.290697 9.29817 0.185606 9.17947 0.11218C9.06078 0.0387537 8.92395 -9.46239e-05 8.78438 5.47897e-06H5.2125C5.07324 -0.00052985 4.93665 0.0381736 4.81838 0.111682C4.7001 0.18519 4.60492 0.290529 4.54375 0.41563L4.25 1.00001H0.5C0.367392 1.00001 0.240215 1.05268 0.146447 1.14645C0.0526784 1.24022 0 1.3674 0 1.50001L0 2.50001C0 2.63261 0.0526784 2.75979 0.146447 2.85356C0.240215 2.94733 0.367392 3.00001 0.5 3.00001H13.5C13.6326 3.00001 13.7598 2.94733 13.8536 2.85356C13.9473 2.75979 14 2.63261 14 2.50001V1.50001C14 1.3674 13.9473 1.24022 13.8536 1.14645C13.7598 1.05268 13.6326 1.00001 13.5 1.00001ZM1.6625 14.5938C1.68635 14.9746 1.85443 15.332 2.13252 15.5932C2.41061 15.8545 2.77781 16 3.15937 16H10.8406C11.2222 16 11.5894 15.8545 11.8675 15.5932C12.1456 15.332 12.3137 14.9746 12.3375 14.5938L13 4.00001H1L1.6625 14.5938Z"
            fill="#B71D18"
          />
        </svg>

      </div>
    </div>
  );
};

export default ShoppingBasketCard;
