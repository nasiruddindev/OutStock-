import React, { useEffect, useState } from 'react'
import Banner from '../layouts/Banner'
import HotDeal from '../layouts/HotDeal'
import Blog from '../layouts/Blog'

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
