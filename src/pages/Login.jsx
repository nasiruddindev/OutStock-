import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const auth = getAuth()
  const navigate = useNavigate()
  const handleLogin = () => {
    if (!email) {
      setEmailError('Enter Your Email')
    }
    if (!password) {
      setPasswordError('Enter Your Password')
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // console.log(userCredential)
          if (userCredential.user.emailVerified) {
            toast.success('Registration successFul')
            navigate('/')
          } else {
            toast.error('Very your email')
          }
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorMessage.includes('invalid-credential')) {
            toast.error('unmatch email and password')
          }
          console.log(errorMessage)
          console.log(errorCode)
        })
    }
  }

  // Forgot password popup functionallity start
  const [resetEmail, setResetEmail] = useState('')
  const [resetEmailError, setResetEmailError] = useState('')

  let resetPassword = (e) => {
    setResetEmail(e.target.value)
  }

  let handleresetPassword = (e) => {
    if (!resetEmail) {
      setResetEmailError('Enter Your Email')
    }

    const user = auth.currentUser
    const newPassword = getASecureRandomPassword()

    updatePassword(user, newPassword)
      .then(() => {

      })
      .catch((error) => {

      })
  }

  const [openPopup, setOpenPopup] = useState(false)

  const handlePopupOpen = () => {
    setOpenPopup(!openPopup)
    setShowPopup(true)
  }

  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef(null)

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target.value)) {
        setShowPopup(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeaddEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <section>
      {openPopup && showPopup && (
        <div
          ref={popupRef}
          className="absolute top-0 left-0 w-full h-screen bg-black/90 flex justify-center items-center"
        >
          <div className="w-150 bg-back p-8 rounded">
            <h4 className="text-[#333E48] text-4xl font-pop font-medium  text-center pb-10">
              Forgot Password
            </h4>

            <Flex className="flex-col ">
              <label className="text-sm text-[#666666] font-pop font-normal pb-2">
                Email Address:
              </label>

              <Input onChange={resetPassword} type="email" />
              <p className="text-red-700 px-3 py-2 text-base font-pop">
                {resetEmailError}
              </p>
            </Flex>

            <div className="flex gap-x-5 justify-end">
              <div onClick={() => setOpenPopup(!openPopup)}>
                <Button text="Cancel" className="mt-7" />
              </div>

              <div onClick={handleresetPassword}>
                <Button text="send" className="mt-7" />
              </div>
            </div>
          </div>
        </div>
      )}

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
      <Container>
        <Title text="Login" className="py-20" />

        <Flex className="pb-10 justify-between">
          <div className="w-150 bg-back p-8 rounded">
            <h4 className="text-[#333E48] text-2xl font-pop font-medium pb-5">
              Login
            </h4>

            <Flex className="flex-col ">
              <label className="text-sm text-[#666666] font-pop font-normal pb-2">
                Email Address:
              </label>

              <Input onChange={handleEmail} type="email" />
              <p className="text-red-700 px-3 py-2 text-base font-pop">
                {emailError}
              </p>

              <label className="text-sm text-[#666666] font-pop font-normal pt-7 pb-2">
                Password:
              </label>

              <Input onChange={handlePassword} type="password" />
              <p className="text-red-700 px-3 py-2 text-base font-pop">
                {passwordError}
              </p>

              <Pera
                onClick={handlePopupOpen}
                text="Forgot Your Password?"
                className={`text-black! cursor-pointer pt-3 text-lg!`}
              />
            </Flex>
            <div onClick={handleLogin}>
              <Button text="Sign in" className="mt-7" />
            </div>
          </div>

          <div className="w-150 bg-back p-8 rounded">
            <h4 className="text-[#333E48] text-2xl font-pop font-medium pb-5">
              New Customer?
            </h4>
            <Pera text="Create an account with as and you'll be able to: " />

            <Flex className="flex-col pl-7 pt-6 gap-y-2">
              <Pera text="Check out faster" />
              <Pera text="Save multiple shipping address" />
              <Pera text="Access your order history" />
              <Pera text="Track new orders" />
              <Pera text="Save items to your Wish list" />
            </Flex>

            <Link to="/signup">
              <div>
                <Button text="CREATE ACCOUNT" className="mt-12" />
              </div>
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Login
