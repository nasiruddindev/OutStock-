import { configureStore } from '@reduxjs/toolkit'
import  addToCardSlice  from './slices/addToCardSlice'

export default configureStore({
  reducer: {
    cart:addToCardSlice,
  },
})
