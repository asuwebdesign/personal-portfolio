// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'
import Process from '../../components/process'


// Render component
const PageProcess = props => (
  <Layout {...props}>
    <Head>
      <title>Process | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Process" title="It always starts with listening to people." section />
        <Poster src={require('../../public/images/banners/banner-dark-hoodie.jpg?resize')} alt="Sample text for the photo." />
        <Process />
      </article>
    </main>
    <Detour meta="Up Next – Manifesto" title="Make something people love." link="/about/manifesto" />
  </Layout>
)

export default PageProcess
