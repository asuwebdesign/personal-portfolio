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

// Import images
import PosterSrc from '../../public/posters/poster-creative-process.jpg'

// Render component
const PageProcess = props => (
  <Layout {...props}>
    <Head>
      <title>Process | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Process" title="It always starts with listening to people." section />
        <Poster src={PosterSrc} alt="laptop screen webcam view diverse people engaged in group videocall" />
        <Process />
      </article>
    </main>
    <Detour meta="Up Next – Manifesto" title="Make something people love." link="/about/manifesto" />
  </Layout>
)

export default PageProcess
