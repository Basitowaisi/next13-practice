import React from "react"
import Filters from "../../components/Filters"
import { CATEGORIES_ENDPOINT } from "../../utils/api"
const getCategories = () =>
  fetch(CATEGORIES_ENDPOINT, {
    cache: "no-store",
  }).then((res) => res.json())

export default async function SearchPageLayout({ children }) {
  const categories = await getCategories()
  return (
    <div className="max-w-7xl mx-auto pt-6 min-h-screen">
      <Filters categories={categories} />
      {children}
    </div>
  )
}
