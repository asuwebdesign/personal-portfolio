// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'

// Import elements
import Button from '../elements/button'

// Render component
const Home = props => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>

    {/*

      - Hero + Video
      - 3 Highlights
      - 3 Projects
      - 4 Expertise
      - Logos
      - 3 Articles

      */}

    <article>
      <header>
        <h1>Connecting brands with people through Handcrafted Digital Experiences.</h1>
        <h2>Human-centered design.</h2>
        <p>Award-winning designs that are data-influenced and made for humans first.</p>
        <h2>Top notch code.</h2>
        <p>Architected and built with the latest technologies for scalability and longevity.</p>
        <h2>Tailored to your business.</h2>
        <p>Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
      </header>

      <section>
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
      </section>

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
      </section>

      <section>
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
      </section>
    </article>
  </Layout>
)

export default Home
