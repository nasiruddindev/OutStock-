import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import BlogCard from '../components/BlogCard'

const Blog = ({ products }) => {

  return (
    <section className='pb-100'>
      <Container>
        <div className='bg-white shadow-xl px-7.5'>
          <Title text="Our Blog Posts"/>
          <Pera text="Mirum est notare quam littera gothica quam nunc putamus parum claram!" className="text-center pt-4"/>



          <Flex className="justify-between py-13">
            {
              products.slice(17,20).map((item,index)=>(
                <BlogCard src={item.thumbnail} title={item.title} description={item.description}/>
              ))
            }

          </Flex>



        </div>
      </Container>
    </section>
  )
}

export default Blog
