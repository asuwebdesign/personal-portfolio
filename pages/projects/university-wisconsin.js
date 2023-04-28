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
import ProjectCover from '../../public/images/covers/cover-wisconsin.jpg'
import ProjectLogo from '../../public/logos/logo-uwpharmacy.svg'


// ============================================================================
// Render component
// ============================================================================
const ProjectDetail = props => (
  <Layout {...props}>
    <Head>
      <title>University of Wisconsin - School of Pharmacy | Projects | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Cover
          class="cover__title--uwpharmacy"
          client="University of Wisconsin"
          headline="Pioneering healthcare education through a bolder brand for a pharmacy school in Wisconsin."
          image={ProjectCover}
        />
        <Band className="band--client" div>
          <div className="band__title-block">
            <ProjectLogo />
          </div>
          <div className="band__content">
            <div className="band__about">
              <h2>About University of Wisconsin</h2>
              <p>The University of Wisconsin–Madison is a public land-grant research university in Madison, Wisconsin.</p>
            </div>
            <div className="band__skills">
              <h2>Skills provided</h2>
              <ul className="tags">
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
            <h2>Boosting student enrollment.</h2>
            <p>Like most higher education projects, this goal of this redesign was to boost enrollment with a new digital presence. A new website design would need to be effective at engaging prospective students, thematically consistent with the existing university web and brand standards, 508 compliant, and using the existing CMS platform.</p>
            <p>Additionally, there needed to be a scalable content strategy that catered to personas and enabled the staff to continue creating pages.</p>
            <p>We achieved these goals with a persona-specific content strategy, an engaging and 508 compliant design, and a new system for making web updates. The new website included enhanced features and a scalable content system that supported growth.</p>
          </div>
        </Band>
        {/*
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
        */}
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
        <Band div>
          <Image src="/assets/projects/wisconsin/university-wisconsin-pharmacy-home.png" alt="" width={1920} height={7887} layout="responsive" />
        </Band>
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
    <Detour meta="Next Case Study" title="Judicial Branch of NC" link="/projects/nc-courts" />
  </Layout>
)

export default ProjectDetail
