import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Input from '../components/Input'
import Image from '../components/Image'
import { useSelector } from 'react-redux'

const Cart = () => {

  let [subTotal,setSubTotal] = useState()


  let data = useSelector((state)=>state.cart.value)

  useEffect(()=>{
    let subTotal=0
    data.map((item,index)=>{
      subTotal+=item.price*item.quantity
    })
    setSubTotal(subTotal)
  },[])


  return (
    <section>
      <Container>
        <div className="py-20">
          <ul className="flex  items-center flex-wrap gap-2 pb-10">
            <Pera text="gfasf" className={`text-black/50!`} />
            /
            <Pera text="gfasf" className={`text-black/50!`} />
          </ul>
        </div>

        <Flex className="px-3 py-5 items-center">
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black">Product</p>
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-center">
              Price
            </p>
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-center">
              Quantity
            </p>
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-end">
              Subtotal
            </p>
          </div>
        </Flex>

        <div className="flex flex-col gap-6">
          {
            data.map((item,index)=>(
              <Flex className="px-3 py-5 shadow-2xl rounded items-center">
            <div key={index} className="w-1/4">
              <Flex className="items-center gap-4">
                <Image src={item.image} className="w=14 h-14" />
                <p className="text-base font-normal font-pop text-black">
                  {item.title}
                </p>
              </Flex>
            </div>

            <div className="w-1/4 text-center">
              <p className="text-base text-black font-pop font-normal">$ {item.price}</p>
            </div>

            <div className="w-1/4">
              <li className="w-1/3 h-10 mx-auto border border-black/40 flex justify-between px-2 rounded-md">
                <button className="cursor-pointer">-</button>

                <button>{item.quantity}</button>

                <button className="cursor-pointer">+</button>
              </li>
            </div>

            <div className="w-1/4 text-end">
              <p className="text-base text-black font-pop font-normal">$ {item.quantity*item.price}</p>
            </div>
          </Flex>
            ))
          }
        </div>

        <Flex className="mt-6 justify-between">
          <Button text="Return to Shop" />
          <Button text="Upddate Cart" />
        </Flex>

        <Flex className="my-20">
          <div className="w-7/12">
            <div className="flex gap-4 ">
              <Input
                placeholder="Coupon Code"
                className="border border-black/50 rounded "
              />
              <Button text="Apply Coupon" />
            </div>
          </div>

          <div className="w-5/12 border border-black/40 rounded p-6">
            <p className="text-black text-xl font-medium font-pop pb-6">
              Cart Total
            </p>

            <div className="flex items-center justify-between border-b border-black/40 pb-4">
              <p className="text-base font-normal font-pop text-black">
                SubTotal
              </p>

              <p className="text-base text-black font-pop font-normal">$ {subTotal}</p>
            </div>

            <div className="flex items-center justify-between border-b border-black/40 py-4">
              <p className="text-base font-normal font-pop text-black">
                Shipping
              </p>

              {
                data.lenght?
                <p className="text-base text-black font-pop font-normal">$ 5</p>:<p className="text-base text-black font-pop font-normal">$ 0</p>
              }
            </div>

            <div className="flex items-center justify-between  pt-4">
              <p className="text-base font-normal font-pop text-black">
                Total:
              </p>

              {
                data.length?
                <p className="text-base text-black font-pop font-normal">$ {(subTotal+5)}</p>:
                <p className="text-base text-black font-pop font-normal">0</p>
              }
            </div>

            <div className="mt-4 text-center">
              <Button text="Process to Checkout" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Cart




