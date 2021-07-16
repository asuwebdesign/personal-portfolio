// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Nutshell from '../../components/nutshell'
import HowWhy from '../../components/how-why'
import Poster from '../../components/poster'
import Awards from '../../components/awards'

// Render component
const PageAbout = props => (
  <Layout {...props}>
    <Head>
      <title>About | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="About" title="Pixels, code &amp; tons of video games." section />
        <Poster src={require('../../public/images/banners/banner-deadmau5.jpg?resize')} alt="Sample text for the photo." />
        <Nutshell />
        <HowWhy />
        <Awards />
      </article>
    </main>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default PageAbout
