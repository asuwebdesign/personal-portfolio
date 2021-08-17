// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'
import Band from '../layouts/band'

// Import components
import Sidekick from '../components/sidekick'
import Detour from '../components/detour'

// Render component
const PageAccessibility = props => (
  <Layout {...props}>
    <Head>
      <title>Accessibility | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Accessibility" title="Accessibility." section />
        <Band>
          <p>Digital accessibility is the practice of ensuring that websites, web applications, and digital content can be used by the community who have a diverse range of hearing, movement, sight or cognitive abilities.</p>
          <p>We strive to adhere to the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG) 2.0, Level AA standards.</p>
        </Band>
      </article>
    </main>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default PageAccessibility
