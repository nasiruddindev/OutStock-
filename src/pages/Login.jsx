import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Input from '../components/Input'

const Login = () => {
  return (
    <section>
      <Container>

        <Title text="Login" className="pt-13 pb-5"/>
        <ul className="flex justify-center items-center flex-wrap gap-2 pb-10">
          <Pera text="gfasf" className={`text-black/50!`}/>
          /
          <Pera text="gfasf" className={`text-black/50!`}/>
          /
          <Pera text="gfasf" className={`text-black/50!`}/>

          </ul>


          <Flex className="pb-10 justify-between">
            <div className='w-150 bg-back p-8'>
              <h4 className='text-[#333E48] text-xl font-pop font-medium pb-5'>Login</h4>


              <Flex className="flex-col gap-y-2">
                <label className='text-sm text-[#666666] font-pop font-normal '>Email Address:</label>
                <Input type="email" />
                <label className='text-sm text-[#666666] font-pop font-normal pt-5'>Password:</label>
                <Input type="password" />
              </Flex>

            </div>


            <div className='w-150 bg-back p-8 '></div>
          </Flex>


      </Container>
    </section>
  )
}

export default Login
