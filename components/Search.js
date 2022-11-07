"use client"

import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { useLayoutEffect } from "react"
import { useRef } from "react"

function Search() {
  const router = useRouter()
  const pathname = usePathname()
  const inputRef = useRef()

  let mounted = false
  useLayoutEffect(() => {
    mounted = true
    inputRef.current?.focus()
    return () => {
      mounted = false
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { query } = Object.fromEntries(new FormData(e.target))
    const isSearchPath = pathname.startsWith("/search")
    const pathToSearch = isSearchPath ? pathname : "/search"

    if (query) return router.push(`${pathToSearch}?query=${query}`)
    return router.push(pathToSearch)
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        name="query"
        placeholder="Search..."
        className="text-black px-4 py-2 focus:outline-none rounded"
        ref={inputRef}
      />
      <button
        type="submit"
        className="inline-block sm:hidden bg-blue-500 px-3 py-2 rounded shadow text-sm hover:bg-blue-600 transition ease-linear duration-200"
      >
        Submit
      </button>
    </form>
  )
}

export default Search
