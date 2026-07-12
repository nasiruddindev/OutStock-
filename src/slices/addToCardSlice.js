import { createSlice } from '@reduxjs/toolkit'

export const addToCardSlice = createSlice({
  name: 'cart',
  initialState: {
    value: sessionStorage.getItem("cart")?JSON.parse(sessionStorage.getItem("cart")):[]
  },
  reducers: {
    addtocard: (state,action) => {

      let item = state.value.find((item)=>item.title==action.payload.title)


        if(item){
          item.quantity+=action.payload.quantity || 1
        }else{
          state.value.push(action.payload)
        }

        sessionStorage.setItem("cart", JSON.stringify(state.value))

      },
      increment: (state,action) => {
        state.value.map((item)=>{
          if(item.title==action.payload.title){
            item.quantity+=1
          }
        })
        sessionStorage.setItem("cart", JSON.stringify(state.value))

      },
      decrement: (state,action) => {
        state.value.map((item,index)=>{
          if(item.title==action.payload.title){
            item.quantity-=1
            if(item.quantity<1){
              state.value.splice(index,1)
            }
          }
        })
        sessionStorage.setItem("cart", JSON.stringify(state.value))

    }
  },
})

export const { addtocard,increment,decrement } = addToCardSlice.actions

export default addToCardSlice.reducer
