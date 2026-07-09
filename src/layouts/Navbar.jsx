import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { CiSearch } from 'react-icons/ci'
import { IoBagOutline } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/addToCardSlice'

const Navbar = () => {
  let [allData, setAllData] = useState([])
  let [cartOpen, setCartOpen] = useState(false)
  let [searchOpen, setSearchOpen] = useState(false)
  let [accountOpen, setAccountOpen] = useState(false)

  // Search box functionallity start

  let [input, setInput] = useState([])
  let [search, setSearch] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data.products))
  }, [])

  let searchHandle = (e) => {
    setInput(e.target.value)
    let search = allData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    )

    setSearch(search)
  }

  // Search box functionallity end

  // add to cart functionallity start

  let data = useSelector((state)=>state.cart.value)
  let dispatch = useDispatch()

  let handleIncrement = (item)=>{
    dispatch(increment(item))
  }
  let handleDecrement = (item)=>{
    dispatch(decrement(item))
  }

  let [total,setTotal] = useState()

  useEffect(()=>{
    let total=0
    data.map((item)=>{
      total+=item.price*item.quantity
    })
    setTotal(total)
  },[data])

  // add to cart functionallity end

  return (
    <nav className="bg-back py-7">
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-3/12">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="w-5/12 ">
            <ul className="flex items-center justify-center gap-15">
              <Link to="/">
                <ListItem text="Home" />
              </Link>
              <ListItem text="About" />
              <Link to="contact">
                <ListItem text="Contact" />
              </Link>
              <ListItem text="Blog" />
            </ul>
          </div>

          {/* Search Functionality Start */}

          <div className="w-4/12 relative">
            <Flex className="items-center justify-end gap-8">
              <div
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <CiSearch className="text-black text-lg" />
                <p className="text-black text-base font-pop font-normal">
                  Search
                </p>
              </div>

              {searchOpen && (
                <div className="absolute top-8 left-0 flex bg-white items-center justify-between px-3 py-2 w-full shadow-lg rounded-md gap-2 z-50">
                  <input
                    value={input}
                    onChange={searchHandle}
                    type="text"
                    placeholder="Search the store"
                    className="bg-white border-none focus:outline-none "
                  />
                  <CiSearch className="text-black text-lg" />

                  <div
                    className={`absolute -top-3 right-40 shadow-lg w-0 h-0
                 border-l-10 border-l-transparent
                 border-r-10 border-r-transparent
                 border-b-12 border-b-white`}
                  ></div>
                </div>
              )}

              {search.length>0&&
                <div className="absolute top-18 left-0 w-full  bg-linear-to-r from-black/40 to-black/70 rounded p-5 z-10">
                {search.map((item, index) => (
                  <ul key={index}>
                    <Link onClick={()=>{
                      setInput(item.title)
                      setSearch([])
                    }} to={`productdetails/${item.id}`}>
                    <li className="text-white text-xl font-semibold py-3">
                      {item.title}
                    </li>
                    </Link>
                  </ul>
                ))}
              </div>
              }

              {/* Search Functionality End */}

              {/* Cart Functionality Start */}

              <div
                onClick={() => setCartOpen(!cartOpen)}
                className="relative flex items-center gap-2 cursor-pointer"
              >
                <IoBagOutline className="text-black text-lg" />
                <p className="text-black text-base font-pop font-normal">
                  Cart
                </p>
                {
                  data.length>1 &&
                  <div className='absolute -top-3 -right-3 h-5 w-5 rounded-full bg-yellow-400 flex justify-center items-center'>
                  <p className="text-black text-sm font-pop font-normal">
                  {data.length}
                </p>
                </div>
                }
              </div>

              {cartOpen && (
                <div className="overflow-y-scroll z-50 absolute top-13 right-0 w-full bg-back px-4 py-6">
                  <div className="pb-5 cursor-pointer">
                    <RxCross2
                      onClick={() => setCartOpen(false)}
                      className="text-3xl text-black"
                    />
                  </div>

                  <ul className="flex  border-b pb-4 ">
                    <li className="w-1/5 text-center">Product</li>
                    <li className="w-1/5 text-center">Image</li>
                    <li className="w-1/5 text-center">Quantity</li>
                    <li className="w-1/5 text-center">Price</li>
                    <li className="w-1/5 text-center">Total</li>
                  </ul>

                  {
                    data.map((item,index)=>(
                      <ul key={index} className="flex items-center pt-5 ">
                    <li  className="w-1/5 text-center">{item.title.substring(0,15)}</li>

                    <li className="w-1/5">
                      <Image className="w-full" src={item.image} />
                    </li>
                    <li className="w-1/5 h-10  border border-black/40 flex justify-between px-2 rounded-md">
                      <button onClick={()=>handleDecrement(item)} className="cursor-pointer">-</button>

                      <button>{item.quantity}</button>

                      <button onClick={()=>handleIncrement(item)} className="cursor-pointer">+</button>
                    </li>
                    <li className="w-1/5 text-end">{item.price}</li>
                    <li className="w-1/5 text-center">${(item.price*item.quantity.toFixed(2))}</li>
                  </ul>
                    ))
                  }

                  <div className="py-5  border-t mt-10">
                    <p className="text-2xl px-2 font-pop font-medium text-end ">
                      Total : ${total.toFixed(2)}
                    </p>

                    <div

                    onClick={()=>setCartOpen(!cartOpen)}

                    className="flex justify-evenly gap-2 mt-10">
                      <Link to="/checkout">
                      <Button className="w-full" text="Check Out" />
                      </Link>

                      <Link to="/cart">
                      <Button className="w-full" text="Cart" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Cart Functionality End */}

              <div onClick={() => setAccountOpen(!accountOpen)}>
                <GiHamburgerMenu className="text-black text-lg cursor-pointer" />
              </div>

              {accountOpen && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-white border border-gray-200 shadow-lg p-5 z-50">
                  <h3 className="text-3xl font-semibold text-gray-700 mb-5">
                    My Account
                  </h3>

                  <ul className="flex flex-col gap-y-4">
                    <Link to="/login">
                    <li className="text-2xl text-gray-700 font-pop hover:text-orange-500 transition cursor-pointer">
                      Sign in
                    </li>
                    </Link>

                    <Link to="/account">
                    <li className="text-2xl text-gray-700 font-pop hover:text-orange-500 transition cursor-pointer">
                      Register
                    </li>
                    </Link>
                  </ul>

                  <h4 className="mt-6 mb-4 text-2xl font-semibold text-gray-70 font-pop">
                    currency
                  </h4>

                  <ul className="space-y-4">
                    <li>
                      <button className="flex items-center gap-3 hover:text-orange-500 transition cursor-pointer">
                        <Image
                          src="https://flagcdn.com/w40/us.png"
                          alt="USA"
                          className="w-6 h-4 object-cover"
                        />
                        <span className="text-xl text-gray-700">USD</span>
                      </button>
                    </li>

                    <li>
                      <button className="flex items-center gap-3 hover:text-orange-500 transition cursor-pointer">
                        <Image
                          src="https://flagcdn.com/w40/au.png"
                          alt="Australia"
                          className="w-6 h-4 object-cover"
                        />
                        <span className="text-xl text-gray-700">
                          Australian Dollar
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
