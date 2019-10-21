// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'

// Render component
const PageServices = props => (
  <Layout>
    <Head>
      <title>Research, Data &amp; Analytics - Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Research, Data &amp; Analytics" title="Branding is what emotionally connects a company with its community." />
      <Poster />
    </article>
    <Detour meta="Up Next" title="Let's get up close and personal about me, myself, and I." link="/about" />
  </Layout>
)

export default PageServices
