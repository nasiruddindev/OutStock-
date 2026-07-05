import React, { useEffect, useState } from 'react'
import Navbar from '../layouts/Navbar'
import Banner from '../layouts/Banner'
import HotDeal from '../layouts/HotDeal'
import Blog from '../layouts/Blog'
import Footer from '../layouts/Footer'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <>
      <Banner />
      <HotDeal products={products} />
      <Blog products={products} />
    </>
  )
}

export default Home
