// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Band from '../layouts/band'

// Import components
import Sidekick from '../components/sidekick'
import Detour from '../components/detour'

// Render component
const PagePrivacy = props => (
  <Layout {...props}>
    <Head>
      <title>Privacy Policy | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Privacy Policy" title="Your info is secure because I'll never sell." section />
        <Band>
          <p>Awwwards are given to the best CSS websites in the world from the top designers, agencies and bloggers working today. Winners receive recognition, prestige and media presence.</p>
          <p>By accessing our website and/or using our services, you agree to be bound by the following terms and conditions.</p>
        </Band>
      </article>
    </main>
    <Detour meta="Up Next" title="Let's create something together." link="/contact" />
  </Layout>
)

export default PagePrivacy
