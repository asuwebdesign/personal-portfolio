// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'
import Band from '../../layouts/band'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Skills from '../../components/skills'
import HowWhy from '../../components/how-why'
import Poster from '../../components/poster'
import Awards from '../../components/awards'

// Render component
const PageAbout = props => (
  <Layout {...props}>
    <Head>
      <title>About | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="About" title="Pixels, code &amp; tons of video games." section />
        <Poster
          className="poster--about"
          src={require('../../public/images/pictures/picture-ninja-background.png?resize')}
          foreground={require('../../public/images/pictures/picture-ninja.png?resize')}
          alt="Sample text for the photo."
        />
        <Skills />
        <HowWhy />
        <Band className="band--testimonial" div>
          <blockquote>
            <p>We couldn't have done it without you, Focus Lab. You have been such an incredible partner over the past 12 months. Thank you to all of the amazing team who worked with us!</p>
          </blockquote>
        </Band>
        <Awards />
      </article>
    </main>
    <Detour meta="Up Next" title="Get in touch with me about your project, something random, or just to say hello." link="/contact" />
  </Layout>
)

export default PageAbout
