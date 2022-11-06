import React from "react"

export default function Loading() {
  return (
    <div className={"flex items-center justify-center min-h-[70vh]"}>
      <span className={"text-gray-500 text-3xl animate-bounce duration-300"}>
        Loading...
      </span>
    </div>
  )
}
