import React from 'react'
import Image from './Image'

const BannerCard = ({ src }) => {
  return (
    <div className="group w-92.25 h-56.75 bg-back ">
      <Image src={src} className="p-3 group-hover:p-0 duration-300"/>
    </div>
  )
}

export default BannerCard
