// Import nodes
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'
import Band from '../../layouts/band'

// Import components
import Detour from '../../components/detour'
import Work from '../../components/work'
import Sidekick from '../../components/sidekick'

// Import elements
import Button from '../../elements/button'

// Render component
const PageProjects = props => (
  <Layout {...props}>
    <Head>
      <title>Projects | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Projects" title="Selected brands &amp; digital products." section />
      <Work />
    </article>
    <Detour meta="Up Next" title="Discover what I do." link="/services" />
  </Layout>
)

export default PageProjects
