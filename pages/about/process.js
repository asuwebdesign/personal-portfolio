// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'


// Render component
const PageProcess = props => (
  <Layout>
    <Head>
      <title>Process | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Process" title="I'm a full service digital agency built to grow modern brands." />

      <p>With React Image you can specify multiple images to be used as fallbacks in the event that the browser couldn't load the previous image. Additionally, you can specify any React element to be used before an image is loaded (i.e. a spinner) and in the event than the specified image(s) could not be loaded.</p>

    </article>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default PageProcess
