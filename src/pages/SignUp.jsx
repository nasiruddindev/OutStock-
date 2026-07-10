import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import SignUpBanner from '../assets/signupbanner.png'
import Image from '../components/Image'
import Input from '../components/Input'
import Button from '../components/Button'
import { FcGoogle } from 'react-icons/fc'

const Account = () => {
  return (
    <section className='py-20'>
      <Container>
        <Flex className="flex-col gap-y-15 md:gap-y-0 md:flex-row items-center">
            <div className='md:w-8/12 p-2 md:p-0 md:pr-4 lg:pr-10'>
        <Image src={SignUpBanner}/>

            </div>


            <div className='sm:w-7/12 md:w-4/12 p-2 md:p-0'>
            <h4 className='font-medium md:text-3xl lg:text-4xl text-black font-inter'>Create an account</h4>
            <p className='font-normal font-pop text-base text-black pt-6'>Enter your details below</p>


            <Input type="text" placeholder="Name" className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"/>


            <Input type="text" placeholder="Email or Phone Number" className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"/>


            <Input type="password" placeholder="Password" className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"/>

            <div className='mt-10 '>
              <Button text="Create Account" className="w-full"/>

              <div className='border border-[#00000066] w-full py-4 mt-4 mb-8 flex justify-center items-center gap-x-3'>
                <FcGoogle className='text-2xl'/>
                <button className=' text-base font-pop font-normal text-black '> Sign up with Google</button>
              </div>
              <p className='font-pop text-base font-normal text-[#00000070]'>Already have account? <span className='font-medium text-black underline pl-2 cursor-pointer'>Log in</span></p>
            </div>
            </div>
          </Flex>
      </Container>
    </section>
  )
}

export default Account
