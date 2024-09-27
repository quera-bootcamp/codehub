import React, {  useMemo, useState } from 'react'
import ShoppingBasketCard from './ShoppingBasketCard';
import { Button } from './Common/Button';



interface BasketItemsType {
    imgsrc: string;
    number: number;
    title: string;
    price: string;
    brand: string;
  }
  
  interface ShoppingBasketProps {
    items: BasketItemsType[];
  }

export const ShoppingBasketPage : React.FC<ShoppingBasketProps> = ({items}) => {
    
   const [shopItems , setshopItems] = useState<BasketItemsType[]>(items);


    const updateNumber = (index : number , value : number):void => {
        const newshopItems = [...shopItems];
        newshopItems[index].number = value;
        setshopItems(newshopItems);
    }


    const remvoeItems = (itemIndex : number):void => {
      setshopItems(shopItems.filter((_,index) => {
        return index !== itemIndex
      }));
    }

    const totalPrice =  useMemo(() => {
        let sum : number = 0;
        let sumstring : string = "";
        let counter : number = 0;
        let result : string = "";
        shopItems.map((element) => {
            sum += (parseInt(element.price) * element.number);
        });

        sumstring = sum.toString();
    
    for (let i = sumstring.length - 1; i >= 0; i--) {
      counter++;
      result = sumstring[i] + result;
      
      if (counter === 3 && i !== 0) {
        result = ',' + result;
        counter = 0;
      }
    }
    return result
    } , [shopItems]);

  return (
    <div>
        <div className='w-full flex flex-col justify-start items-center gap-4'>
            {
                shopItems.map((element,index) => (
                    <ShoppingBasketCard remove={remvoeItems} index={index} setNewNumber={updateNumber} key={index} BasketItems={element} /> 
                ))
            }
        </div>
        <div className='flex flex-col gap-1 justify-start items-start mt-7'>
            <p>{`تعداد : (${shopItems.length})`}</p>
            <p>{`${totalPrice} تومان`}</p>
            <Button button_style='w-96 h-10 text-default-50 rounded-2xl'>
                تکمیل خرید
            </Button>
        </div>
    </div>
  )
}
