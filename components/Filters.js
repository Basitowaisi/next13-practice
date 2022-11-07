"use client"
import React from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
// https://blog.appsignal.com/2022/11/02/whats-new-in-nextjs-13.html

const Filters = (props) => {
  const { categories } = props
  const pathname = usePathname()
  const searchParams = useSearchParams()

  let query = searchParams.get("query") || ""
  query = query == "" ? "" : `?query=${query}`

  const sort = searchParams.get("sort") || ""
  const router = useRouter()

  const onSort = (e) => {
    const { value } = e.target
    const isSearchPath = pathname.startsWith("/search")
    const pathToSearch = isSearchPath ? pathname : "/search"

    if (value) return router.push(`${pathToSearch}?sort=${value}`)
    return router.push(pathToSearch)
  }

  return (
    <div className={"bleed-filters-bg-out"}>
      <h1 className="font-bold text-xl">Filters</h1>

      <ul className="flex gap-2 sm:gap-6 mt-2 flex-wrap items-center">
        {categories
          .map((category) => {
            return {
              pathname: `/search/${encodeURIComponent(category)}`,
              query: query,
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
                  href={category.pathname + category.query}
                  className="inline-block w-full h-full px-3 py-1 "
                >
                  {category.label}
                </Link>
              </li>
            )
          })}
        <li>
          <select
            name="sort"
            id="sort"
            onChange={onSort}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Sort...</option>
            <option value="asc" selected={sort == "asc"}>
              ASC
            </option>
            <option value="desc" selected={sort == "desc"}>
              DESC
            </option>
          </select>
        </li>
      </ul>
    </div>
  )
}

export default Filters
