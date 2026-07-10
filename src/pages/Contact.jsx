import React from 'react'
import Container from '../components/Container'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import { HiOutlinePhone } from 'react-icons/hi2'
import { MdOutlineEmail } from 'react-icons/md'
import Input from '../components/Input'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Contact = () => {


   let breadCrumb1 = useSelector((state)=>state.breadCrumb.currentValue)
   let breadCrumb2 = useSelector((state)=>state.breadCrumb.previousValue)



  return (
    <section className='py-20'>
      <Container>
        <div className="pb-10 pl-5 md:pl-0">
          <ul className="flex items-center flex-wrap gap-2 text-black/50 text-sm font-pop">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            {
              breadCrumb2=="contact"? "":<div><Link to={`/${breadCrumb2}`}><span className="font-medium">{breadCrumb2}</span></Link>
            <span>/</span></div>
            }
            <span className="text-black font-medium">{breadCrumb1}</span>
          </ul>
        </div>

          <Flex className="mt-10 md:mt-15 flex-col md:flex-row gap-y-5 md:gap-y-0 items-center">
            <div className="md:w-4/12">
              <div className="max-w-[320px] shadow md:shadow-2xl py-10 lg:py-13 md:px-4 lg:px-8">
                <div className="flex items-center gap-x-3">
                  <div className="bg-red-600 p-1 rounded-full">
                    <HiOutlinePhone className="text-white text-base" />
                  </div>
                  <h4 className="text-base font-pop font-medium text-black">
                    Call To Us
                  </h4>
                </div>

                <p className="font-pop font-normal text-sm text-black pt-6 pb-4">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="font-pop font-normal text-sm text-black  pb-8 border-b border-[#00000070]">
                  Phone: +8801611112222
                </p>

                <div className="flex items-center gap-x-3 mb-6 mt-8">
                  <div className="bg-red-600 p-1 rounded-full">
                    <MdOutlineEmail className="text-base text-white" />
                  </div>
                  <h4 className="text-base font-pop font-medium text-black">
                    Write To Us
                  </h4>
                </div>

                <p className="font-pop font-normal text-sm text-black">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="font-pop font-normal text-sm text-black  py-4">
                  Emails: customer@outstock.com
                </p>
                <p className="font-pop font-normal text-sm text-black">
                  Emails: support@outstock.com
                </p>
              </div>
            </div>

            <div className="md:w-8/12">
              <div className="shadow-2xl px-4 xl:px-8 py-10">
                <div className="flex flex-wrap  gap-y-5  gap-x-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className={`w-60 bg-back! outline-none rounded`}
                  />

                  <Input
                    type="email"
                    placeholder="Your Email"
                    className={`w-60 bg-back! outline-none rounded`}
                  />

                  <Input
                    type="text"
                    placeholder="Your Phone"
                    className={`w-60 bg-back! outline-none rounded`}
                  />
                </div>
                <textarea
                  placeholder="Your Massage"
                  className={`bg-back! mt-8 w-full h-45 rounded p-2`}
                ></textarea>
                <div className="text-end mt-8">
                  <Button text="Send Massage" />
                </div>
              </div>
            </div>
          </Flex>
      </Container>
    </section>
  )
}

export default Contact
