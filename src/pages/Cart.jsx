import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Input from '../components/Input'
import Image from '../components/Image'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeItem } from '../slices/addToCardSlice'
import { Link } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { RiDeleteBinLine } from 'react-icons/ri'

const Cart = () => {
  let [subTotal, setSubTotal] = useState()

  let data = useSelector((state) => state.cart.value)

  useEffect(() => {
    let subTotal = 0
    data.map((item, index) => {
      subTotal += item.price * item.quantity
    })
    setSubTotal(subTotal)
  }, [])

  let dispatch = useDispatch()

  let handleIncrement = (item) => {
    dispatch(increment(item))
  }
  let handleDecrement = (item) => {
    dispatch(decrement(item))
  }
  let handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }

  return (
    <section>
      <Container>
        <div className="py-20">
          <div className="pl-5 md:pl-0">
            <ul className="flex items-center flex-wrap gap-2 text-black/50 text-sm font-pop">
              <Link to="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
              <span>/</span>

              <span className="text-black font-medium">Cart</span>
            </ul>
          </div>
        </div>

        <Flex className="hidden md:flex px-3 py-5 items-center">
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

        <div className="hidden md:flex flex-col gap-6">
          {data.map((item, index) => (
            <Flex className="px-3 py-5 hover:shadow-2xl scale-97 hover:scale-100 duration-300 rounded items-center">
              <div key={index} className="w-1/4">
                <Flex className="items-center gap-4">
                  <Image src={item.image} className="w=14 h-14" />
                  <p className="text-base font-normal font-pop text-black">
                    {item.title}
                  </p>
                </Flex>
              </div>

              <div className="w-1/4 text-center">
                <p className="text-base text-black font-pop font-normal">
                  $ {item.price}
                </p>
              </div>

              <div className="w-1/4">
                <li className="w-1/3 h-10 mx-auto border border-black/40 flex justify-between px-2 rounded-md">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="cursor-pointer"
                  >
                    -
                  </button>

                  <button>{item.quantity}</button>

                  <button
                    onClick={() => handleIncrement(item)}
                    className="cursor-pointer"
                  >
                    +
                  </button>
                </li>
              </div>

              <div className="w-1/4 text-end">
                <p className="text-base text-black font-pop font-normal">
                  $ {item.quantity * item.price}
                </p>
              </div>
            </Flex>
          ))}
        </div>

        {/* Responsive part start */}

        <div className="md:hidden w-full my-10 bg-gray-300 rounded shadow-xl border border-slate-100 overflow-hidden font-pop ">
          {/* 1. Header Section */}

          {/* 2. Scrollable Cart Items List */}
          <div className="max-h-125 overflow-y-auto divide-y divide-slate-100 px-3 py-2 custom-scrollba ">

            {data.map((item, index) => (
              <div className="py-5 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shrink-0 overflow-hidden p-1">
                  <Image src={item.image} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-800 truncate">
                    {item.title.substring(0, 15)}
                  </h3>
                  <span className="text-sm font-semibold text-slate-900">
                    ${item.price}
                  </span>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-slate-100 rounded-xl px-2 py-1 cursor-pointer">
                      <button
                        onClick={() => handleDecrement(item)}
                        className="text-slate-500  px-1 font-medium text-base"
                      >
                        -
                      </button>
                      <span className="text-base font-bold text-slate-800 px-2">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrement(item)}
                        className="text-slate-500  px-1 font-medium text-base cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Trash Button */}
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="text-slate-600 text-xl cursor-pointer hover:text-rose-500 p-1 transition-colors"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                  <p className="text-base text-slate-500 font-medium ">
                    Subtotal:
                    <span className="font-bold text-slate-700 pl-2">
                      {item.quantity * item.price.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Footer Section (Modified Layout & Soft Light Aesthetic) */}
        </div>

        {/* Responsive part end */}

        <Flex className="mt-6 justify-between">
          <Button text="Return to Shop" />
          <Button text="Upddate Cart" />
        </Flex>

        <Flex className="flex-col md:flex-row my-20 gap-y-10 md:gap-y-0">
          <div className="md:w-7/12">
            <div className="flex gap-4 ">
              <Input
                placeholder="Coupon Code"
                className="border border-black/50 rounded "
              />
              <Button text="Apply Coupon" />
            </div>
          </div>

          <div className="md:w-5/12 border border-black/40 rounded p-6">
            <p className="text-black text-xl font-medium font-pop pb-6">
              Cart Total
            </p>

            <div className="flex items-center justify-between border-b border-black/40 pb-4">
              <p className="text-base font-normal font-pop text-black">
                SubTotal
              </p>

              <p className="text-base text-black font-pop font-normal">
                $ {subTotal}
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-black/40 py-4">
              <p className="text-base font-normal font-pop text-black">
                Shipping
              </p>

              {data.length ? (
                <p className="text-base text-black font-pop font-normal">$ 5</p>
              ) : (
                <p className="text-base text-black font-pop font-normal">$ 0</p>
              )}
            </div>

            <div className="flex items-center justify-between  pt-4">
              <p className="text-base font-normal font-pop text-black">
                Total:
              </p>

              {data.length ? (
                <p className="text-base text-black font-pop font-normal">
                  $ {subTotal + 5}
                </p>
              ) : (
                <p className="text-base text-black font-pop font-normal">0</p>
              )}
            </div>

            <div className="mt-4 text-center">
              <Link to="/checkout">
                <Button text="Process to Checkout" />
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Cart
