import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />

      <main>{children}</main>

    </>
  )
}

export default Layout
