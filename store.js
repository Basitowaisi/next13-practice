import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"

// preload reducer with state from localStorage
const getPreloadedState = () => {
  const preloadedState = localStorage.getItem("appState")
  if (preloadedState != null) {
    return JSON.parse(preloadedState)
  }
  return {}
}

//  whenever the state changes, save it to localStorage
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action)
    localStorage.setItem("appState", JSON.stringify(getState()))
    return result
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: getPreloadedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})
