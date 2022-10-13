import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
// import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
