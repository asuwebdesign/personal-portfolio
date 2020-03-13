// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Services from '../../components/services'

// Render component
const PageServices = props => (
  <Layout {...props}>
    <Head>
      <title>Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Services" title="Go from being viable to valuable." section />
      <Services />
    </article>
    <Detour meta="Up Next" title="Branding Strategy &amp; Identity." link="/services/branding" />
  </Layout>
)

export default PageServices
