import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Pera from './Pera'
import { Link } from 'react-router-dom'

const BestSellingProducts = ({id,src,title,salePrice}) => {
  return (
    <Flex className="items-center gap-x-2 cursor-pointer">
      <div className='w-22 h-27 bg-back flex justify-center items-center'>
        <Link to={`productdetails/${id}`}>
        <Image src={src}/>
        </Link>
      </div>

      <div>
        <Link to={`productdetails/${id}`}>
        <Pera text={title} className="pb-10"/>
        </Link>
        <Pera text={salePrice} className={`text-black!`} />
      </div>
    </Flex>
  )
}

export default BestSellingProducts
