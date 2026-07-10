import { configureStore } from '@reduxjs/toolkit'
import  addToCardSlice  from './slices/addToCardSlice'
import  breadCrumbSlice  from './slices/breadCrumbSlice'

export default configureStore({
  reducer: {
    cart:addToCardSlice,
    breadCrumb:breadCrumbSlice,
  },
})
