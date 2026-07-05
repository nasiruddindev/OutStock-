import React from 'react'
import Image from './Image'

const ProductDetailsImg = ({src,className}) => {
  return (
    <div className="w-42.5 h-34.5 rounded bg-back flex justify-center items-center">
      <Image src={src} className={className}/>
    </div>
  )
}

export default ProductDetailsImg
