import React, { useEffect, useRef, useState } from 'react'
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
import { decrement, increment, removeItem } from '../slices/addToCardSlice'
import Us from '../assets/us.png'
import Au from '../assets/au.png'
import { breadCrumb } from '../slices/breadCrumbSlice'
import { RiDeleteBinLine } from 'react-icons/ri'
import { DiPerl } from 'react-icons/di'
import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
  let [allData, setAllData] = useState([])
  let [cartOpen, setCartOpen] = useState(false)
  let [searchOpen, setSearchOpen] = useState(false)
  let [accountOpen, setAccountOpen] = useState(false)

  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen)
    setCartOpen(false)
    setAccountOpen(false)
    setShowInput(true)
  }
  const handleCartOpen = () => {
    setCartOpen(!cartOpen)
    setSearchOpen(false)
    setAccountOpen(false)
    setShowCart(true)
  }
  const handleAccountOpen = () => {
    setAccountOpen(!accountOpen)
    setCartOpen(false)
    setSearchOpen(false)
    setShowAccount(true)
  }

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

  let data = useSelector((state) => state.cart.value)
  let dispatch = useDispatch()

  let handleIncrement = (item) => {
    dispatch(increment(item))
  }
  let handleDecrement = (item) => {
    dispatch(decrement(item))
  }
  let handleRemoveItem = (item) =>{
    dispatch(removeItem(item))
  }
  let [total, setTotal] = useState()

  useEffect(() => {
    let total = 0
    data.map((item) => {
      total += item.price * item.quantity
    })
    setTotal(total)
  }, [data])

  // add to cart functionallity end

  // BreadCrumb Function start

  let handleBreadCrumb = (text) => {
    dispatch(breadCrumb(text))
  }

  let handleBreadAbout = () => {
    dispatch(breadCrumb("about"))
    setResMenuOpen(!resMenuOpen)
  }
  let handleBreadContact = () => {
    dispatch(breadCrumb("contact"))
    setResMenuOpen(!resMenuOpen)
  }
  let handleBreadSignup = () => {
    dispatch(breadCrumb("signup"))
    setResMenuOpen(!resMenuOpen)
  }
  // BreadCrumb Function end

  // search cart account hide functionallity start

  const [showSearch,setShowSearch] = useState(false)
  const [showInput,setShowInput] = useState(false)
  const [showCart,setShowCart] = useState(false)
  const [showAccount,setShowAccount] = useState(false)
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const cartRef = useRef(null)
  const accountRef = useRef(null)

  useEffect(()=>{
    let handleClickOutsie = (e) => {
      if(searchRef.current && !searchRef.current.contains(e.target.value)){
        setShowSearch(false)
      }
      if(inputRef.current && !inputRef.current.contains(e.target.value)){
        setShowInput(false)
      }
      if( cartRef.current && !cartRef.current.contains(e.target.value)){
        setShowCart(false)
      }
      if( accountRef.current && !accountRef.current.contains(e.target.value)){
        setShowAccount(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutsie)
    return () => {
      document.removeEventListener("mousedown", handleClickOutsie)
    }

  },[])


  // search cart account hide functionallity end


  // Responsive part start

  let [resMenuOpen,setResMenuOpen] = useState(false)

  return (
    <div>

      {/* Big Screen Navbar */}
      <nav className="hidden md:block bg-back py-7">
      <Container>
        <Flex className="items-center justify-between">
          <div className="md:w-2/12 lg:w-3/12">
            <Link to="/">
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="md:w-6/12 lg:w-5/12">
            <ul className="flex items-center justify-center md:gap-8 lg:gap-15">
              <Link to="/">
                <ListItem text="Home" />
              </Link>
              <Link onClick={() => handleBreadCrumb('about')} to="/about">
                <ListItem text="About" />
              </Link>
              <Link onClick={() => handleBreadCrumb('contact')} to="/contact">
                <ListItem text="Contact" />
              </Link>
              <Link onClick={() => handleBreadCrumb('signup')} to="/signup">
                <ListItem text="Sign Up" />
              </Link>
            </ul>
          </div>

          {/* Search Functionality Start */}

          <div className="w-4/12 relative" >
            <Flex className="items-center justify-end gap-8">
              <div
                onClick={handleSearchOpen}
                className="flex items-center gap-2 cursor-pointer"
              >
                <CiSearch className="text-black text-lg" />
                <p className="text-black text-base font-pop font-normal">
                  Search
                </p>
              </div>

              {searchOpen && showInput&& (
                <div ref={inputRef} className="absolute top-8 left-0 flex bg-white items-center justify-between px-3 py-2 w-full shadow-lg rounded-md gap-2 z-50">
                  <input
                    value={input}
                    onChange={searchHandle}
                    onFocus={()=>setShowSearch(true)}
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

              {search.length > 0 && showSearch && (
                <div ref={searchRef} className="absolute top-18 left-0 w-full  bg-linear-to-r from-black/40 to-black/70 rounded p-5 z-10">
                  {search.map((item, index) => (
                    <ul key={index}>
                      <Link
                        onClick={() => {
                          setInput(item.title)
                          setSearch([])
                        }}
                        to={`productdetails/${item.id}`}
                      >
                        <li className="text-white text-xl font-semibold py-3">
                          {item.title}
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>
              )}

              {/* Search Functionality End */}

              {/* Cart Functionality Start */}

              <div

                onClick={handleCartOpen}
                className="relative flex items-center gap-2 cursor-pointer"
              >
                <IoBagOutline className="text-black text-lg" />
                <p className="text-black text-base font-pop font-normal">
                  Cart
                </p>
                {data.length > 0 && (
                  <div className="absolute -top-3 -right-3 h-5 w-5 rounded-full bg-yellow-400 flex justify-center items-center">
                    <p className="text-black text-sm font-pop font-normal">
                      {data.length}
                    </p>
                  </div>
                )}
              </div>

              {cartOpen && showCart && (
                <div ref={cartRef} className="absolute top-3 left-0 z-50 w-full my-10 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden font-pop">
                  {/* 1. Header Section */}
                  <header className="bg-linear-to-r from-sky-100 via-purple-100 to-pink-100 p-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold pb-1 text-slate-800 tracking-tight">
                        Your Cart
                      </h2>
                      <p className="text-xs font-medium text-slate-500">
                        {`${data.length} items in your cart`}
                      </p>
                    </div>

                    <button className="w-9 h-9 rounded-full bg-white/60 hover:bg-white cursor-pointer  flex items-center justify-center transition-colors shadow-sm">
                      <RxCross2
                        onClick={() => setCartOpen(false)}
                        className="text-3xl text-black/60"
                      />
                    </button>
                  </header>

                  {/* 2. Scrollable Cart Items List */}
                  <div className="max-h-125 overflow-y-auto divide-y divide-slate-100 px-3 py-2 custom-scrollbar">
                    {/* Item 1 */}
                    {
                      data.map((item,index)=>(
                        <div className="py-5 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shrink-0 overflow-hidden p-1">
                        <Image src={item.image}/>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-800 truncate">
                         {item.title.substring(0,15)}
                        </h3>
                        <span className="text-sm font-semibold text-slate-900">
                          ${item.price}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          {/* Quantity Selector */}
                          <div className="flex items-center bg-slate-100 rounded-xl px-2 py-1 cursor-pointer">
                            <button onClick={()=>handleDecrement(item)} className="text-slate-500  px-1 font-medium text-base">
                              -
                            </button>
                            <span className="text-base font-bold text-slate-800 px-2">
                              {item.quantity}
                            </span>
                            <button onClick={()=>handleIncrement(item)} className="text-slate-500  px-1 font-medium text-base cursor-pointer">
                              +
                            </button>
                          </div>

                          {/* Trash Button */}
                          <button onClick={()=>handleRemoveItem(item)} className="text-slate-600 text-xl cursor-pointer hover:text-rose-500 p-1 transition-colors">
                            <RiDeleteBinLine />

                          </button>
                        </div>
                        <p className="text-base text-slate-500 font-medium ">
                          Subtotal:
                          <span className="font-bold text-slate-700 pl-2">
                            {(item.quantity*item.price.toFixed(2))}
                          </span>
                        </p>
                      </div>
                    </div>
                      ))
                    }
                  </div>

                  {/* 3. Footer Section (Modified Layout & Soft Light Aesthetic) */}
                 {
                  data.length>0? <footer className="py-6 px-2 bg-slate-50 border-t border-slate-100 flex flex-col gap-4">
                    {/* Total Price Display */}
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Total
                      </span>
                      <span className="text-2xl font-black text-slate-900 tracking-tight">
                        ${total.toFixed(2)}
                      </span>
                    </div>

                    {/* Action Buttons arranged side-by-side */}
                    <div onClick={()=>setCartOpen(!cartOpen)} className="flex justify-between mt-5">
                      <Link to="/cart">
                      <button className="py-4 px-5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-base uppercase tracking-wider rounded-xl shadow-sm transition-all text-center cursor-pointer">
                        View Cart
                      </button>
                      </Link>

                      <Link to="/checkout">
                      <button  className=" py-4 px-5 bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-base uppercase rounded-xl shadow-md  transition-all text-center cursor-pointer ">
                        <span>Proceed to Checkout</span>
                      </button>
                      </Link>
                    </div>
                  </footer>:
                  <p className='text-3xl font-pop text-black text-center py-6 font-semibold'>Your Cart is Empty</p>
                 }
                </div>


              )}

              {/* Cart Functionality End */}

              <div  onClick={handleAccountOpen}>
                <GiHamburgerMenu className="text-black text-lg cursor-pointer" />
              </div>

              {accountOpen && showAccount && (
                <div
                  ref={accountRef}
                  className="absolute top-full right-0 mt-3 w-64 bg-white border border-gray-200 shadow-lg p-5 z-50"
                >
                  <Link to="/account">
                  <h3 className="text-3xl font-semibold text-gray-700 mb-5">
                    My Account
                  </h3>
                  </Link>

                  <ul className="flex flex-col gap-y-4">
                    <Link to="/login">
                      <li className="text-2xl text-gray-700 font-pop hover:text-orange-500 transition cursor-pointer">
                        Sign in
                      </li>
                    </Link>

                    <Link to="/signup">
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
                          src={Us}
                          alt="USA"
                          className="w-6 h-4 object-cover"
                        />
                        <span className="text-xl text-gray-700">USD</span>
                      </button>
                    </li>

                    <li>
                      <button className="flex items-center gap-3 hover:text-orange-500 transition cursor-pointer">
                        <Image
                          src={Au}
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












    {/* Mobile Responsive Navbar */}
      <nav className="md:hidden bg-back py-7">
      <Container>
        <Flex className="items-center justify-between px-3">
          <div>
            <Link to="/">
              <Image src={Logo} alt="Logo" className="w-30"/>
            </Link>
          </div>

            <div onClick={() => setResMenuOpen(!resMenuOpen)} className='cursor-pointer'>

              {
                resMenuOpen?<RxCross2  className='text-3xl'/>:<IoMdMenu  className="text-3xl" />

              }

            </div>


        </Flex>




        {/* menu */}
          {
            resMenuOpen&&

            <ul className="flex flex-col items-center justify-center gap-10 mt-10">
              <Link onClick={()=>setResMenuOpen(!resMenuOpen)} to="/">
                <ListItem text="Home" />
              </Link>

              <Link onClick={handleBreadAbout}  to="/about">
                <ListItem text="About" />
              </Link>

              <Link onClick={handleBreadContact}  to="/contact">
                <ListItem text="Contact" />
              </Link>

              <Link onClick={handleBreadSignup}  to="/signup">
                <ListItem text="Sign Up" />
              </Link>
            </ul>

          }



          {/* search cart menu */}

          <div className='mt-10 relative'>
            <Flex className="items-center justify-center gap-8">
              {/* Search Functionality Start */}
              <div
                ref={inputRef}
                onClick={handleSearchOpen}
                className="flex items-center gap-2 cursor-pointer"
              >
                <CiSearch className="text-black text-lg" />
                <p className="text-black text-base font-pop font-normal">
                  Search
                </p>
              </div>

              {searchOpen && showInput && (
                <div className="absolute top-8 left-0 flex bg-white items-center justify-between px-3 py-2 w-8/12 shadow-lg rounded-md gap-2 z-50">
                  <input
                    value={input}
                    onChange={searchHandle}
                    onFocus={()=>setShowSearch(true)}
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

              {search.length > 0 && showSearch && (
                <div  ref={searchRef} className="absolute top-18 left-0 w-full  bg-linear-to-r from-black/40 to-black/70 rounded p-5 z-10">
                  {search.map((item, index) => (
                    <ul key={index}>
                      <Link
                        onClick={() => {
                          setInput(item.title)
                          setSearch([])
                        }}
                        to={`productdetails/${item.id}`}
                      >
                        <li className="text-white text-xl font-semibold py-3">
                          {item.title}
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>
              )}

              {/* Search Functionality End */}

              {/* Cart Functionality Start */}

              <div

                onClick={handleCartOpen}
                className="relative flex items-center gap-2 cursor-pointer"
              >
                <IoBagOutline className="text-black text-lg" />
                <p className="text-black text-base font-pop font-normal">
                  Cart
                </p>
                {data.length > 0 && (
                  <div className="absolute -top-3 -right-3 h-5 w-5 rounded-full bg-yellow-400 flex justify-center items-center">
                    <p className="text-black text-sm font-pop font-normal">
                      {data.length}
                    </p>
                  </div>
                )}
              </div>

              {cartOpen && showCart && (
                <div ref={cartRef} className="absolute top-3 left-0 z-50 w-full my-10 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden font-pop">
                  {/* 1. Header Section */}
                  <header className="bg-linear-to-r from-sky-100 via-purple-100 to-pink-100 p-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold pb-1 text-slate-800 tracking-tight">
                        Your Cart
                      </h2>
                      <p className="text-xs font-medium text-slate-500">
                        {`${data.length} items in your cart`}
                      </p>
                    </div>

                    <button className="w-9 h-9 rounded-full bg-white/60 hover:bg-white cursor-pointer  flex items-center justify-center transition-colors shadow-sm">
                      <RxCross2
                        onClick={() => setCartOpen(false)}
                        className="text-3xl text-black/60"
                      />
                    </button>
                  </header>

                  {/* 2. Scrollable Cart Items List */}
                  <div className="max-h-125 overflow-y-auto divide-y divide-slate-100 px-3 py-2 custom-scrollbar">
                    {/* Item 1 */}
                    {
                      data.map((item,index)=>(
                        <div className="py-5 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shrink-0 overflow-hidden p-1">
                        <Image src={item.image}/>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-800 truncate">
                         {item.title.substring(0,15)}
                        </h3>
                        <span className="text-sm font-semibold text-slate-900">
                          ${item.price}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          {/* Quantity Selector */}
                          <div className="flex items-center bg-slate-100 rounded-xl px-2 py-1 cursor-pointer">
                            <button onClick={()=>handleDecrement(item)} className="text-slate-500  px-1 font-medium text-base">
                              -
                            </button>
                            <span className="text-base font-bold text-slate-800 px-2">
                              {item.quantity}
                            </span>
                            <button onClick={()=>handleIncrement(item)} className="text-slate-500  px-1 font-medium text-base cursor-pointer">
                              +
                            </button>
                          </div>

                          {/* Trash Button */}
                          <button onClick={()=>handleRemoveItem(item)} className="text-slate-600 text-xl cursor-pointer hover:text-rose-500 p-1 transition-colors">
                            <RiDeleteBinLine />

                          </button>
                        </div>
                        <p className="text-base text-slate-500 font-medium ">
                          Subtotal:
                          <span className="font-bold text-slate-700 pl-2">
                            {(item.quantity*item.price.toFixed(2))}
                          </span>
                        </p>
                      </div>
                    </div>
                      ))
                    }
                  </div>

                  {/* 3. Footer Section (Modified Layout & Soft Light Aesthetic) */}
                 {
                  data.length>0? <footer className="py-6 px-2 bg-slate-50 border-t border-slate-100 flex flex-col gap-4">
                    {/* Total Price Display */}
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Total
                      </span>
                      <span className="text-2xl font-black text-slate-900 tracking-tight">
                        ${total.toFixed(2)}
                      </span>
                    </div>

                    {/* Action Buttons arranged side-by-side */}
                    <div onClick={()=>setCartOpen(!cartOpen)} className="flex justify-between mt-5">
                      <Link to="/cart">
                      <button className="py-4 px-5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-base uppercase tracking-wider rounded-xl shadow-sm transition-all text-center cursor-pointer">
                        View Cart
                      </button>
                      </Link>

                      <Link to="/checkout">
                      <button  className=" py-4 px-5 bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-base uppercase rounded-xl shadow-md  transition-all text-center cursor-pointer ">
                        <span>Proceed to Checkout</span>
                      </button>
                      </Link>
                    </div>
                  </footer>:
                  <p className='text-3xl font-pop text-black text-center py-6 font-semibold'>Your Cart is Empty</p>
                 }
                </div>


              )}

              {/* Cart Functionality End */}

              <div onClick={handleAccountOpen}>
                <GiHamburgerMenu className="text-black text-lg cursor-pointer" />
              </div>

              {accountOpen && showAccount && (
                <div
                  ref={accountRef}
                  className="absolute top-full right-0 mt-3 w-64 bg-white border border-gray-200 shadow-lg p-5 z-50"
                >
                  <Link to="/account">
                  <h3 className="text-3xl font-semibold text-gray-700 mb-5">
                    My Account
                  </h3>
                  </Link>

                  <ul className="flex flex-col gap-y-4">
                    <Link to="/login">
                      <li className="text-2xl text-gray-700 font-pop hover:text-orange-500 transition cursor-pointer">
                        Sign in
                      </li>
                    </Link>

                    <Link to="/signup">
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
                          src={Us}
                          alt="USA"
                          className="w-6 h-4 object-cover"
                        />
                        <span className="text-xl text-gray-700">USD</span>
                      </button>
                    </li>

                    <li>
                      <button className="flex items-center gap-3 hover:text-orange-500 transition cursor-pointer">
                        <Image
                          src={Au}
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
      </Container>
    </nav>
    </div>
  )
}

export default Navbar
