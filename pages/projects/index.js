// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'

// Render component
const Projects = props => (
  <Layout>
    <Head>
      <title>Projects</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>

    <article>
      <header>
        <h1>Projects</h1>
        <div>Works include complex interface systems for web, mobile, and more.</div>
      </header>
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
    </article>
  </Layout>
)

export default Projects
