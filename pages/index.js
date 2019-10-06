// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'

// Import elements
import Button from '../elements/button'

// Render component
const Home = props => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>
    <h1>Home</h1>
    <Button />

    {/*

      - Hero + Video
      - 3 Highlights
      - 3 Projects
      - 4 Expertise
      - Logos
      - 3 Articles

      */}


  </Layout>
)

export default Home
