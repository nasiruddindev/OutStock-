import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import About from './pages/About'
import SignUp from './pages/SignUp'
import LightCartModal from './pages/LightCartModal'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="test" element={<LightCartModal />}></Route>
      <Route path="productdetails/:id" element={<ProductDetailsPage />}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
