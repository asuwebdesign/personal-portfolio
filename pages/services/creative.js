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
import IconSolutionC from '../../public/vectors/solution-c.svg'

// Render component
const PageServices = props => (
  <Layout {...props}>
    <Head>
      <title>Creative &amp; Experience Design - Services | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick
          title="Creative &amp; Experience Design."
          subtitle="Strengthen your position in the market and emotionally connect with your audience."
        />
        <Poster src={require('../../public/images/banners/banner-creative.jpg?resize')} alt="Sample text for the photo." />
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
              srcSet={require('../../public/images/pictures/picture-creative.jpg?resize').srcSet}
              src={require('../../public/images/pictures/picture-creative.jpg?resize').src}
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
            <h2>Fulfill brand promises with delight.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <ul className="meta-list">
              <li className="meta-list__item">Experience Strategy</li>
              <li className="meta-list__item">eCommerce &amp; Websites</li>
              <li className="meta-list__item">Digital Product &amp; Services</li>
              <li className="meta-list__item">Design System &amp; Style Guides</li>
              <li className="meta-list__item">iOS &amp; Android Applications</li>
              <li className="meta-list__item">Prototyping &amp; Optimization</li>
              <li className="meta-list__item">Content Strategy</li>
              <li className="meta-list__item">Art Direction</li>
              <li className="meta-list__item">Motion Graphics</li>
            </ul>
          </div>
        </Band>

        {/* Repeat band for book consult */}
        <Band className="band--service-callout">
          <div className="band__callout-icon">
            <IconSolutionC />
          </div>
          <div className="band__callout-contents">
            <div className="band__callout-meta">Creative &amp; Experience Design</div>
            <h1 className="band__callout-title">Don't just meet customer experience expectations. Anticipate and exceed them.</h1>
            <p className="band__callout-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Button label="Get in Touch" href="/contact" />
          </div>
        </Band>
        {/* Repeat band for book consult */}
      </article>
    </main>
    <Detour meta="Up Next" title="Research, Data &amp; Analytics." link="/services/research" />
  </Layout>
)

export default PageServices
