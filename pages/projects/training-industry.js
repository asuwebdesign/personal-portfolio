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
// Import components
// ============================================================================
import Cover from '../../components/cover'
import Detour from '../../components/detour'


// ============================================================================
// Import images
// ============================================================================
import ProjectCover from '../../public/images/covers/cover-training-industry.jpg'
import ProjectLogo from '../../public/logos/logo-atlanticbt.svg'


// ============================================================================
// Render component
// ============================================================================
const ProjectDetail = props => (
  <Layout {...props}>
    <Head>
      <title>LexisNexis | Projects | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Cover
          class="cover__title--atlanticbt"
          client="Training Industry"
          headline="Revitalizing a digital agency's brand with an upgraded digital experience."
          image={ProjectCover}
          alt={"Description of the cover"}
        />
        <Band className="band--client" div>
          <div className="band__title-block">
            <ProjectLogo />
          </div>
          <div className="band__content">
            <div className="band__about">
              <h2>About Atlantic BT</h2>
              <p>Atlantic BT is one of North Carolina's largest full-service web technology firms specializing in Higher Education, local and state Government, and eCommerce industries.</p>
            </div>
            <div className="band__skills">
              <h2>Skills provided</h2>
              <ul className="tags">
                <li className="tag">Branding Strategy &amp; Identity</li>
                <li className="tag">Creative &amp; Experience Design</li>
                <li className="tag">Research, Data &amp; Analytics</li>
                <li className="tag">Websites &amp; Digital Platforms</li>
              </ul>
            </div>
          </div>
        </Band>
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">01</div>
            <h1 className="band__title">Challenge</h1>
          </div>
          <div className="band__content">
            <h2>No, we don't sell phones.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </Band>
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Approach</h1>
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
            <h1 className="band__title">UI Kit</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Image src="/images/projects/training-industry/ti-ui-kit-advertisements.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-animations.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-avatars.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-back-to-top.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-buttons.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-card-layout.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-colors.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-cover.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-forms.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-grid-layout.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-grids.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-heading-sizes.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-icons.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-images.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-line-heights.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-logos.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-overlays.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-thumbnails.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-titles.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-top-training.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-topics.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-typography.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-videos.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti-ui-kit-webinars.jpg" alt="" width={1920} height={1080} />
          </div>
        </Band>

        

        {/*
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
        */}
        
        {/*
        <Band className="band--split" div>
          <Image src="https://raw.githubusercontent.com/PaperTiger/figma-dark-ui/master/preview.jpg" alt="" width={1920} height={1080} layout="responsive" />
          <Image src="https://raw.githubusercontent.com/PaperTiger/figma-dark-ui/master/preview.jpg" alt="" width={1920} height={1080} layout="responsive" />
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
        */}
      </article>
    </main>
    <Detour meta="Next Case Study" title="Hwy 55" link="/projects/hwy55" />
  </Layout>
)

export default ProjectDetail
