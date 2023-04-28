// ============================================================================
// Import nodes
// ============================================================================
import Head from 'next/head'


// ============================================================================
// Import layouts
// ============================================================================
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'


// ============================================================================
// Import components
// ============================================================================
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'
import Manifesto from '../../components/manifesto'


// ============================================================================
// Import images
// ============================================================================
import PosterSrc from '../../public/posters/poster-personal-manifesto.jpg'


// ============================================================================
// Render component
// ============================================================================
const PageManifesto = props => (
  <Layout {...props}>
    <Head>
      <title>Manifesto | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Manifesto" title="Make something people love." section />
        <Poster src={PosterSrc} alt="Cool guy holding smartphone using web app casual wearing denim outfit isolated from violet background." />
        <Manifesto />
      </article>
    </main>
    <Detour meta="Up Next – Contact" title="Let's create something together." link="/contact" />
  </Layout>
)

export default PageManifesto
