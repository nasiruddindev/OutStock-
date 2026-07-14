import React, { useState } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import SignUpBanner from '../assets/signupbanner.png'
import Image from '../components/Image'
import Input from '../components/Input'
import Button from '../components/Button'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'


const Account = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [nameError, setNameError] = useState()
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_\-+=])[A-Za-z\d@$!%*?&.#^()_\-+=]{8,}$/

  const handleName = (e) => {
    setName(e.target.value)
    setNameError("")
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError("")
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError("")
  }

  const auth = getAuth()
  const navigate = useNavigate()
  const handleCreateAccount = () => {
    if (!name) {
      setNameError('Enter Your Name')
    }
    if (!email) {
      setEmailError('Enter Your Email')
    } else if (!emailRegex.test(email)) {
      setEmailError('Enter a Valid email')
    }
    if (!password) {
      setPasswordError('Enter Your Password')
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'
      )
    }if(name && email && emailRegex.test(email) && password && passwordRegex.test(password)){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
          toast.success("Veryfiy Your Email")
          setTimeout(()=>{
            navigate("/login")
          },1000)
        })
        .catch((error) => {
          const errorMessage = error.message
          console.log(errorMessage)
          if(errorMessage.includes("email-already-in-use")){
            setEmailError("this email is already use")
          }
        })
    }
  }

  return (
    <section className="py-20">
      <Container>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Flex className="flex-col gap-y-15 md:gap-y-0 md:flex-row items-center">
          <div className="md:w-8/12 p-2 md:p-0 md:pr-4 lg:pr-10">
            <Image src={SignUpBanner} />
          </div>

          <div className="sm:w-7/12 md:w-4/12 p-2 md:p-0">
            <h4 className="font-medium md:text-3xl lg:text-4xl text-black font-inter">
              Create an account
            </h4>
            <p className="font-normal font-pop text-base text-black pt-6">
              Enter your details below
            </p>

            <Input
              onChange={handleName}
              type="text"
              placeholder="Name"
              className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"
            />
            <p className="text-red-700 px-3 py-2 text-base font-pop">
              {nameError}
            </p>

            <Input
              onChange={handleEmail}
              type="email"
              placeholder="Email or Phone Number"
              className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"
            />
            <p className="text-red-700 px-3 py-2 text-base font-pop">
              {emailError}
            </p>

            <Input
              onChange={handlePassword}
              type="text"
              placeholder="Password"
              className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"
            />
            <p className="text-red-700 px-3 py-2 text-base font-pop">
              {passwordError}
            </p>

            <div className="mt-10 ">
              <div onClick={handleCreateAccount}>
                <Button text="Create Account" className="w-full" />
              </div>

              <div className="border border-[#00000066] w-full py-4 mt-4 mb-8 flex justify-center items-center gap-x-3">
                <FcGoogle className="text-2xl" />
                <button className=" text-base font-pop font-normal text-black ">
                  {' '}
                  Sign up with Google
                </button>
              </div>
              <p className="font-pop text-base font-normal text-[#00000070]">
                Already have account?{' '}
                <Link to="/login">
                  <span className="font-medium text-black underline pl-2 cursor-pointer">
                    Log in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Account
