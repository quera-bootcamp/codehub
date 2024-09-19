import React, { useEffect, useState } from 'react'

interface items_type {
    price : string | number;
    title : string;
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
    <div>

    </div>
  )
}

export default Home_page