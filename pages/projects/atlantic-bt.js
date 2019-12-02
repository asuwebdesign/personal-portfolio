// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Band from '../../layouts/band'

// Import components
import Cover from '../../components/cover'
import Detour from '../../components/detour'

// Import images
import ProjectCover from '../../public/images/covers/cover-atlanticbt.jpg'
import ProjectLogo from '../../public/vectors/logo-redhat.svg'

// Render component
const ProjectDetail = props => (
  <Layout {...props}>
    <Head>
      <title>Projects</title>
    </Head>

    <article>
      <Cover
        client="Atlantic BT"
        headline="Building the Beats brand through design and eCommerce."
        image={ProjectCover}
      />
      <Band className="band--client">
        <div className="band__title-block">
          <ProjectLogo />
          <h1>About Ubisoft</h1>
        </div>
        <div className="band__content">
          <p>Ubisoft is a French video game company headquartered in Montreuil with several development studios across the world.</p>
          <h2>What we did</h2>
          <ul className="tags">
            <li className="tag">Branding</li>
            <li className="tag">Branding</li>
            <li className="tag">Branding</li>
            <li className="tag">Branding</li>
          </ul>
        </div>
      </Band>
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
      <Band div>
        <img src="https://raw.githubusercontent.com/PaperTiger/figma-dark-ui/master/preview.jpg" />
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
