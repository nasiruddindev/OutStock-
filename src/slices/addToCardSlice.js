import { createSlice } from '@reduxjs/toolkit'

export const addToCardSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocard: (state,action) => {

      let item = state.value.find(item=>item.title==action.payload.title)


        if(item){
          item.quantity+=1
        }else{
          state.value.push(action.payload)
        }

    },
  },
})

export const { addtocard } = addToCardSlice.actions

export default addToCardSlice.reducer
