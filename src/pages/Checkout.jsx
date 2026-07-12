import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import ListItem from '../components/ListItem'
import Title from '../components/Title'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Image from '../components/Image'
import Bkash from '../assets/bkash.png'
import Nagad from '../assets/nagad.png'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

const Checkout = () => {

  let shipping = 5;
  let [subTotal, setSubTotal] = useState('')

  const billingFields = [
    'First Name',
    'Company Name',
    'Street Address',
    'Apartment, Floor, etc. (Optional)',
    'Town / City',
    'Phone Number',
    'Email Address',
  ]

  let data = useSelector((state) => state.cart.value)

  useEffect(() => {
    let subTotal = 0
    data.map((item) => {
      subTotal += item.quantity * item.price
    })
    setSubTotal(subTotal)
  }, [data])

  return (
    <section className="pb-35">
      <Container>
        <div className="py-20 pl-5 md:pl-0">
                  <ul className="flex items-center flex-wrap gap-2 text-black/50 text-sm font-pop">
                    <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
                    <span>/</span>

                    <span className="text-black font-medium">Checkout</span>
                  </ul>
                </div>
        <Title text="Billing Details" className={`font-medium! pb-12`} />

        <Flex className="flex-col md:flex-row">
          <div className="w-8/12 mx-auto md:mx-0 md:w-1/2 flex flex-col">
            {billingFields.map((field, index) => (
              <div key={index} className="mx-auto md:mx-0">
                <label className="font-pop font-normal text-base text-black/40 pb-2 block">
                  {field}
                </label>
                <Input className={`bg-back! w-75 sm:w-100  md:w-4/5  mb-8`} />
              </div>
            ))}
          </div>

          <div className="md:w-1/2 p-3 lg:p-0">
            {data.map((item,index) => (
                <div key={index} className="flex items-center justify-between mb-5">
                  <div className="flex gap-x-4 items-center">
                    <div>
                      <Image src={item.image} className="w-13 h-13" />
                    </div>
                    <p className="text-base font-normal font-pop text-black">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-base text-black font-pop font-normal">
                    {item.price} * {item.quantity}
                  </p>
                </div>
            ))}

            <div className="flex items-center justify-between border-b border-black/40 pb-4">
              <p className="text-base font-normal font-pop text-black">
                Subtotal
              </p>

              <p className="text-base text-black font-pop font-normal">
                {subTotal}$
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-black/40 py-4">
              <p className="text-base font-normal font-pop text-black">
                Shipping
              </p>

              {data.length < 1 ? (
                0
              ) : (
                <p className="text-base text-black font-pop font-normal">5$</p>
              )}
            </div>

            <div className="flex items-center justify-between  pt-4">
              <p className="text-base font-normal font-pop text-black">
                Total:
              </p>

              {data.length < 1 ? (
                0
              ) : (
                <p className="text-base text-black font-pop font-normal">
                  {subTotal + shipping}
                </p>
              )}
            </div>

            <div className="flex justify-between pt-8">
              <div className="flex items-center gap-x-4">
                <Input type="radio" />
                <label htmlFor="">Bank</label>
              </div>
              <div className="flex items-center">
                <Image src={Bkash} className="w-15 h-7" />
                <Image src={Nagad} className="w-15 h-10" />
              </div>
            </div>

            <div className="flex gap-x-4 pt-8">
              <Input type="radio" />
              <label htmlFor="">Cash On Delevery</label>
            </div>
            <div className="flex gap-4 py-8">
              <Input
                placeholder="Coupon Code"
                className="border border-black/50 rounded w-1/2 lg:w-full"
              />
              <Button text="Apply Coupon" className="w-1/2 lg:w-full" />
            </div>
            <Button text="Place Order" className="w-full" />
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Checkout
