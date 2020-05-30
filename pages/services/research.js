// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Band from '../../layouts/band'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'

// Render component
const PageServices = props => (
  <Layout {...props}>
    <Head>
      <title>Research, Data &amp; Analytics - Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick
        title="Research, Data &amp; Analytics."
        subtitle="Strengthen your position in the market and emotionally connect with your audience."
      />
      <Poster src={require('../../public/images/banners/banner-research.jpg?resize')} alt="Sample text for the photo." />
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
            srcSet={require('../../public/images/pictures/picture-research.jpg?resize').srcSet}
            src={require('../../public/images/pictures/picture-research.jpg?resize').src}
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
          <p>While research is a standalone offering, it is also fully integrated into my creative process. Design and creative is continually tested during the development and post-launch optimization of digital experiences.</p>
          <ul className="meta-list">
            <li className="meta-list__item">Contextual Research</li>
            <li className="meta-list__item">Usability Testing</li>
            <li className="meta-list__item">Quantitative Research</li>
            <li className="meta-list__item">User Personas &amp; Scenarios</li>
            <li className="meta-list__item">Data Modeling</li>
            <li className="meta-list__item">Information Architecture</li>
          </ul>
        </div>
      </Band>
    </article>
    <Detour meta="Up Next" title="Websites &amp; Digital Platforms." link="/services/digital" />
  </Layout>
)

export default PageServices
