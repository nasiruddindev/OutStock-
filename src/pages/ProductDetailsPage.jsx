import React, { useEffect, useState } from 'react'
import Navbar from '../layouts/Navbar'
import { FaOtter, FaStar } from 'react-icons/fa'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Card from '../components/Card'
import Title from '../components/Title'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { CiHeart } from 'react-icons/ci'
import Image from '../components/Image'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  // Related Item Show part start

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  // Related Item Show part end

  // Proudcts details id verify part start

  let [allData, setAllData] = useState([])
  console.log(allData)
  let params = useParams()
  console.log(params)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setAllData(data))
  }, [])

  // Proudcts details id verify part end

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <section className='bg-white'>
      <Container>

          <ul className="flex flex-wrap gap-2 py-20">
            <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
              Account <p className="inline-block px-3">/</p>
            </li>
            <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
              fff <p className="inline-block px-3">/</p>
            </li>
            <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
              fff
            </li>
          </ul>

          <Flex className="flex-col gap-y-10 lg:gap-y-0 lg:flex-row">
            <div className="hidden lg:flex lg:w-2/12  flex-col gap-y-4">
              <div className="w-42.5 h-34.5 rounded bg-back flex justify-center items-center">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
              <div className="w-42.5 h-34.5 rounded bg-back flex justify-center items-center">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
              <div className="w-42.5 h-34.5 rounded bg-back flex justify-center items-center">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
              <div className="w-42.5 h-34.5 rounded bg-back flex justify-center items-center">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
            </div>

            <div className="lg:w-6/12 mx-auto">
              <div className="max-w-125 px-3 md:px-0 h-150 bg-back rounded flex justify-center items-center">
                <Image src={allData.thumbnail} className="bg-cover" />
              </div>
            </div>

            <div className="hidden md:flex lg:hidden justify-evenly">
              <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center p-3">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
              <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center p-3">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
              <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center p-3">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
              <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center p-3">
                <Image src={allData.thumbnail} className="w-full h-full" />
              </div>
            </div>

            <div className="lg:w-4/12 sm:w-8/12 sm:mx-auto lg:mx-0 px-3 md:px-0">
              <h2 className="font-inter font-semibold text-2xl text-black">
                {allData.title}
              </h2>
              <Flex className="py-4">
                <ul className="flex">
                  <li>
                    <FaStar className="text-star text-xl" />
                  </li>
                  <li>
                    <FaStar className="text-star text-xl" />
                  </li>
                  <li>
                    <FaStar className="text-star text-xl" />
                  </li>
                  <li>
                    <FaStar className="text-star text-xl" />
                  </li>
                  <li>
                    <FaStar className="text-star text-xl" />
                  </li>
                </ul>
                <p className="font-pop font-normal text-black/50 text-sm pl-2">
                  (150 Reviews)
                </p>
              </Flex>
              <p className="text-black font-normal font-inter text-2xl">
                ${allData.price}
              </p>
              <p className="font-pop font-normal text-sm text-black max-w-93.25 pt-6 border-b border-black/50 pb-6 mb-6">
                {allData.description}
              </p>

              <Flex className="items-center gap-x-6 ">
                <p className="text-black text-xl font-normal font-inter">
                  Size:
                </p>
                <Flex className="items-center gap-x-4 py-6 ">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      className="h-8 w-8 rounded border border-black/50 flex items-center justify-center cursor-pointer"
                    >
                      <p className="font-medium font-pop text-black text-sm ">
                        {size}
                      </p>
                    </div>
                  ))}
                </Flex>
              </Flex>

              <Flex className="items-center gap-x-3 lg:gap-x-0 lg:justify-between">
                <div className="flex justify-evenly items-center border border-black/50 w-39.75 rounded">
                  <button className="w-1/3 text-2xl text-center border-r px-2 py-1.5 cursor-pointer">
                    -
                  </button>

                  <button className="w-1/3 text-2xl text-center border-r px-2 py-1.5 cursor-pointer">
                    1
                  </button>

                  <button className="w-1/3 text-2xl text-center  px-2 py-1.5 cursor-pointer">
                    +
                  </button>
                </div>

                <div>
                  <Button className={`py-2.5!`} text="Buy Now" />
                </div>

                <div className="w-10 h-10 border border-black/50 rounded flex justify-center items-center">
                  <CiHeart className="text-2xl" />
                </div>
              </Flex>
            </div>
          </Flex>

          <Title text="Related Item" className="pt-20 md:pt-35 pb-15" />

          <Flex className=" justify-between pb-10">
            {products.slice(20, 24).map((item, index) => (
              <Card
                key={index}
                src={item.thumbnail}
                title={item.title}
                salePrice={`$ ${item.price}`}
              />
            ))}
          </Flex>
      </Container>
    </section>
  )
}

export default ProductDetailsPage
