import React from 'react'

const Title = ({ text, className }) => {
  return (
    <div className='flex items-center gap-x-4'>
      <p className='w-full h-px bg-black/40'></p>
      <h2 className={`w-full text-center text-4xl text-primary font-normal font-pop ${className}`}>{text}</h2>
    <p className='w-full h-px bg-black/40'></p>
    </div>
  )
}

export default Title
