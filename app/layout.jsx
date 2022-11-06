"use client"
import Header from "../components/Header"
import "./globals.css"
import { store } from "../store"
import { Provider } from "react-redux"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <Header />
          <main className="bg-gray-100">{children}</main>
        </Provider>
      </body>
    </html>
  )
}
