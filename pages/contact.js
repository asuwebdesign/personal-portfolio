// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'

// Import elements
import Button from '../elements/button'

// Render component
const Contact = props => (
  <Layout>
    <Head>
      <title>Contact</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>
    <h1>Contact</h1>
    <Button />
  </Layout>
)

export default Contact
