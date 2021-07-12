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
      <title>Branding Strategy &amp; Identity - Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick
        title="Branding Strategy &amp; Identity."
        subtitle="Strengthen your position in the market and emotionally connect with your audience."
      />
      <Poster src={require('../../public/images/banners/banner-branding.jpg?resize')} alt="Sample text for the photo." />
      <Band className="band--numbered">
        <div className="band__title-block">
          <div className="band__number">01</div>
          <h1 className="band__title">About</h1>
        </div>
        <div className="band__content">
          <h2>Why branding matters.</h2>
          <p>In today's digitally-driven world, brands must recognize their customers as users, not just passive consumers of media. As a result, I extend the traditional brand framework of mission, vision and beliefs to include a brand's capability: what the brand must enable users to achieve and also the problem the brand solves for people.</p>
          <img
            srcSet={require('../../public/images/pictures/picture-branding.jpg?resize').srcSet}
            src={require('../../public/images/pictures/picture-branding.jpg?resize').src}
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
            <li className="meta-list__item">Brand positioning</li>
            <li className="meta-list__item">Brand governance</li>
            <li className="meta-list__item">Brand tracking</li>
            <li className="meta-list__item">Brand architecture</li>
            <li className="meta-list__item">Brand capability development</li>
            <li className="meta-list__item">Naming</li>
            <li className="meta-list__item">Integrated marketing strategy</li>
            <li className="meta-list__item">Brand identity and design</li>
            <li className="meta-list__item">Employee engagement</li>
          </ul>
        </div>
      </Band>

      {/* Repeat band for book consult  */}
      <Band>
        <div>Branding</div>
        <h1>Anybody can make your brand look good. I can make your brand matter.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
        <Button label="Get in Touch" href="/contact" />
      </Band>
      {/* Repeat band for book consult */}

    </article>
    <Detour meta="Up Next" title="Creative &amp; Experience Design." link="/services/creative" />
  </Layout>
)

export default PageServices
