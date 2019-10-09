// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'

// Import components
import Detour from '../../components/detour'

// Render component
const Projects = props => (
  <Layout>
    <Head>
      <title>Projects</title>
    </Head>

    <article>
      <header>
        <Wrapper>
          <h1>Projects</h1>
          <div>Works include complex interface systems for web, mobile, and more.</div>
        </Wrapper>
      </header>
      <Wrapper>
        <article>
          <img src="https://source.unsplash.com/random/400x600" />
          <div>Red Hat</div>
          <h1>Engaging worldwide gamers through branding and marketing.</h1>
        </article>
        <article>
          <img src="https://source.unsplash.com/random/400x600" />
          <div>Red Hat</div>
          <h1>Engaging worldwide gamers through branding and marketing.</h1>
        </article>
        <article>
          <img src="https://source.unsplash.com/random/400x600" />
          <div>Red Hat</div>
          <h1>Engaging worldwide gamers through branding and marketing.</h1>
        </article>
        <article>
          <img src="https://source.unsplash.com/random/400x600" />
          <div>Red Hat</div>
          <h1>Engaging worldwide gamers through branding and marketing.</h1>
        </article>
        <article>
          <img src="https://source.unsplash.com/random/400x600" />
          <div>Red Hat</div>
          <h1>Engaging worldwide gamers through branding and marketing.</h1>
        </article>
        <article>
          <img src="https://source.unsplash.com/random/400x600" />
          <div>Red Hat</div>
          <h1>Engaging worldwide gamers through branding and marketing.</h1>
        </article>
      </Wrapper>
    </article>
    <Detour meta="Meta" title="Title" link="/projects" />
  </Layout>
)

export default Projects
