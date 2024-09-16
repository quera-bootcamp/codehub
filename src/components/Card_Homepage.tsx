import React from 'react';

interface CardHomepageProps {
  title: string;
}

export const Card_Homepage: React.FC<CardHomepageProps> = ({ title }) => {
  return (
    <div className="bg-slate-700 w-18 h-18 text-white p-4 rounded">
      {title}
    </div>
  );
};
