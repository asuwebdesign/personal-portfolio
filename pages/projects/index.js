// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'
import Band from '../../layouts/band'

// Import components
import Detour from '../../components/detour'
import Work from '../../components/work'
import Sidekick from '../../components/sidekick'

// Render component
const PageProjects = props => (
  <Layout {...props}>
    <Head>
      <title>Projects | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Projects" title="My work includes complex interface systems for web, mobile, and more." />
      <Work />
      <Band>
        <h1>Behind the scenes</h1>
        <p>Something about my other shots on Dribbble.</p>
      </Band>
    </article>
    <Detour meta="Up Next" title="Discover what I do." link="/services" />
  </Layout>
)

export default PageProjects
