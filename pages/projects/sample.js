// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'

// Render component
const ProjectSample = props => (
  <Layout>
    <Head>
      <title>Projects</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>

    <article>
      <header>
        <div>Ubisoft</div>
        <h1>Engaging worldwide gamers through branding and marketing.</h1>
        <ul>
          <li>Creative &amp; Experience Design</li>
          <li>Creative &amp; Experience Design</li>
          <li>Creative &amp; Experience Design</li>
        </ul>
        <img src="https://source.unsplash.com/random/1920x1080" />
      </header>
      <section>
        <img src="https://source.unsplash.com/random/320x320" />
        <h1>About Ubisoft</h1>
        <p>Ubisoft is a French video game company headquartered in Montreuil with several development studios across the world.</p>
        <h2>What we did</h2>
        <ul>
          <li>Branding</li>
          <li>Branding</li>
          <li>Branding</li>
          <li>Branding</li>
        </ul>
      </section>
      <section>
        <h1>01 Highlights</h1>
        <h2>A partnership for the ages.</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
      </section>
    </article>
  </Layout>
)

export default ProjectSample
