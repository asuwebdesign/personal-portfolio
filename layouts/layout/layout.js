// Import nodes
import React, { Fragment } from "react"

// Import layouts
import Header from '../header'
import Footer from '../footer'

// Import styles
import './layout.scss'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
