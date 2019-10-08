// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'
import Hero from '../layouts/hero'


// Import elements
import Button from '../elements/button'

// Render component
const Home = props => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <article>
      <Hero />

      <section>
        <Wrapper>
          <h1>Recent Work</h1>
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
          <a href="#">See More Work</a>
        </Wrapper>
      </section>

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
          <div>Select Clients</div>
          <h1>These brands aren't trophies, they're friends that were met on the journey.</h1>
          <img src="https://source.unsplash.com/random/64x64" />
          <img src="https://source.unsplash.com/random/64x64" />
          <img src="https://source.unsplash.com/random/64x64" />
          <img src="https://source.unsplash.com/random/64x64" />
          <img src="https://source.unsplash.com/random/64x64" />
          <img src="https://source.unsplash.com/random/64x64" />
          <img src="https://source.unsplash.com/random/64x64" />
          <img src="https://source.unsplash.com/random/64x64" />
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <div>News + Views</div>
          <h1>Explore recent happenings, press, and perspectives.</h1>
          <article>
            <img src="https://source.unsplash.com/random/400x300" />
            <div>Category</div>
            <h1>Meet Gary Hustwit, Design Nerd Turned Filmaker.</h1>
          </article>
          <article>
            <img src="https://source.unsplash.com/random/400x300" />
            <div>Category</div>
            <h1>Meet Gary Hustwit, Design Nerd Turned Filmaker.</h1>
          </article>
          <article>
            <img src="https://source.unsplash.com/random/400x300" />
            <div>Category</div>
            <h1>Meet Gary Hustwit, Design Nerd Turned Filmaker.</h1>
          </article>
        </Wrapper>
      </section>
    </article>
  </Layout>
)

export default Home
