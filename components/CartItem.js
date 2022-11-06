import Image from "next/image"
import React from "react"
import { removeProduct } from "../slices/cartSlice"
import { useDispatch } from "react-redux"
import {
  formatDescriptionForCart,
  formatMoney,
  formatShortDescription,
} from "../utils/formatting"
import Link from "next/link"

const CartItem = (props) => {
  const { image, title, id, description, quantity, price } = props
  const dispatch = useDispatch()
  const onRemoveFromCart = () => dispatch(removeProduct({ id }))
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
