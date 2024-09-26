import HomepageCardContainer from './HomepageCardContainer'
import items from "../../mock-data/HomepageItems"
import { Button } from './Common/Button'

export const SpecialProductHomepage = () => {
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
