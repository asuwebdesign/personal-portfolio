// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Band from '../../layouts/band'

// Import elements
import Button from '../../elements/button'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'

// Import vectors
import IconSolutionW from '../../public/vectors/solution-w.svg'

// Render component
const PageServices = props => (
  <Layout {...props}>
    <Head>
      <title>Websites &amp; Digital Platforms - Services | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick
          title="Websites &amp; Digital Platforms."
          subtitle="Strengthen your position in the market and emotionally connect with your audience."
        />
        <Poster src={require('../../public/images/banners/banner-digital.jpg?resize')} alt="Sample text for the photo." />
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">01</div>
            <h1 className="band__title">About</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <img
              srcSet={require('../../public/images/pictures/picture-digital.jpg?resize').srcSet}
              src={require('../../public/images/pictures/picture-digital.jpg?resize').src}
              alt={""}
              loading="lazy"
            />
          </div>
        </Band>
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Services</h1>
          </div>
          <div className="band__content">
            <h2>Code is beautiful.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <ul className="meta-list">
              <li className="meta-list__item">Technical Discovery</li>
              <li className="meta-list__item">Technical Architecture</li>
              <li className="meta-list__item">Full-Stack Development</li>
              <li className="meta-list__item">CMS Implementation</li>
              <li className="meta-list__item">Quality Assurance</li>
              <li className="meta-list__item">Interactive Prototyping</li>
            </ul>
          </div>
        </Band>

        {/* Repeat band for book consult */}
        <Band className="band--service-callout">
          <div className="band__callout-icon">
            <IconSolutionW />
          </div>
          <div className="band__callout-contents">
            <div className="band__callout-meta">Websites &amp; Digital Platforms</div>
            <h1 className="band__callout-title">Don't just meet customer experience expectations. Anticipate and exceed them.</h1>
            <p className="band__callout-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Button label="Get in Touch" href="/contact" />
          </div>
        </Band>
        {/* Repeat band for book consult */}
      </article>
    </main>
    <Detour meta="Up Next – About" title="Pixels, code & tons of video games." link="/about" />
  </Layout>
)

export default PageServices
