import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import BannerImage from '../assets/banner.png'
import Flex from '../components/Flex'
import BannerCard from '../components/BannerCard'
import BannerCardImage1 from '../assets/bannerCard1.png'
import BannerCardImage2 from '../assets/bannerCard2.png'
import BannerCardImage3 from '../assets/bannerCard3.png'

const Banner = () => {
  return (
    <section>
      <Container>
        <div className=" bg-white shadow-xl p-7.5 w-full">
          <div className='relative'>
            <Image src={BannerImage}  />
          <div className="absolute bottom-20 left-8 text-black">
            <p className="text-2xl font-pop uppercase tracking-widest text-orange-400 font-semibold mb-1">Think Different | Do Otherwise</p>
            <h3 className="text-xl font-pop font-medium">Acme Widgets & Designs</h3>
          </div>
          </div>
        </div>

        <Flex className="bg-white shadow-xl justify-between px-7.5 pb-12.5">
          <div><BannerCard src={BannerCardImage1} /></div>
          <div><BannerCard src={BannerCardImage2} /></div>
          <div><BannerCard src={BannerCardImage3} /></div>
        </Flex>
      </Container>
    </section>

  )
}

export default Banner
