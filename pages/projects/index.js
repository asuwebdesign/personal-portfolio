// ============================================================================
// Import nodes
// ============================================================================
import Head from 'next/head'
import Link from 'next/link'


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
import Work from '../../components/work'
import Sidekick from '../../components/sidekick'
import DribbblePosts from '../../components/dribbble-posts'


// ============================================================================
// Import elements
// ============================================================================
import Button from '../../elements/button'


// ============================================================================
// Render component
// ============================================================================
const PageProjects = props => (
  <Layout {...props}>
    <Head>
      <title>Projects | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Projects" title="Selected brands &amp; digital products." section />
        <Work />
        <DribbblePosts />
      </article>
    </main>
    <Detour meta="Up Next - Case Study" title="Open Telco" link="/projects/open-telco" />
  </Layout>
)

export default PageProjects
