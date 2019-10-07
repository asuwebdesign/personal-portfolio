// Import nodes
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

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

    <section>
      <div>Follow Me</div>
      <h1>I'm social. Follow me and stay in the loop.</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
      <ul>
        <li><Link href="#"><a>Behance</a></Link></li>
        <li><Link href="#"><a>Behance</a></Link></li>
        <li><Link href="#"><a>Behance</a></Link></li>
        <li><Link href="#"><a>Behance</a></Link></li>
      </ul>
    </section>

    <section>
      <div>Form</div>
      <h1>Here's a form to tell me something.</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
    </section>
  </Layout>
)

export default Contact
