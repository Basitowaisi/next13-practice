import Link from "next/link"
import React from "react"
import { selectProductsCount } from "../slices/cartSlice"
import { useSelector } from "react-redux"

function Header() {
  const productsInCartCount = useSelector(selectProductsCount)

  const cartCount = productsInCartCount > 0 ? `(${productsInCartCount})` : null

  return (
    <div className="bg-slate-700 text-white flex justify-between items-center px-6 py-4">
      {/* left */}
      <div>
        <Link href="/">
          <h1
            title="XYZ Store"
            className="text-2xl font-bold bg-gradient-to-t from-blue-500 to-white inline-block bg-clip-text text-transparent"
          >
            XYZ Store
          </h1>
        </Link>
      </div>
      {/* right */}
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/search" className="navLink">
              Search
            </Link>
          </li>
          <li>
            <Link href="/cart" className="navLink">
              Cart {cartCount}
            </Link>
          </li>
          {/* <li>
            <Link href="/login" className="navLink">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="navLink">
              Register
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Header
