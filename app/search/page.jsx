import React from "react"
import Product from "../../components/Product"

import { PRODUCTS_ENDPOINT } from "../../utils/api"

const getProducts = () =>
  fetch(PRODUCTS_ENDPOINT, {
    cache: "no-store",
  }).then((res) => res.json())

export default async function Page() {
  const products = await getProducts()
  return (
    <div className="flex flex-wrap gap-8 p-4 justify-center pt-8">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
