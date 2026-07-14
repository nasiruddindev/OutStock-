import React from 'react'

const Input = ({type,className,placeholder,onChange}) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={`bg-white px-2 py-2 outline-none ${className}`}/>
  )
}

export default Input
