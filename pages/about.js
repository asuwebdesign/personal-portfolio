// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Detour from '../components/detour'
import Sidekick from '../components/sidekick'
import Services from '../components/services'
import HowWhy from '../components/how-why'

// Import elements
import Image from '../elements/image'

// Render component
const About = props => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>

    <article>
      <Sidekick meta="About Me" title="I'm a full service digital agency built to grow modern brands." />

      <Image src="https://source.unsplash.com/collection/190727" />

      <Services />
      <HowWhy />

      <section>
        <Wrapper>
          <div>Awards &amp; Recognitions</div>
          <h1>Pushing the boundaries and settin the standard.</h1>
          <ul>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
          </ul>
        </Wrapper>
      </section>

      <img src="https://source.unsplash.com/random/640x480" />
    </article>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default About
