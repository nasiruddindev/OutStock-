import React from 'react'

const Pera = ({ text, className,onClick }) => {
  return (
    <p onClick={onClick} className={`text-primary text-sm font-pop font-normal ${className}`}>
      {text}
    </p>
  )
}

export default Pera
