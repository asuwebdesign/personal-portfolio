// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'

// Import components
import Detour from '../components/detour'
import Sidekick from '../components/sidekick'
import Poster from '../components/poster'
import Services from '../components/services'

// Render component
const PageServices = props => (
  <Layout>
    <Head>
      <title>Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Services" title="I create progress by designing, developing, and securing digital experiences." />
      <Poster />
      <Services />
    </article>
    <Detour meta="Up Next" title="Let's get up close and personal about me, myself, and I." link="/about" />
  </Layout>
)

export default PageServices
