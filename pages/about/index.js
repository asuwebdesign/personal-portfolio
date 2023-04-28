// ============================================================================
// Import nodes
// ============================================================================
import Head from 'next/head'


// ============================================================================
// Import layouts
// ============================================================================
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'
import Band from '../../layouts/band'


// ============================================================================
// Import components
// ============================================================================
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Skills from '../../components/skills'
import HowWhy from '../../components/how-why'
import Poster from '../../components/poster'
import Awards from '../../components/awards'


// ============================================================================
// Import images
// ============================================================================
import PosterSrc from '../../public/images/pictures/picture-ninja-background.png'
import PosterForeground from '../../public/images/pictures/picture-ninja.png'


// ============================================================================
// Import vectors
// ============================================================================
import Oval from '../../public/vectors/bg_circle.svg'


// ============================================================================
// Render component
// ============================================================================
const PageAbout = props => (
  <Layout {...props}>
    <Head>
      <title>About | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="About" title="Pixels, code &amp; tons of video games." section />
        <Poster
          className="poster--about"
          src={PosterSrc}
          foreground={PosterForeground}
          alt="Sample text for the photo."
        />
        <Skills />
        <HowWhy />
        <Awards />
      </article>
    </main>
    <Detour meta="Up Next – Process" title="It always starts with listening to people." link="/about/process" />
  </Layout>
)

export default PageAbout
