import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import BannerImage from '../assets/banner.png'
import Flex from '../components/Flex'
import BannerCard from '../components/BannerCard'
import BannerCardImage1 from '../assets/bannerCard1.png'
import BannerCardImage2 from '../assets/bannerCard2.png'
import BannerCardImage3 from '../assets/bannerCard3.png'

const Banner = () => {

  let [showText,setShowText] = useState(false)


  useEffect(()=>{
    setShowText(true)
  },[])


  return (
    <section>
      <Container>
        <div className="group bg-white shadow-xl p-7.5 w-full">
          <div className='relative'>
            <Image src={BannerImage}  />
          <div className={`absolute bottom-110 left-8 transition-all duration-2000 text-black ${
            showText
            ?"opacity-100 translate-y-100"
            :"opacity-0 translate-y-0"
          }`}>
            <p className="text-xl md:text-2xl font-pop uppercase tracking-widest text-orange-400 font-semibold mb-1">Think Different | Do Otherwise</p>
            <h3 className="text-base md:text-xl font-pop font-medium">Acme Widgets & Designs</h3>
          </div>
          </div>
        </div>

        <Flex className="flex-col md:flex-row gap-y-10 md:gap-y-0 bg-white shadow-xl items-center justify-between px-7.5 pb-12.5">
          <div><BannerCard src={BannerCardImage1} /></div>
          <div><BannerCard src={BannerCardImage2} /></div>
          <div><BannerCard src={BannerCardImage3} /></div>
        </Flex>
      </Container>
    </section>

  )
}

export default Banner
