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
import ProjectLogo from '../../public/logos/logo--colorshark--color.png'


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
          client="ColorShark"
          headline="Revitalizing a digital agency's brand with an upgraded digital experience."
          // image={ProjectCover}
          alt={"Description of the cover"}
        />
        <Band className="band--client" div>
          <div className="band__title-block">
            <Image src={ProjectLogo} alt="" />
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
            <h1 className="band__title">Research</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Image src="/images/projects/colorshark/colorshark--default--about.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--01.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--02.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--03.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--04.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--05.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--06.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--07.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--08.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default--color-blindness--09.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--default.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--fail.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--level--aa-large.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--level--aa.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--level--aaa.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--level--fail.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--pass--background.png" alt="" width={5120} height={2722} />
            <Image src="/images/projects/colorshark/colorshark--pass--foreground.png" alt="" width={5120} height={2722} />
          </div>
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
    <Detour meta="Next Case Study" title="Hwy 55" link="/projects/hwy55" />
  </Layout>
)

export default ProjectDetail
