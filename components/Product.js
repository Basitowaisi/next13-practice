import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  formatMoney,
  formatShortDescription,
  formatShortTitle,
} from "../utils/formatting"
import styles from "./Product.module.css"

const Product = (props) => {
  const { id, title, price, description, category, image } = props
  return (
    <div
      className={`shadow rounded-lg ${styles.root} hover:scale-105 transition duration-200 ease-in-out`}
    >
      <Link href={`/products/${id}`} className="inline-block w-full h-full p-6">
        <figure className="text-center flex justify-center mb-4 h-[200px]">
          <Image
            src={image}
            width="200"
            height="200"
            className="object-contain inline-block"
            alt={title}
          />
        </figure>

        <h2 className="font-semibold mb-2 text-black capitalize" title={title}>
          {formatShortTitle(title)}
        </h2>
        <p className="text-gray-700 mb-2">
          {formatShortDescription(description)}
        </p>
        <p className="font-semibold">{formatMoney(price)}</p>
      </Link>
    </div>
  )
}

export default Product
