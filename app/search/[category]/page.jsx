import React from "react"
import Product from "../../../components/Product"
import { PRODUCTS_ENDPOINT } from "../../../utils/api"

const getProducts = (uri) => {
  return fetch(`${PRODUCTS_ENDPOINT}/category/${uri}`, {
    cache: "force-cache",
  }).then((res) => res.json())
}

export default async function Page({ params }) {
  const products = await getProducts(params.category)
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center pt-8">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
