// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Hero from '../components/hero'
import Clients from '../components/clients'
import Detour from '../components/detour'
import News from '../components/news'
import WorkLatest from '../components/work-latest'
import Services from '../components/services'

// Import elements
import Button from '../elements/button'
import MetaLabel from '../elements/meta-label'



// Render component
const Home = props => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <article>

      <Hero />
      <WorkLatest />
      <Services />
      <Clients />
      <News />

    </article>
    <Detour meta="Meta" title="Title" link="/projects" />
  </Layout>
)

export default Home
