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
import WorkLatest from '../components/work-latest'
import Nutshell from '../components/nutshell'

// Import elements
import Button from '../elements/button'
import MetaLabel from '../elements/meta-label'

// Render component
const PageHome = props => (
  <Layout {...props}>
    <Head>
      <title>Mark Riggan | Creative Digital Designer &amp; Developer</title>
      <meta name="title" property="title" content="Mark Riggan | Creative Digital Designer &amp; Developer" />
      <meta name="keywords" property="keywords" content="mark riggan, riggan, creative, digital, design, development, web, nc, raleigh" />
      <meta name="description" property="description" content="Huge is a full service digital agency headquartered in Brooklyn with offices worldwide. We transform brands and build businesses." />

      <meta name="og:title" property="og:title" content="Mark Riggan | Creative Digital Designer &amp; Developer" />
      <meta name="og:description" property="og:description" content="Huge is a full service digital agency headquartered in Brooklyn with offices worldwide. We transform brands and build businesses." />
      <meta name="og:image" property="og:image" content="https://images.contentful.com/fiz3jwws2um7/2wJxuMrVhGAo6cYaYWoQAC/b325d641e66f15ac7bc02b565d0a200b/hello.jpg" />
      <meta name="og:url" property="og:url" content="http://www.hugeinc.com" />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:locale" property="og:locale" content="en_US" />

      <meta name="fb:admins" property="fb:admins" content="25121277" />
      <meta name="fb:app_id" property="fb:app_id" content="308829332568918" />

      <meta name="twitter:account_id" property="twitter:account_id" content="16365983" />
      <meta name="twitter:url" property="twitter:url" content="http://hugeinc.com" />
      <meta name="twitter:card" property="twitter:card" content="summary" />
      <meta name="twitter:site" property="twitter:site" content="@hugeinc" />
      <meta name="twitter:creator" property="twitter:creator" content="@hugeinc" />
      <meta name="twitter:title" property="twitter:title" content="Huge | Digital agency | Digital business | design, marketing, technology" />
      <meta name="twitter:description" property="twitter:description" content="Huge is a full service digital agency headquartered in Brooklyn with offices worldwide. We transform brands and build businesses." />
    </Head>
    <article>

      <Hero />
      <WorkLatest />
      <Nutshell />
      <Clients />
      <News />

    </article>
    <Detour meta="Up Next" title="Explore my work." link="/projects" />
  </Layout>
)

export default PageHome
