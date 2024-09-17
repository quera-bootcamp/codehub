import React from 'react';
import { Like_Icon } from './Like_Icon';
import { Badge } from './Badge';

interface CardHomepageProps {
  title: string;
  imgsrce : string;
}

export const Card_Homepage: React.FC<CardHomepageProps> = ({ title , imgsrce = ""}) => {
  return (
    <div className="flex flex-col gap-3 justify-start items-stretch w-[300px] relative">
      <Like_Icon/>
      <img className='rounded-xl' src={imgsrce} alt="" />
      <div className="flex flex-row justify-between items-center">
        <p className='text-[14px] font-[400] text-[black]'>{title}</p>
        <Badge price={"123000"}/>
      </div>
    </div>
  );
};
