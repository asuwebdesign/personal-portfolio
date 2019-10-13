// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'

// Import components
import Detour from '../../components/detour'
import Work from '../../components/work'
import Sidekick from '../../components/sidekick'

// Render component
const Projects = props => (
  <Layout>
    <Head>
      <title>Projects</title>
    </Head>

    <article>
      <Sidekick meta="Projects" title="My work includes complex interface systems for web, mobile, and more." />
      <Work />
    </article>
    <Detour meta="Up Next" title="Discover what I do." link="/services" />
  </Layout>
)

export default Projects
