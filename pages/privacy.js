// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Render component
const Privacy = props => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>

    <article>
      <header>
        <Wrapper>
          <h1>Privacy</h1>
          <div>We're a full service digital agency built to grow modern brands.</div>
        </Wrapper>
      </header>
      <section>
        <Wrapper>
          <p>Awwwards are given to the best CSS websites in the world from the top designers, agencies and bloggers working today. Winners receive recognition, prestige and media presence.</p>
          <p>By accessing our website and/or using our services, you agree to be bound by the following terms and conditions.</p>
        </Wrapper>
      </section>
    </article>
  </Layout>
)

export default Privacy
