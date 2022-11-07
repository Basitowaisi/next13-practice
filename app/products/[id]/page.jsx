import Image from "next/image"
import Link from "next/link"
import React from "react"
import AddToCartButton from "../../../components/AddToCartButton"
import { PRODUCTS_ENDPOINT } from "../../../utils/api"
import { formatMoney, formatNumber } from "../../../utils/formatting"

const getProducts = async () =>
  fetch(PRODUCTS_ENDPOINT, {
    cache: "force-cache",
    // next: {
    //   revalidate: 10,
    // },
  }).then((res) => res.json())

// export const generateStaticParams = async () => {
//   const products = await getProducts()
//   return products.map((product) => ({
//     id: String(product.id),
//   }))
// }

const getSingleProduct = (id) =>
  fetch(`${PRODUCTS_ENDPOINT}/${id}`, {
    cache: "force-cache",
    // cache: "no-store",
    // next: {
    //   revalidate: 10,
    // },
  }).then((res) => {
    if (res.status >= 400) {
      return res.json().then((data) => {
        let e = new Error()
        e = Object.assign(e, data)

        throw e
      })
    }
    return res.json()
  })

export default async function Page({ params }) {
  let product
  try {
    product = await getSingleProduct(params.id)
  } catch (e) {
    throw new Error(e)
  }

  return (
    <div className="min-h-screen gap-4 max-w-7xl mx-auto p-4 pt-8 flex flex-wrap mt-12 ">
      {/* left */}
      <div>
        <figure className="flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width="400"
            height="300"
            className="object-contain inline-block max-w-[500px] max-h-[300px]"
          />
        </figure>
      </div>
      {/* right */}
      <div className="max-w-xl sm:ml-12">
        <p>
          <Link
            href="/"
            className="text-blue-700 hover:underline hover:text-blue-800 transition ease-linear duration-150"
          >
            {" "}
            {"<<"} Back{" "}
          </Link>
        </p>

        <p className="mt-4 px-3 py-1 capitalize bg-gray-100 border border-solid border-slate-200 rounded-full inline-block">
          {product.category}
        </p>
        {product?.rating?.count && (
          <p className="mt-4 text-sm text-blue-900">
            {formatNumber(product.rating.count * 100)} ratings
          </p>
        )}
        <p className="mt-4 text-black text-2xl font-bold leading-snug sm:hidden">
          {formatMoney(product.price)}
        </p>

        <h1 className="mt-4 font-bold text-xl ">{product.title}</h1>

        <p className="mt-4 text-gray-500 leading-snug">{product.description}</p>
        <p className="mt-4 text-black text-3xl font-bold leading-snug hidden sm:block">
          {formatMoney(product.price)}
        </p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}
