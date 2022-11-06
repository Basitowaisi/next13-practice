"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
// https://blog.appsignal.com/2022/11/02/whats-new-in-nextjs-13.html

const Filters = (props) => {
  const { categories } = props
  const pathname = usePathname()

  return (
    <div className={"bleed-filters-bg-out"}>
      <h1 className="font-bold text-xl">Filters</h1>

      <ul className="flex gap-2 sm:gap-6 mt-2 flex-wrap">
        {categories
          .map((category) => {
            return {
              pathname: `/search/${encodeURIComponent(category)}`,
              label: category,
            }
          })
          .map((category, index) => {
            return (
              <li
                key={category + index}
                className={`capitalize bg-white border border-solid border-slate-200 rounded-full  hover:bg-slate-700 hover:text-white hover:border-slate-600 ${
                  pathname === category.pathname
                    ? "bg-slate-700 text-white border border-solid border-slate-600 font-semibold"
                    : ""
                }`}
              >
                <Link
                  href={category.pathname}
                  className="inline-block w-full h-full px-3 py-1 "
                >
                  {category.label}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Filters
