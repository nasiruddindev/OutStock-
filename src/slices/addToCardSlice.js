import { createSlice } from '@reduxjs/toolkit'

export const addToCardSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocard: (state,action) => {

      let item = state.value.find((item)=>item.title==action.payload.title)


        if(item){
          item.quantity+=1
        }else{
          state.value.push(action.payload)
        }

    },
    increment: (state,action) => {
      state.value.map((item)=>{
        if(item.title==action.payload.title){
          item.quantity+=1
        }
      })

    },
    decrement: (state,action) => {

    }
  },
})

export const { addtocard,increment,decrement } = addToCardSlice.actions

export default addToCardSlice.reducer
