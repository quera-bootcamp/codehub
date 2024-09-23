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
    style? : string;
    style_for_card? : string;
  }

const Homepage_Card_Container : React.FC<HomePageProps> = ({items , style = "" , style_for_card = ""}) => {

    const [itemList, setItemList] = useState<items_type[]>([]);

    useEffect(() => {
      setItemList(items);
    }, [items]);

  return (
    <div className={`flex flex-row flex-wrap gap-10 justify-start items-start ${style}`}>
      {
        itemList.map((element , index) => (
          <Card_Homepage style={style_for_card} price={typeof element.price === 'number' ? element.price.toString() : element.price} key={index} imgsrce={element.imgsrce || Icon} title={element.title}  />
        ))
      }
    </div>
  )
}


// style is for width : if use this component in Home_page width must be w-[37%] and if use in special_product must be w-full

export default Homepage_Card_Container;