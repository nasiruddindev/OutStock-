import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Card from '../components/Card'
import DealImg1 from '../assets/hotDealImg1.png'
import DealImg2 from '../assets/hotDealImg2.png'
import Image from '../components/Image'
import BestSellingProducts from '../components/BestSellingProducts'

const HotDeal = ({ products }) => {
  return (
    <section>
      <Container>
        <div className="bg-white px-7.5 shadow-xl pt-7.5">
          <Title text="Hot Deal" className="text-center " />
          <Pera
            text="Mirum Est Notare Quam Littera Gothica Quam Nunc Putamus Parum Claram!"
            className="text-center pt-4"
          />

          <Flex className={`py-13 flex-wrap justify-center sm:justify-between  gap-y-7`}>
            {products.slice(0, 8).map((item, index) => (
              <Card
                id={item.id}
                key={index}
                src={item.thumbnail}
                title={item.title}
                salePrice={item.price}
              />
            ))}
          </Flex>

          <Flex className="flex-col md:flex-row gap-7.5 pb-13">
            <div className="lg:w-142.5 lg:h-68.5 bg-back ">
              <Image src={DealImg1} className="lg:p-5 lg:hover:p-0 duration-300" />
            </div>
            <div className="lg:w-142.5 lg:h-68.5 bg-back ">
              <Image src={DealImg2} className="lg:p-5 lg:hover:p-0 duration-300" />
            </div>
          </Flex>



          <Flex className="flex-col sm:flex-row items-center sm:items-start pb-15 gap-y-15 sm:gap-y-0">
            <div className='sm:w-1/3'>

              <h3 className='text-2xl sm:text-xl md:text-2xl text-[#333E48] font-medium font-pop'>New Products</h3>

              <Flex className="flex-col gap-5 mt-7">

                {
                  products.slice(8, 11).map((item, index) => (
                    <BestSellingProducts id={item.id} key={index} src={item.thumbnail} title={item.title.substring(0,22)} salePrice={item.price} />
                  ))
                }
              </Flex>

            </div>
            <div className='sm:w-1/3'>

              <h3 className='text-2xl sm:text-xl md:text-2xl text-[#333E48] font-medium font-pop'>Best Sellers</h3>

              <Flex className="flex-col gap-5 mt-7">

                {
                  products.slice(11, 14).map((item, index) => (
                    <BestSellingProducts id={item.id} key={index} src={item.thumbnail} title={item.title.substring(0,22)} salePrice={item.price} />
                  ))
                }
              </Flex>

            </div>
            <div className='sm:w-1/3'>

              <h3 className='text-2xl sm:text-xl md:text-2xl text-[#333E48] font-medium font-pop'>Featured Products</h3>

              <Flex className="flex-col gap-5 mt-7">

                {
                  products.slice(14, 17).map((item, index) => (
                    <BestSellingProducts id={item.id} key={index} src={item.thumbnail} title={item.title.substring(0,22)} salePrice={item.price} />
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
