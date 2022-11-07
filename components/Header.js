"use client"
import Link from "next/link"
import React from "react"
import { selectProductsCount } from "../slices/cartSlice"
import { useSelector } from "react-redux"
import Search from "./Search"

function Header() {
  const productsInCartCount = useSelector(selectProductsCount)

  const cartCount = productsInCartCount > 0 ? `(${productsInCartCount})` : null

  return (
    <div className="flex-col gap-4 sm:gap-0 sm:flex-row bg-slate-700 text-white flex justify-between sm:items-center px-6 py-4">
      {/* left */}
      <div className="text-center sm:text-left">
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
        <ul className="flex gap-6 items-center">
          <li>
            <Search />
          </li>
          <li>
            <Link href="/search" className="navLink">
              Filters
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
