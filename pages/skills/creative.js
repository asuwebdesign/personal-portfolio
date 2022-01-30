// Import nodes
import React from 'react'
import Image from 'next/image'
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

// Import images
import PosterSrc from '../../public/posters/poster-creative-experience-design.png'

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
        <Poster src={PosterSrc} alt="Sample text for the photo." />
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">01</div>
            <h1 className="band__title">About</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Businesses need to fulfill brand promises by delighting users with simple and functional campaigns, products, and services. Through deep collaboration, I create beautiful digital and physical experiences that bring value to the lives of users.</p>
            <Image src="/images/pictures/picture-creative.jpg" alt="" width={1920} height={1080} layout="responsive" />
          </div>
        </Band>
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Services</h1>
          </div>
          <div className="band__content">
            <h2>Fulfill brand promises with delight.</h2>
            <p>The best digital experiences are ones that go beyond being merely functional and efficient. To draw interest with stunning visuals, provide interactive elements, and tell a compelling story is to create an experience worth revisiting.</p>
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
            <h1 className="band__callout-title">{`Don't just meet customer experience expectations. Anticipate and exceed them.`}</h1>
            <p className="band__callout-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Button label="Get in Touch" href="/contact" />
          </div>
        </Band>
        {/* Repeat band for book consult */}
      </article>
    </main>
    <Detour meta="Up Next" title="Research, Data &amp; Analytics." link="/skills/research" />
  </Layout>
)

export default PageServices
