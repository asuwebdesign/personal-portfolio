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
import ProjectCover from '../../public/images/covers/cover-hwy55.jpg'


// ============================================================================
// Import logos
// ============================================================================
import ProjectLogo from '../../public/logos/logo--hwy55--color.svg'


// ============================================================================
// Render component
// ============================================================================
const ProjectDetail = props => (
  <Layout {...props}>
    <Head>
      <title>Hwy 55 | Projects | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Cover
          class="cover__title--hwy55"
          client="Hwy 55"
          headline="Honoring the vintage past of Hwy 55 to build and evolve a more modern brand."
          image={ProjectCover}
          alt="Photo of Hwy 55 restaurant"
        />
        <Band className="band--client" div>
          <div className="band__title-block">
            <ProjectLogo />
          </div>
          <div className="band__content">
            <div className="band__about">
              <h2>About Hwy55</h2>
              <p>Hwy 55 Burgers Shakes & Fries is a fast casual restaurant chain that operates primarily on the East Coast of the United States.</p>
            </div>
            <div className="band__skills">
              <h2>Skills provided</h2>
              <ul className="tags">
                <li className="tag">Branding Strategy &amp; Identity</li>
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
            <h2>Designing the future.</h2>
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
            <h1 className="band__title">Logo</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Image src="/images/projects/hwy-55/hwy55-01.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-02.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-03.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-04.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-05.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-06.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-07.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-08.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-09.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-10.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-11.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-12.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-13.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-14.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-15.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-16.png" width={1600} height={1200} alt="" />            
          </div>
        </Band>

        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Color</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            
            <Image src="/images/projects/hwy-55/hwy55-17.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-18.png" width={1600} height={1200} alt="" />
            
          </div>
        </Band>

        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Fonts</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            
            <Image src="/images/projects/hwy-55/hwy55-19.png" width={1600} height={1200} alt="" />
            <Image src="/images/projects/hwy-55/hwy55-20.png" width={1600} height={1200} alt="" />
            
          </div>
        </Band>
       
        <Band div>
        <Image src="/images/projects/hwy-55/hwy55-21.png" width={1600} height={1200} alt="" />
        </Band>
        
        {/*
        <Band className="band--split" div>
          <Image src="https://raw.githubusercontent.com/PaperTiger/figma-dark-ui/master/preview.jpg" width={1920} height={1080} layout="responsive" alt="" />
          <Image src="https://raw.githubusercontent.com/PaperTiger/figma-dark-ui/master/preview.jpg" width={1920} height={1080} layout="responsive" alt="" />
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
    <Detour meta="Next Case Study" title="Training Industry" link="/projects/training-industry" />
  </Layout>
)

export default ProjectDetail
