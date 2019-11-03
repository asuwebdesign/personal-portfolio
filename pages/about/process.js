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
  <Layout>
    <Head>
      <title>Process | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Process" title="We are not cookie-cutter, and honestly, neither should you." />
      <Poster src="/images/sample.jpg" alt="Sample text for the photo." />
      <Process />
    </article>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default PageProcess
