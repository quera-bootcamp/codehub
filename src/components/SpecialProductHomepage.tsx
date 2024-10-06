import HomepageCardContainer from './HomepageCardContainer'
import { Button } from './Common/Button'

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
        <div className='w-full m-6 flex flex-row justify-between items-center'>
            <h2 className='text-4xl font-normal text-default-950 dark:text-default-100'>محصولات ویژه</h2>
            <Button  button_style='text-default-100 cursor-pointer px-8 py-2 rounded-xl'>
            فروشگاه
            </Button>
        </div>
        <HomepageCardContainer CardStyle='w-56' style='w-full' items={items} />
    </div>
  )
}
