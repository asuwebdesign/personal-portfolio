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
      <title>Websites &amp; Digital Platforms - Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Branding Strategy &amp; Identity" title="Branding is what emotionally connects a company with its community." />
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
    </article>
    <Detour meta="Up Next" title="Let's get up close and personal about me, myself, and I." link="/about" />
  </Layout>
)

export default PageServices
