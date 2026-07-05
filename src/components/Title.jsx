import React from 'react'

const Title = ({ text, className }) => {
  return (
    <div className={`flex items-center gap-x-4  ${className}`}>
      <p className='w-full h-px bg-black/40'></p>
      <h2 className={`w-full text-center text-4xl text-primary font-normal font-pop`}>{text}</h2>
    <p className='w-full h-px bg-black/40'></p>
    </div>
  )
}

export default Title
