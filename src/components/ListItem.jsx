import React from 'react'

const ListItem = ({text,className}) => {
  return (


    <li className={`text-black text-base font-normal font-pop border-b border-transparent  cursor-pointer hover:text-orange-400 duration-300 ${className}`}>{text}</li>


  )
}

export default ListItem
