import React from 'react'
import Image from './Image'
import Pera from './Pera'
import Button from './Button'
import { Link } from 'react-router-dom'

const BlogCard = ({id,src,title,date,description}) => {
  return (
    <div className='md:w-92.5'>
      <div className='w-full h-75 bg-back flex justify-center items-center'>
        <Link to={`productdetails/${id}`}>
        <Image src={src} />
        </Link>
      </div>
      <Link to={`productdetails/${id}`}>
      <h3 className='text-lg text-primary font-normal font-pop py-5'>{title}</h3>
      </Link>
      <p className='text-xs text-primary font-pop font-normal'>{date}</p>
      <Pera text={description} className="pb-6"/>
      <Button text="READ MORE"/>
    </div>
  )
}

export default BlogCard
