// Import nodes
import React, { Fragment } from "react"
import Head from 'next/head'

// Import layouts
import Header from '../header'
import Footer from '../footer'

// Import components
import Cursor from '../../components/cursor'

// Import styles
import './layout.scss'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
