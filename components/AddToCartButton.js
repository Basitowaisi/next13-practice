"use client"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addProduct, selectProducts } from "../slices/cartSlice"
import { MAX_ALLOWED_QUANTITY } from "./CartItem"

export default function AddToCartButton(props) {
  const { product } = props
  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addProduct(product))
  }
  const productInCart = useSelector(selectProducts)
  const quantity = productInCart.find((p) => p.id === product.id)?.quantity ?? 0

  return (
    <>
      <button
        disabled={quantity >= MAX_ALLOWED_QUANTITY}
        type="button"
        onClick={onAddToCart}
        className="disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:border-gray-400 disabled:text-gray-500 mt-4 w-full bg-gradient-to-b from-yellow-400 to-yellow-600 py-4 font-bold shadow rounded focus:outline focus:outline-solid focus:outline-yellow-800 active:bg-gradient-to-b active:from-yellow-500 active:to-yellow-600"
      >
        Add To Cart
      </button>
      {/* <pre>{JSON.stringify(productInCart, null, 2)}</pre> */}
    </>
  )
}
