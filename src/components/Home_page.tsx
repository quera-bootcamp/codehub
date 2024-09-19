import React, { useEffect, useState } from 'react'
import { Card_Homepage } from './Card_Homepage';
import Icon from "../assets/icons/react.svg"

interface items_type {
    title : string;
    price : string | number;
    imgsrce : string;
}

interface HomePageProps {
    items: items_type[];
  }

const Home_page : React.FC<HomePageProps> = ({items}) => {

    const [itemList, setItemList] = useState<items_type[]>([]);

    useEffect(() => {
      setItemList(items);
    }, [items]);

  return (
    <div className='flex flex-row flex-wrap w-[37%] gap-5 justify-start items-start'>
      {
        itemList.map((element , index) => (
          <Card_Homepage price={typeof element.price === 'number' ? element.price.toString() : element.price} key={index} imgsrce={element.imgsrce || Icon} title={element.title} />
        ))
      }
    </div>
  )
}

export default Home_page