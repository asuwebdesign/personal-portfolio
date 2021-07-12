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

// Render component
const PageServices = props => (
  <Layout {...props}>
    <Head>
      <title>Creative &amp; Experience Design - Services | Mark Riggan</title>
    </Head>

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
          <h2>Designing the future.</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          <ul className="meta-list">
            <li className="meta-list__item">Something</li>
            <li className="meta-list__item">Something</li>
            <li className="meta-list__item">Something</li>
            <li className="meta-list__item">Something</li>
            <li className="meta-list__item">Something</li>
            <li className="meta-list__item">Something</li>
            <li className="meta-list__item">Something</li>
          </ul>
        </div>
      </Band>

      {/* Repeat band for book consult */}
      <Band>
        <div>Creative &amp; Experience Design</div>
        <h1>Don’t just meet customer experience expectations. Anticipate and exceed them.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
        <Button label="Get in Touch" href="/contact" />
      </Band>
      {/* Repeat band for book consult */}
    </article>
    <Detour meta="Up Next" title="Research, Data &amp; Analytics." link="/services/research" />
  </Layout>
)

export default PageServices
