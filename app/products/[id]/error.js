"use client"

import Link from "next/link"
import React from "react"

export default function Error() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <p className="text-red-500 font-semibold">
        Something went wrong, please try again later...
      </p>
      <Link href="/" className="text-sm font-semibold mt-2 text-blue-800">
        {"<<"} Go Back
      </Link>
    </div>
  )
}
