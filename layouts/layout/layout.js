// Import nodes
import React from "react"

// Import layouts
import Header from '../header'
import Footer from '../footer'

// Import styles
// import './layout.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
