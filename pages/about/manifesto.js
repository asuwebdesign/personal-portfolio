// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'
import Manifesto from '../../components/manifesto'

// Render component
const PageManifesto = props => (
  <Layout {...props}>
    <Head>
      <title>Manifesto | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Manifesto" title="It's about pushing the status quo." section />
      <Poster src={require('../../public/images/banners/banner-dark-hoodie.jpg?resize')} alt="Sample text for the photo." />
      <Manifesto />
    </article>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default PageManifesto
