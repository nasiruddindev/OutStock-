import React from 'react'
import Image from './Image'
import Pera from './Pera'
import { FaPlus, FaStar } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { CiSearch } from 'react-icons/ci'
import { HiArrowPath } from 'react-icons/hi2'

const Card = ({ src, text, salePrice, regularPrice }) => {
  return (
    <div className={`w-69.25 h-112.5 group cursor-pointer`}>
      <div
        className={`relative w-full h-87.25 flex justify-center items-center bg-back`}
      >
        <Image src={src} />
        <div className="absolute rotate-90 top-4 left-1 w-15 h-7 bg-[#535353]">
          <p className="text-white text-sm p-1">SALE</p>
        </div>

        <div className="absolute -right-10 bottom-18 w-12 h-12 bg-white shadow-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:right-4 overflow-hidden duration-500">
          <CiSearch />
        </div>

        <div className="absolute -right-10 bottom-5 w-12 h-12 bg-white shadow-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:right-4 overflow-hidden duration-500">
          <HiArrowPath />
        </div>
      </div>

      <div className={`relative w-full h-25 p-3`}>
        <Pera text={text} className="pt-1" />
        <ul className={`flex pt-2 `}>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
        </ul>

        <div className="flex gap-2 absolute left-3 -bottom-2 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-4">
          <Pera text={regularPrice} />
          <Pera text={salePrice} className={`text-black!`} />
        </div>

        <div
          className=" absolute not-first:left-0 -bottom-2 flex items-center
          gap-2 px-5 py-2 rounded-full  bg-white shadow-xl opacity-0 translate-y-5 scale-95 transition-all duration-500 ease-in-out
          group-hover:opacity-100 group-hover:translate-y-0  group-hover:scale-100"
        >
          <GoPlus className="text-2xl" />
          <p className="text-primary text-base `font-pop font-medium ">
            Add To Cart
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
