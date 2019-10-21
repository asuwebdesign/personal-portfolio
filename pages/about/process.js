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


// Render component
const PageProcess = props => (
  <Layout>
    <Head>
      <title>Process | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Process" title="We are not cookie-cutter, and honestly, neither should you." />

      <Poster />

      <section>
        <Wrapper>
          <h2>Discover</h2>
          <p>Understand your business, industry, and people.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <h2>Plan</h2>
          <p>Understand your business, industry, and people.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <h2>Create</h2>
          <p>Understand your business, industry, and people.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <h2>Build &amp; Deploy</h2>
          <p>Understand your business, industry, and people.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <h2>Measure &amp; Evolve</h2>
          <p>Understand your business, industry, and people.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </Wrapper>
      </section>

    </article>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default PageProcess
