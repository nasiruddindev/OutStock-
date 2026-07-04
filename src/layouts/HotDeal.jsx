import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Card from '../components/Card'
import DealImg1 from '../assets/hotDealImg1.png'
import DealImg2 from '../assets/hotDealImg2.png'
import Image from '../components/Image'
import BestSellingProducts from '../components/BestSellingProducts'

const HotDeal = () => {
  let [allData, setAllData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data.products))
  }, [])

  return (
    <section>
      <Container>
        <div className="bg-white px-7.5 shadow-xl">
          <Title text="Hot Deal" className="text-center pt-7.5" />
          <Pera
            text="Mirum Est Notare Quam Littera Gothica Quam Nunc Putamus Parum Claram!"
            className="text-center pt-2"
          />

          <Flex className={`py-13 flex-wrap justify-between gap-y-7`}>
            {allData.slice(0, 8).map((item, index) => (
              <Card
                key={index}
                src={item.thumbnail}
                title={item.title}
                salePrice={`$ ${item.price}`}
              />
            ))}
          </Flex>

          <Flex className="gap-7.5 pb-13">
            <div className="w-142.5 h-68.5 bg-back ">
            <Image src={DealImg1} className="p-5 hover:p-0 duration-300" />
          </div>
            <div className="w-142.5 h-68.5 bg-back ">
            <Image src={DealImg2} className="p-5 hover:p-0 duration-300" />
          </div>
          </Flex>



          <Flex className="pb-15">
            <div className='w-1/3'>

            <h3 className='text-lg text-[#333E48] font-medium font-pop'>New Products</h3>

            <Flex className="flex-col gap-5 mt-4">

            {
              allData.slice(8,11).map((item,index)=>(
                <BestSellingProducts src={item.thumbnail} title={item.title} salePrice={`$ ${item.price}`}/>
              ))
            }
            </Flex>

            </div>
            <div className='w-1/3'>

            <h3 className='text-lg text-[#333E48] font-medium font-pop'>Best Sellers</h3>

            <Flex className="flex-col gap-5 mt-4">

            {
              allData.slice(11,14).map((item,index)=>(
                <BestSellingProducts src={item.thumbnail} title={item.title} salePrice={`$ ${item.price}`}/>
              ))
            }
            </Flex>

            </div>
            <div className='w-1/3'>

            <h3 className='text-lg text-[#333E48] font-medium font-pop'>Featured Products</h3>

            <Flex className="flex-col gap-5 mt-4">

            {
              allData.slice(14,17).map((item,index)=>(
                <BestSellingProducts src={item.thumbnail} title={item.title} salePrice={`$ ${item.price}`}/>
              ))
            }
            </Flex>

            </div>

          </Flex>



        </div>
      </Container>
    </section>
  )
}

export default HotDeal
