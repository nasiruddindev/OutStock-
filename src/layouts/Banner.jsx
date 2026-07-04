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
        <div className="bg-white shadow-xl p-7.5">
          <Image src={BannerImage}  />
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
