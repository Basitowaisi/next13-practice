"use client"

import React, { use } from "react"
import { selectProducts, selectProductsCount } from "../../slices/cartSlice"
import { useSelector } from "react-redux"
import CartItem from "../../components/CartItem"
import Link from "next/link"
import { formatMoney } from "../../utils/formatting"

// const getTodos = () =>
//   fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json())

export default function page() {
  // test call to api

  // const data = use(getTodos())
  // console.log(data)

  const productsInCart = useSelector(selectProducts)
  const productsCount = useSelector(selectProductsCount)
  const totalAmount = productsInCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  const extraClasses =
    productsCount > 0 ? "" : "flex flex-col items-center justify-center"
  return (
    <div
      className={`min-h-screen gap-4 max-w-7xl mx-auto justify-center p-4 pt-8 ${extraClasses}`}
    >
      {productsInCart.length > 0 ? (
        <div className="w-full">
          <div className="flex justify-between my-6">
            <h2 className="text-xl sm:text-3xl font-semibold">
              Your cart: ({productsCount} items)
            </h2>
            <h3 className="text-xl sm:text-3xl font-semibold">
              Total: {formatMoney(totalAmount)}
            </h3>
          </div>

          {productsInCart.map((product) => (
            <CartItem {...product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className=" text-center">
          <h2 className=" text-3xl font-semibold">Your cart is empty.</h2>
          <p className="text-gray-600">
            Please go the{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              products page
            </Link>{" "}
            and add items to the cart.
          </p>
        </div>
      )}
    </div>
  )
}
