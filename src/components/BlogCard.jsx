import React from 'react'
import Image from './Image'
import Pera from './Pera'
import Button from './Button'

const BlogCard = ({src,title,date,description}) => {
  return (
    <div className='w-92.5'>
      <div className='w-full h-55 bg-back flex justify-center'>
        <Image src={src} />
      </div>
      <h3 className='text-lg text-primary font-normal font-pop py-5'>{title}</h3>
      <p className='text-xs text-primary font-pop font-normal'>{date}</p>
      <Pera text={description} className="pb-6"/>
      <Button text="READ MORE"/>
    </div>
  )
}

export default BlogCard
