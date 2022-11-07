"use client"
import React from "react"
import { store } from "../store"
import { Provider } from "react-redux"
import Header from "../components/Header"

function Main({ children }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main className="bg-gray-100">{children}</main>
      </Provider>
    </>
  )
}

export default Main
