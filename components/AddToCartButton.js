"use client"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addProduct, selectProducts } from "../slices/cartSlice"

export default function AddToCartButton(product) {
  const dispatch = useDispatch()
  const onAddToCart = () => {
    dispatch(addProduct(product))
  }

  const productInCart = useSelector(selectProducts)

  return (
    <>
      <button
        type="button"
        onClick={onAddToCart}
        className="mt-4 w-full bg-gradient-to-b from-yellow-400 to-yellow-600 py-4 font-bold shadow rounded focus:outline focus:outline-solid focus:outline-yellow-800 active:bg-gradient-to-b active:from-yellow-500 active:to-yellow-600"
      >
        Add To Bag
      </button>
      {/* <pre>{JSON.stringify(productInCart, null, 2)}</pre> */}
    </>
  )
}
