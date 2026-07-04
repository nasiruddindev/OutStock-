import React from 'react'

const Title = ({ text, className }) => {
  return (
    <h2 className={`text-4xl text-primary font-normal font-pop ${className}`}>{text}</h2>
  )
}

export default Title
