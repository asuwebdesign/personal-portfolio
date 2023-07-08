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
import ProjectCover from '../../public/images/covers/cover-atlanticbt.png'
import ProjectLogo from '../../public/logos/logo--patternfly--color.svg'


// ============================================================================
// Render component
// ============================================================================
const ProjectDetail = props => (
  <Layout {...props}>
    <Head>
      <title>Projects</title>
    </Head>
    <main>
      <article>
        <Cover
          class="cover__title--patternfly"
          client="PatternFly 5"
          headline="Revitalizing a digital agency's brand with an upgraded digital experience."
          image=""
          alt={"Description of the cover"}
        />
        <Band className="band--client" div>
          <div className="band__title-block">
            <ProjectLogo />
          </div>
          <div className="band__content">
            <div className="band__about">
              <h2>About Red Hat</h2>
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
            <div className="band__number">03</div>
            <h1 className="band__title">Approach</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Image src="/images/projects/patternfly/pf5--hcc--ansible--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--ansible--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--app-services--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--console--app-services--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--console--rhel--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--home--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--home--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--openshift--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--openshift--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--rhel--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--signin--username--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--signin--username--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--builds.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--dashboard.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--installed.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--nav-panel.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--networking.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--observe.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--operators.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--signin.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--storage.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--workloads.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp-compute.png" alt="" width={1920} height={1080} />
          </div>
        </Band>
      </article>
    </main>
    <Detour meta="Next Case Study" title="Hwy 55" link="/projects/hwy55" />
  </Layout>
)

export default ProjectDetail
