import React from 'react'
import Homepage_Card_Container from './Homepage_Card_Container'
import iteems from "../../mock-data/HomepageItems"
import { Button } from './Common/Button'

export const SpecialProduct_Homepage = () => {
  return (
    <div className='w-full'>
        <div className='w-full m-6 flex flex-row justify-between items-center'>
            <h2 className='text-4xl font-normal text-default-950 dark:text-default-100'>محصولات ویژه</h2>
            <Button value='فروشگاه' button_style='text-default-100 cursor-pointer' />
        </div>
        <Homepage_Card_Container style_for_card='w-56' style='w-full' items={iteems} />
    </div>
  )
}
