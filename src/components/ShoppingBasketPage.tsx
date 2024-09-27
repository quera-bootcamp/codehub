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
    
  
  const [prices , setprices] = useState<string[]>(
        items.map((element) => {
            return ( parseInt(element.price) * element.number ).toString()
        })
    );

    // const [totalPrice , setTotalPrice] = useState<string>("");


    const updatePrice = (index : number , price : string , value : number):void => {
        let updateprice : number = 0;
        let newprices : string[] = [];
        updateprice = parseInt(price) * value;
        newprices = [...prices];
        newprices[index] = updateprice.toString();
        setprices(newprices);
    }

    const totalPrice =  useMemo(() => {
        let sum : number = 0;
        let sumstring : string = "";
        let counter : number = 0;
        let result : string = "";
        prices.map((element) => {
            sum += parseInt(element);
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
    } , [prices]);


  //   useEffect(() => {
  //     let sum : number = 0;
  //     let sumstring : string = "";
  //     let counter : number = 0;
  //     let result : string = "";
  //     items.map((element) => {
  //         sum += parseInt(element.price) * element.number;
  //     });

  //     sumstring = sum.toString();
  
  // for (let i = sumstring.length - 1; i >= 0; i--) {
  //   counter++;
  //   result = sumstring[i] + result;
    
  //   if (counter === 3 && i !== 0) {
  //     result = ',' + result;
  //     counter = 0;
  //   }
  // }

  // setTotalPrice(result);
  // } , []);

  return (
    <div>
        <div className='w-full flex flex-col justify-start items-center gap-4'>
            {
                items.map((element,index) => (
                    <ShoppingBasketCard index={index} setNewPrice={updatePrice} key={index} BasketItems={element} /> 
                ))
            }
        </div>
        <div>
            <p>{`تعداد : (${items.length})`}</p>
            <p>{totalPrice}</p>
            <Button button_style='w-96 h-10 text-default-50'>
                تکمیل خرید
            </Button>
        </div>
    </div>
  )
}
