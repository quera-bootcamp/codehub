import React from 'react';

interface CardHomepageProps {
  title: string;
}

export const Card_Homepage: React.FC<CardHomepageProps> = ({ title }) => {
  return (
    <div className="bg-slate-700 w-[50px] h-[50px] text-white p-1 rounded">
      {title}
    </div>
  );
};
