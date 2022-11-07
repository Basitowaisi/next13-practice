import React from "react"
import Product from "../../../components/Product"
import { PRODUCTS_ENDPOINT } from "../../../utils/api"

const getProducts = (uri) => {
  return fetch(`${PRODUCTS_ENDPOINT}/category/${uri}`, {
    cache: "force-cache",
  }).then((res) => res.json())
}

export default async function Page({ params, searchParams }) {
  const products = await getProducts(params.category)

  const { query } = searchParams

  let filteredProducts = products
  if (query) {
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase())
    })
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className=" text-center">
          <h2 className=" text-xl font-semibold text-gray-500">
            No results found.
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center pt-8">
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
