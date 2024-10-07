import React, { useState , useEffect } from 'react';
import { LikeIcon } from './LikeIcon';
import { Badge } from './Badge';
import { Link } from 'react-router-dom';
import {useFavorites} from "../hooks/FavoritesContext"

interface CardHomepageProps {
  title: string;
  imgsrc? : string;
  price : string;
  style? : string;
  id:string;
}

export const CardHomepage: React.FC<CardHomepageProps> = ({ price , id , title , imgsrc = "" , style = "" }) => {
  const { favorites } = useFavorites();
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
  }, [price,favorites]);


  return (
    <div className={`flex flex-col gap-3 justify-start items-stretch relative ${style}`}>
      <LikeIcon  id={id} price={price} title={title} imgsrc={imgsrc} />
      <Link to={`/products/${id}`}>
      <img className='rounded-xl' src={imgsrc} alt="" />
      <div className="flex flex-row justify-between items-center mt-3">
        <p className='text-sm font-normal text-default-950 dark:text-default-100'>{title}</p>
        <Badge children={formattedPrice}/>
      </div>
      </Link>
    </div>
  );
};


// style is for width : if use this component in Home_page width must be w-52 and if use in special_product must be w-56 
