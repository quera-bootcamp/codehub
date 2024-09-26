import React from 'react';
import { LikeIcon } from './LikeIcon';
import { Badge } from './Badge';

interface CardHomepageProps {
  title: string;
  imgsrc : string;
  price : string;
  style? : string;
}

export const CardHomepage: React.FC<CardHomepageProps> = ({ price , title , imgsrc = "" , style = ""}) => {
  return (
    <div className={`flex flex-col gap-3 justify-start items-stretch relative ${style}`}>
      <LikeIcon/>
      <img className='rounded-xl' src={imgsrc} alt="" />
      <div className="flex flex-row justify-between items-center">
        <p className='text-sm font-normal text-default-950 dark:text-default-100'>{title}</p>
        <Badge price={price}/>
      </div>
    </div>
  );
};


// style is for width : if use this component in Home_page width must be w-52 and if use in special_product must be w-56 
