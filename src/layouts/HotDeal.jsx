import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Card from '../components/Card'

const HotDeal = () => {

  let [allData,setAllData] = useState([])


  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then((data)=>setAllData(data.products))

  },[])




  return (
    <section>
      <Container>
        <div className='bg-white px-7.5 shadow-xl'>
          <Title text="Hot Deal" className="text-center pt-7.5"/>
        <Pera text="Mirum Est Notare Quam Littera Gothica Quam Nunc Putamus Parum Claram!" className="text-center pt-2"/>

        <Flex className={`py-10 flex-wrap justify-between gap-y-7`}>
          {
            allData.slice(0,8).map((item,index)=>(
              <Card key={index} src={item.thumbnail} text={item.title} salePrice={item.price}/>
            ))
          }
        </Flex>
        </div>
      </Container>
    </section>
  )
}

export default HotDeal
