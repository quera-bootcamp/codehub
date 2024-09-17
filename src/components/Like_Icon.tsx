import React, { useState } from 'react'
import Icon from "../assets/Like-Icon.svg"
import Icon_red from "../assets/Like-Icon-Red.svg"

export const Like_Icon = () => {
    const [like,setlike] = useState<boolean>(false);
  return (
    <img onClick={() => setlike(!like)} src={like ? Icon_red : Icon} className="cursor-pointer absolute top-2 right-2" alt="Like" />
  )
}
