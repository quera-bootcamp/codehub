import React from 'react';
import { Like_Icon } from './Like_Icon';
import { Badge } from './Badge';

interface CardHomepageProps {
  title: string;
  imgsrce : string;
  price : string;
  style? : string;
}

export const Card_Homepage: React.FC<CardHomepageProps> = ({ price , title , imgsrce = "" , style = ""}) => {
  return (
    <div className={`flex flex-col gap-3 justify-start items-stretch relative ${style}`}>
      <Like_Icon/>
      <img className='rounded-xl' src={imgsrce} alt="" />
      <div className="flex flex-row justify-between items-center">
        <p className='text-sm font-normal text-default-950 dark:text-default-100'>{title}</p>
        <Badge price={price}/>
      </div>
    </div>
  );
};


// style is for width : if use this component in Home_page width must be w-52 and if use in special_product must be w-56 
