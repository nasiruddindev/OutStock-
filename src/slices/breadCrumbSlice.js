import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
  name: 'breadCrumb',
  initialState: {
    previousValue: sessionStorage.getItem("pre"),
    currentValue: sessionStorage.getItem("curr"),
  },
  reducers: {
    breadCrumb: (state,action) => {
      state.previousValue=state.currentValue
      state.currentValue=action.payload

      sessionStorage.setItem("pre",JSON.stringify(state.previousValue))
      sessionStorage.setItem("curr",JSON.stringify(state.currentValue))

      },


  },
})

export const { breadCrumb } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer
