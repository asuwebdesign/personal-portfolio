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
import ProjectLogo from '../../public/logos/logo--training-industry.svg'


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
            <h1 className="band__title">Wireframes</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Image src="/images/projects/training-industry/ti--wire--articles.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--blog-post.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--blog.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--glossary-term.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--glossary.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--home.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--magazine-article.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--magazine-column.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--magazine-feature.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--magazine-feature2.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--magazine.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--menu.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--news-article.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--press-release.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--press-releases.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--research-article.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--research.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--search-results.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--search.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--subscribe.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--top-training-list.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--top-training.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--topic-landing.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--topic-landing2.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--webinar.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--webinars.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--wiki-entry.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--wire--wiki.png" alt="" width={1920} height={1080} />
          </div>
        </Band>
        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">02</div>
            <h1 className="band__title">Comps</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <Image src="/images/projects/training-industry/ti--comp--404.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--articles-archive.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--blog-archive.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--digital-magazine.webp" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--glossary.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--homepage.png" alt="" width={1920} height={1080} />
            
            <Image src="/images/projects/training-industry/ti--comp--magazine-article.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--magazine-column.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--magazine-feature.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--magazine-feature2.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--magazine.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--menu.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--news-article.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--press-release.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--press-releases.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--research-article.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--research.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--search-results.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--search.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--subscribe.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--top-training-list.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--top-training.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--topic-landing.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--topic-landing2.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--webinar.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--webinars.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--wiki-entry.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--comp--wiki.png" alt="" width={1920} height={1080} />
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
            <Image src="/images/projects/training-industry/ti--uikit--advertisements.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--animations.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--avatars.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--back-to-top.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--buttons.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--card-layout.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--colors.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--cover.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--forms.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--grid-layout.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--grids.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--heading-sizes.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--icons.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--images.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--line-heights.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--logos.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--overlays.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--thumbnails.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--titles.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--top-training.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--topics.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--typography.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--videos.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/training-industry/ti--uikit--webinars.jpg" alt="" width={1920} height={1080} />
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
