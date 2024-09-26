import React, { useEffect, useState } from 'react'
import { CardHomepage } from './CardHomepage';
import Icon from "../assets/icons/react.svg"


interface items_type {
    title : string;
    price : string | number;
    imgsrc? : string;
}

interface HomePageProps {
    items: items_type[];
    style? : string;
    CardStyle? : string;
  }

const HomepageCardContainer : React.FC<HomePageProps> = ({items , style = "" , CardStyle = ""}) => {

    const [itemList, setItemList] = useState<items_type[]>([]);

    useEffect(() => {
      setItemList(items);
    }, [items]);

  return (
    <div className={`flex flex-row flex-wrap gap-10 justify-start items-start ${style}`}>
      {
        itemList.map((element , index) => (
          <CardHomepage style={CardStyle} price={typeof element.price === 'number' ? element.price.toString() : element.price} key={index} imgsrc={element.imgsrc || Icon} title={element.title}  />
        ))
      }
    </div>
  )
}


// style is for width : if use this component in Home_page width must be w-[37%] and if use in special_product must be w-full

export default HomepageCardContainer;