// ============================================================================
// Import nodes
// ============================================================================
import Head from 'next/head'


// ============================================================================
// Import layouts
// ============================================================================
import Layout from '../../layouts/layout'


// ============================================================================
// Import components
// ============================================================================
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Services from '../../components/services'


// ============================================================================
// Render component
// ============================================================================
const PageServices = props => (
  <Layout {...props}>
    <Head>
      <title>Skills | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Services" title="Go from being viable to valuable." section />
        <Services />
      </article>
    </main>
    <Detour meta="Up Next" title="Branding Strategy &amp; Identity." link="/skills/branding" />
  </Layout>
)

export default PageServices
