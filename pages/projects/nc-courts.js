// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'
import Band from '../../layouts/band'

// Import components
import Cover from '../../components/cover'
import Detour from '../../components/detour'

// Import images
import ProjectCover from '../../public/images/covers/cover-atlanticbt.jpg'

// Render component
const ProjectDetail = props => (
  <Layout {...props}>
    <Head>
      <title>Projects</title>
    </Head>

    <article>
      <Cover image={ProjectCover} />
      <header>
        <Wrapper>
          <div>State of North Carolina</div>
          <h1>Engaging worldwide gamers through branding and marketing.</h1>
          <ul>
            <li>Creative &amp; Experience Design</li>
            <li>Creative &amp; Experience Design</li>
            <li>Creative &amp; Experience Design</li>
          </ul>
        </Wrapper>
      </header>
      <section className="band">
        <Wrapper>
          <img src="https://source.unsplash.com/random/320x320" />
          <h1>About Ubisoft</h1>
          <p>Ubisoft is a French video game company headquartered in Montreuil with several development studios across the world.</p>
          <h2>What we did</h2>
          <ul>
            <li>Branding</li>
            <li>Branding</li>
            <li>Branding</li>
            <li>Branding</li>
          </ul>
        </Wrapper>
      </section>
      <Band className="band--numbered">
        <div className="band__title-block">
          <div className="band__number">01</div>
          <h1 className="band__title">Highlights</h1>
        </div>
        <div className="band__content">
          <h2>Designing the future.</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
        </div>
      </Band>
      <Band className="band--numbered">
        <div className="band__title-block">
          <div className="band__number">02</div>
          <h1 className="band__title">Research</h1>
        </div>
        <div className="band__content">
          <h2>Designing the future.</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
        </div>
      </Band>
      <Band className="band--numbered">
        <div className="band__title-block">
          <div className="band__number">03</div>
          <h1 className="band__title">Strategy</h1>
        </div>
        <div className="band__content">
          <h2>Designing the future.</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
        </div>
      </Band>
    </article>
    <Detour meta="Next Case Study" title="Content storytelling with real attitude across eCommerce with BB Dakota" link="/projects/sample" />
  </Layout>
)

export default ProjectDetail
