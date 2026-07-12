import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
      <Container>

        <Title text="Login" className="py-20"/>



          <Flex className="pb-10 justify-between">
            <div className='w-150 bg-back p-8 rounded'>
              <h4 className='text-[#333E48] text-2xl font-pop font-medium pb-5'>Login</h4>


              <Flex className="flex-col ">
                <label className='text-sm text-[#666666] font-pop font-normal pb-2'>Email Address:</label>
                <Input type="email" />
                <label className='text-sm text-[#666666] font-pop font-normal pt-7 pb-2'>Password:</label>
                <Input type="password" />
                <Pera text="Forgot Your Password?" className={`text-black! cursor-pointer pt-3 text-lg!`}/>
              </Flex>
              <Button text="Sign in" className="mt-7"/>


            </div>


            <div className='w-150 bg-back p-8 rounded'>
              <h4 className='text-[#333E48] text-2xl font-pop font-medium pb-5'>New Customer?</h4>
              <Pera text="Create an account with as and you'll be able to: "/>

              <Flex className="flex-col pl-7 pt-6 gap-y-2">
                <Pera text="Check out faster"/>
                <Pera text="Save multiple shipping address"/>
                <Pera text="Access your order history"/>
                <Pera text="Track new orders"/>
                <Pera text="Save items to your Wish list"/>
              </Flex>

              <Link to="/signup">
              <div><Button text="CREATE ACCOUNT" className="mt-12"/></div>
              </Link>

            </div>
          </Flex>


      </Container>
    </section>
  )
}

export default Login
