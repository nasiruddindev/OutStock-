import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Pera from './Pera'

const BestSellingProducts = ({src,title,salePrice}) => {
  return (
    <Flex className="items-center gap-x-2 cursor-pointer">
      <div className='w-22 h-27 bg-back flex justify-center items-center'>
        <Image src={src}/>
      </div>

      <div>
        <Pera text={title} className="pb-10"/>
        <Pera text={salePrice} className={`text-black!`} />
      </div>
    </Flex>
  )
}

export default BestSellingProducts
