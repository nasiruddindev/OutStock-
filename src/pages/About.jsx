import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import AboutBanner from '../assets/aboutBanner.png'
import AboutImg from '../assets/about.png'
import { useSelector } from 'react-redux'

const About = () => {

  let breadCrumb1 = useSelector((state)=>state.breadCrumb.currentValue)
  let breadCrumb2 = useSelector((state)=>state.breadCrumb.previousValue)


  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Breadcrumb */}
        <div className="pb-10 pl-5 md:pl-0">
          <ul className="flex items-center flex-wrap gap-2 text-black/50 text-sm font-pop">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            {
              breadCrumb2=="about"? "":<div><Link to={`/${breadCrumb2}`}><span className="font-medium">{breadCrumb2}</span></Link>
            <span>/</span></div>
            }
            <span className="text-black font-medium">{breadCrumb1}</span>
          </ul>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h1 className="text-5xl font-pop font-semibold text-primary tracking-tight leading-tight">
            Timeless Design. <br />
            <span className="text-orange-500">Minimalist Living.</span>
          </h1>
          <p className="mt-6 text-secondary text-lg font-pop leading-relaxed">
            We curate high-quality furniture, modern accessories, and everyday design essentials that bring simplicity, warmth, and high functionality to your space.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-112.5 overflow-hidden rounded-xl mb-20 shadow-xl relative group">
          <Image
            src={AboutBanner}
            alt="Outstock Minimalist Interior Design"
            className="w-full h-full object-cover group-hover:scale-105 duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm font-pop uppercase tracking-widest text-orange-400 font-semibold mb-1">Our Curated Space</p>
            <h3 className="text-2xl font-pop font-medium">Acme Widgets & Designs</h3>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Title text="Our Story" className="mb-12" />
          <Flex className="flex-col md:flex-row gap-12 items-center mt-8">
            <div className="md:w-1/2 px-4">
              <Pera
                text="Founded in Acmeville with a passion for architectural elegance and functional design, Outstock has grown from a local boutique workspace into a premier curator of modern goods. We believe that your home should be your sanctuary—clutter-free, intentionally styled, and filled with products that carry stories."
                className="text-base! leading-relaxed text-secondary"
              />
              <p className="mt-4 text-primary font-pop text-base leading-relaxed">
                We collaborate with legendary brands like <strong>OFS</strong>, <strong>Sagaform</strong>, and <strong>Common Good</strong> to guarantee that every item on our shelves passes a strict test of premium aesthetic, ergonomic comfort, and environment-first footprint.
              </p>
            </div>
            <div className="md:w-1/2 w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={AboutImg}
                alt="Premium furniture crafting"
                className="w-full h-full object-cover"
              />
            </div>
          </Flex>
        </div>

        {/* Core Values Section */}
        <div className="border-t border-black/10 pt-16 mb-20">
          <h3 className="text-3xl font-pop font-semibold text-primary text-center mb-12">Why Shop with Outstock?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="p-8 bg-back rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="text-4xl text-orange-500 font-bold mb-4 block font-pop">01</span>
              <h4 className="text-xl font-pop font-medium text-primary mb-3">Curated Design</h4>
              <p className="text-secondary text-sm leading-relaxed font-pop">
                Every single item in our collection is handpicked by professional designers to ensure it aligns with modern minimalist standards.
              </p>
            </div>

            <div className="p-8 bg-back rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="text-4xl text-orange-500 font-bold mb-4 block font-pop">02</span>
              <h4 className="text-xl font-pop font-medium text-primary mb-3">Sustainable Materials</h4>
              <p className="text-secondary text-sm leading-relaxed font-pop">
                We advocate for slow living and durable furniture crafted with sustainably-sourced wood, metals, and textiles.
              </p>
            </div>

            <div className="p-8 bg-back rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="text-4xl text-orange-500 font-bold mb-4 block font-pop">03</span>
              <h4 className="text-xl font-pop font-medium text-primary mb-3">Seamless Experience</h4>
              <p className="text-secondary text-sm leading-relaxed font-pop">
                Enjoy complimentary shipping on select items, easy 30-day trial returns, and access to dedicated support team representatives.
              </p>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-back text-center py-16 px-6 rounded-2xl shadow-inner mx-4">
          <h3 className="text-3xl font-pop font-medium text-primary mb-4">Ready to elevate your space?</h3>
          <Pera text="Explore our new arrivals and best-selling furniture pieces." className="mb-8 text-base!" />
          <Link to="/">
            <Button text="Shop the Collection" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default About
