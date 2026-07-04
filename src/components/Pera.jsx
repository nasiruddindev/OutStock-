import React from 'react'

const Pera = ({ text, className }) => {
  return (
    <p className={`text-secondary text-sm font-pop font-normal ${className}`}>
      {text}
    </p>
  )
}

export default Pera
