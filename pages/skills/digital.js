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
import IconSolutionW from '../../public/vectors/solution-w.svg'


// ============================================================================
// Import images
// ============================================================================
import PosterSrc from '../../public/images/banners/banner-digital.jpg'


// ============================================================================
// Render component
// ============================================================================
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
        <Poster src={PosterSrc} alt="Sample text for the photo." />
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">01</div>
            <h1 className="band__title">About</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Don’t let outdated and ineffective websites or mobile apps keep your brand from reaching its goals. Development is an investment, not a cost. Strong returns are earned by putting your users first. Today’s discerning customers expect engaging, friction-less solutions that work across devices and platforms.</p>
            <Image src="/images/pictures/picture-blog-branding.jpg" alt="" width={1920} height={1080} layout="responsive" />
          </div>
        </Band>
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Services</h1>
          </div>
          <div className="band__content">
            <h2>Code is beautiful.</h2>
            <p>With almost two decades of development experience, I’ve had the opportunity to create hundreds of websites, applications and digital experiences. Each custom solution is purposefully built to answer the unique challenges and business needs of our clients.</p>
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
            <h1 className="band__callout-title">{`Don't just meet customer experience expectations. Anticipate and exceed them.`}</h1>
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
