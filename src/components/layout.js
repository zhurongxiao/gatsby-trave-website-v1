import * as React from "react"
import Navbar from "./Navbar"
import "./layout.css"
import Footer from "../components/Footer"

const Layout = ({ children }) => {


  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
