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
import Account from './pages/Account'
import Cart from './pages/Cart'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="account" element={<Account />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="contact" element={<Contact />}></Route>
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
