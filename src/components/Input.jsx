import React from 'react'

const Input = ({type,className}) => {
  return (
    <input type={type} className={`bg-white px-2 py-3 ${className}`}/>
  )
}

export default Input
