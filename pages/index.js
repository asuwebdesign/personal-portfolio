// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Hero from '../components/hero'
import Clients from '../components/clients'
import Detour from '../components/detour'
import News from '../components/news'

// Import elements
import Button from '../elements/button'
import MetaLabel from '../elements/meta-label'

// Import vectors
import IconSolutionB from '../public/vectors/solution-b.svg'
import IconSolutionC from '../public/vectors/solution-c.svg'
import IconSolutionR from '../public/vectors/solution-r.svg'
import IconSolutionW from '../public/vectors/solution-w.svg'

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
            <IconSolutionC />
            <h1>Creative &amp; Experience Design</h1>
          </article>
          <article>
            <IconSolutionB />
            <h1>Branding Strategy &amp; Identity</h1>
          </article>
          <article>
            <IconSolutionR />
            <h1>Research, Data &amp; Analytics</h1>
          </article>
          <article>
            <IconSolutionW />
            <h1>Websites &amp; Digital Platforms</h1>
          </article>
        </Wrapper>
      </section>

      <Clients />
      <News />
    </article>
    <Detour meta="Meta" title="Title" link="/projects" />
  </Layout>
)

export default Home
