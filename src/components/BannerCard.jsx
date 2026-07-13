import React from 'react'
import Image from './Image'

const BannerCard = ({ src }) => {
  return (
    <div className="group max-w-92.25 h-56.75 md:h-auto lg:h-56.75 bg-back ">
      <Image src={src} className="lg:p-3 lg:group-hover:p-0 duration-300"/>
    </div>
  )
}

export default BannerCard
