import Image from "next/image"
import React from "react"
import { removeProduct, updateProductQuantity } from "../slices/cartSlice"
import { useDispatch } from "react-redux"
import {
  formatDescriptionForCart,
  formatMoney,
  formatShortDescription,
} from "../utils/formatting"
import Link from "next/link"
import { useState } from "react"

export const MAX_ALLOWED_QUANTITY = 9

const CartItem = (props) => {
  const { image, title, id, description, quantity, price } = props
  const [value, setValue] = useState(quantity)
  const dispatch = useDispatch()
  const onRemoveFromCart = () => dispatch(removeProduct({ id }))
  const handleQuantityChange = (e) => {
    let inputValue = e.target.valueAsNumber
    if (isNaN(inputValue)) {
      return
    }
    inputValue =
      parseInt(inputValue) > MAX_ALLOWED_QUANTITY
        ? MAX_ALLOWED_QUANTITY
        : inputValue
    dispatch(
      updateProductQuantity({
        id,
        quantity: inputValue,
      })
    )
    setValue(inputValue)
  }
  const onIncrementQuantity = () => {
    const updatedQuantity =
      quantity + 1 > MAX_ALLOWED_QUANTITY ? MAX_ALLOWED_QUANTITY : quantity + 1
    dispatch(
      updateProductQuantity({
        id,
        quantity: updatedQuantity,
      })
    )
    setValue(updatedQuantity)
  }
  const onDecrementQuantity = () => {
    dispatch(
      updateProductQuantity({
        id,
        quantity: quantity - 1,
      })
    )
    setValue(quantity - 1)
  }
  return (
    <div className="mb-4 flex gap-6 flex-col p-6 sm:flex-row items-center bg-white w-full sm:px-6 rounded-lg shadow">
      <figure>
        <Image
          src={image}
          alt={title}
          width="400"
          height="400"
          objectFit="contain"
          className="object-contain inline-block max-w-[200px] max-h-[200px]"
        />
      </figure>
      <div className="w-full">
        <Link
          href={`/products/${id}`}
          className="text-slate-600 hover:text-black mb-2"
        >
          <h3 className="font-semibold text-2xl ">{title}</h3>
        </Link>
        <p className="text-gray-500 mb-2">
          {formatDescriptionForCart(description)}
        </p>
        <p>
          <strong>Quantity: {quantity}</strong>
        </p>
        <div role="group" className="inline-flex gap-2 items-center">
          <button
            type="button"
            className="text-lg w-6 h-6 border border-solid font-semibold border-gray-200 flex items-center justify-center bg-gray-100"
            onClick={onDecrementQuantity}
          >
            -
          </button>

          <input
            type="number"
            step={1}
            className="appearance-none min-w-10 px-2 border text-center border-solid p-0 border-black"
            value={value}
            onChange={handleQuantityChange}
          />

          <button
            disabled={quantity >= MAX_ALLOWED_QUANTITY}
            type="button"
            className="text-lg disabled:bg-gray-300 disabled:border-gray-400 disabled:cursor-not-allowed w-6 h-6 border border-solid font-semibold border-gray-200 flex items-center justify-center bg-gray-100"
            onClick={onIncrementQuantity}
          >
            +
          </button>
        </div>
        <p>
          <strong>Subtotal: {formatMoney(quantity * price)}</strong>
        </p>
        <button
          type="button"
          onClick={onRemoveFromCart}
          className="mt-4 w-full bg-gradient-to-b from-yellow-400 to-yellow-600 py-4 font-bold shadow rounded focus:outline focus:outline-solid focus:outline-yellow-800 active:bg-gradient-to-b active:from-yellow-500 active:to-yellow-600"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  )
}

export default CartItem
