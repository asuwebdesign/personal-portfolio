// Import nodes
import React, { Fragment } from "react"
import Head from 'next/head'

// Import layouts
import Header from '../header'
import Footer from '../footer'

// Import styles
import '../../styles/main.scss'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#1b1b1c" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="msapplication-TileColor" content="#1b1b1c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" property="google-site-verification" content="T9bAkAJ3wneGw02nYwl8cK-db-qFdRRg1j0Wr75qGX8" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
