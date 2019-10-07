// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'

// Render component
const About = props => (
  <Layout>
    <Head>
      <title>About</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>

    <h1>About</h1>
    <div>We're a full service digital agency built to grow modern brands.</div>

    <img src="https://source.unsplash.com/random/1920x1080" />

    {/* copy of section in hp */}
    <section>
      <div>In a Nutshell</div>
      <h1>Making the complex simple, then the simple delightful.</h1>
      <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
      <a href="#">Explore What I Do</a>
      <article>
        <h1>Creative &amp; Experience Design</h1>
      </article>
      <article>
        <h1>Branding Strategy &amp; Identity</h1>
      </article>
      <article>
        <h1>Research, Data &amp; Analytics</h1>
      </article>
      <article>
        <h1>Websites &amp; Digital Platforms</h1>
      </article>
    </section>

    <section>
      <article>
        <img src="https://source.unsplash.com/random/640x480" />
        <div>How I Do It</div>
        <h1>Our process empowers us to make amazing things.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <a href="#">Our Process</a>
      </article>
      <article>
        <img src="https://source.unsplash.com/random/640x480" />
        <div>How I Do It</div>
        <h1>Our process empowers us to make amazing things.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <a href="#">Our Process</a>
      </article>
    </section>

    <section>
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
    </section>

    <img src="https://source.unsplash.com/random/640x480" />

  </Layout>
)

export default About
