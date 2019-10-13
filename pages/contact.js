// Import nodes
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Sidekick from '../components/sidekick'
import Follow from '../components/follow'
import Form from '../components/form'
import Poster from '../components/poster'

// Render component
const Contact = props => (
  <Layout>
    <Head>
      <title>Contact | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Contact" title="Hello, I was hoping you would end up here today. Let's talk." />
      <Poster />
      <Follow />
      <Form />

    </article>
  </Layout>
)

export default Contact
