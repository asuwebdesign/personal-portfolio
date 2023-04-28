// ============================================================================
// Import nodes
// ============================================================================
import Image from 'next/image'
import Head from 'next/head'


// ============================================================================
// Import layouts
// ============================================================================
import Layout from '../../layouts/layout'
import Band from '../../layouts/band'


// ============================================================================
// Import elements
// ============================================================================
import Button from '../../elements/button'


// ============================================================================
// Import components
// ============================================================================
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'


// ============================================================================
// Import vectors
// ============================================================================
import IconSolutionR from '../../public/vectors/solution-r.svg'


// ============================================================================
// Import images
// ============================================================================
import PosterSrc from '../../public/images/banners/banner-research.jpg'


// ============================================================================
// Render component
// ============================================================================
const PageServices = props => (
  <Layout {...props}>
    <Head>
      <title>Research, Data &amp; Analytics - Services | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick
          title="Research, Data &amp; Analytics."
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
            <p>By creating data systems that help businesses understand and predict patterns of consumer behavior, I enable organizations to reach users more effectively with optimized experiences and targeted content across the digital ecosystem.</p>
            <Image src="/images/pictures/picture-sticky-notes.jpg" alt="" width={1920} height={1080} layout="responsive" />
          </div>
        </Band>
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Services</h1>
          </div>
          <div className="band__content">
            <h2>Experience what your customers experience.</h2>
            <p>Making strategic, data-informed decisions helps improve the performance of sites, products, and marketing efforts. Through data collection and interpretation, I’ll show you how to better drive and convert visitors more efficiently with your marketing budget.</p>
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

        {/* Repeat band for book consult */}
        <Band className="band--service-callout">
          <div className="band__callout-icon">
            <IconSolutionR />
          </div>
          <div className="band__callout-contents">
            <div className="band__callout-meta">Research, Data &amp; Analytics</div>
            <h1 className="band__callout-title">{`Don't just meet customer experience expectations. Anticipate and exceed them.`}</h1>
            <p className="band__callout-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Button label="Get in Touch" href="/contact" />
          </div>
        </Band>
        {/* Repeat band for book consult */}
      </article>
    </main>
    <Detour meta="Up Next" title="Websites &amp; Digital Platforms." link="/skills/digital" />
  </Layout>
)

export default PageServices
