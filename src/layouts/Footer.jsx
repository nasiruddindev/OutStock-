import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import Flex from '../components/Flex'
import Pera from '../components/Pera'

const Footer = () => {
  return (
    <section className='pb-29'>
      <Container>
        <div className='bg-back px-7.5  py-10'>
          <Flex className="flex-col sm:flex-row items-center sm:items-start gap-y-10 md:gap-y-0">
            <div className='sm:w-6/12'>

            <Image src={Logo} className="mx-auto sm:mx-0"/>

            <div className='text-center sm:text-start'>
              <Pera text=" Addresses : Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America" className="sm:max-w-8/12 pt-8"/>

            <Pera text="Email:  contact@bigecommerce.com" className={`py-4 text-orange-500!`}/>

            <Pera text="Call us at (1800)-000-6890"/>
            </div>
            </div>


            <div className='sm:w-2/12'>

            <h4 className="text-lg text-primary font-pop font-medium pb-8">Navigate</h4>

            <Flex className="flex-col gap-4">
              <Pera text="Blog"/>
              <Pera text="Shipping & Returns"/>
              <Pera text="Contact Us"/>
              <Pera text="RSS Syndication"/>
              <Pera text="Sitemap"/>
            </Flex>

            </div>
            <div className='sm:w-2/12'>

            <h4 className="text-lg text-primary font-pop font-medium pb-8">Popular Brands</h4>

            <Flex className="flex-col gap-4">
              <Pera text="OFS"/>
              <Pera text="Common Good"/>
              <Pera text="Sagaform"/>
            </Flex>

            </div>
            <div className='sm:w-2/12'>

            <h4 className="text-lg text-primary font-pop font-medium pb-8">Categories</h4>

            <Flex className="flex-col gap-4">
              <Pera text="Hot Deal"/>
              <Pera text="Chair Kimi"/>
              <Pera text="Scarf Moss"/>
              <Pera text="Litter Trees"/>
              <Pera text="Publications"/>
            </Flex>

            </div>


          </Flex>
        </div>
      </Container>
    </section>
  )
}

export default Footer
