// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Detour from '../components/detour'

// Render component
const About = props => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>

    <article>
      <header>
        <Wrapper>
          <h1>About</h1>
          <div>We're a full service digital agency built to grow modern brands.</div>
          <img src="https://source.unsplash.com/random/1920x1080" />
        </Wrapper>
      </header>

      {/* copy of section in hp */}
      <section>
        <Wrapper>
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
        </Wrapper>
      </section>

      <section>
        <Wrapper>
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
        </Wrapper>
      </section>

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
    <Detour meta="Meta" title="Title" link="/projects" />
  </Layout>
)

export default About
