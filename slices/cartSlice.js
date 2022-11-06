import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload.product

      const alreadyInCartIndex = state.products.findIndex(
        (p) => p.id === product.id
      )
      if (alreadyInCartIndex != -1) {
        state.products[alreadyInCartIndex].quantity += 1
      } else {
        state.products.push({ ...product, quantity: 1 })
      }
    },
    removeProduct: (state, action) => {
      console.log(action.payload)
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions

export const selectProducts = (state) => state.cart.products
export const selectProductsCount = (state) => state.cart.products.length

export default cartSlice.reducer
