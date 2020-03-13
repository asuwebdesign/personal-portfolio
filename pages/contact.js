// Import nodes
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Sidekick from '../components/sidekick'
import FormFollow from '../components/form-follow'

// Render component
const PageContact = props => (
  <Layout {...props}>
    <Head>
      <title>Contact | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Contact" title="Let's team up together." section />
      <FormFollow />
    </article>
  </Layout>
)

export default PageContact
