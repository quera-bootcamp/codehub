import React from 'react'

interface BasketItemsType{
    imgsrc : string;
    number : number;
    title : string;
    price : string;
    brand : string;
}

interface ShoppingBasketrProps{
    BasketItems : BasketItemsType;
}

const ShoppingBasketCard : React.FC<ShoppingBasketrProps> =  ({BasketItems}) => {
  return (
    <div>
        <div>
            <img src={BasketItems.imgsrc} alt="" />
            <div className='flex flex-col justify-between '>
                <p>{BasketItems.title}</p>
                <p>{BasketItems.brand}</p>
                <p>{BasketItems.price}</p>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default ShoppingBasketCard;