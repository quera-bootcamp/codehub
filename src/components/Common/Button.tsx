import React from 'react'
interface Button_Type {
    button_style : string;
    value : string;
}
export const Button : React.FC<Button_Type> =  ({button_style , value}) => {
  return (
    <button className={`bg-danger ${button_style}`}>{value}</button>
  )
}
