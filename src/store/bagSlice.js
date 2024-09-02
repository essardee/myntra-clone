import { createSlice } from "@reduxjs/toolkit"

const bagSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addToBag: (store,action) => {
      store.push(action.payload)
    },
    removeFromBag: (store,action) => {
      return store.filter(item => item.id !== action.payload.id)
    }
  }
})

export const bagActions = bagSlice.actions;

export default bagSlice;