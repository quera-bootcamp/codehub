import HomepageCardContainer from './HomepageCardContainer'
import { Button } from './Common/Button'
import { Link } from 'react-router-dom';

interface items_type {
  title: string;
  price: string | number;
  imgsrc?: string;
  id:string;
}


interface items {
  items : items_type[];
}

export const SpecialProductHomepage : React.FC<items> = ({items}) => {
  return (
    <div className='w-full'>
        <div className='w-full mb-8 flex flex-row justify-between items-center'>
            <h2 className='text-4xl font-normal text-default-950 dark:text-default-100'>محصولات ویژه</h2>
            <Link to={`/Shop`}>
            <Button  button_style='text-default-100 cursor-pointer px-8 py-2 rounded-2xl'>
            فروشگاه
            </Button>
            </Link>
        </div>
        <HomepageCardContainer CardStyle='w-56' style='w-full' items={items} />
    </div>
  )
}
