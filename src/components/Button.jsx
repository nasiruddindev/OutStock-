import React from 'react'

const Button = ({text}) => {
  return (
    <button className={`bg-[#454545] text-white px-10 py-3 rounded  hover:bg-[#535353] duration-300 cursor-pointer`}>{text}</button>
  )
}

export default Button
