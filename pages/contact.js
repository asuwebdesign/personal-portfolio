// ============================================================================
// Import nodes
// ============================================================================
import Head from 'next/head'


// ============================================================================
// Import layouts
// ============================================================================
import Layout from '../layouts/layout'


// ============================================================================
// Import components
// ============================================================================
import Sidekick from '../components/sidekick'
import FormFollow from '../components/form-follow'


// ============================================================================
// Render component
// ============================================================================
const PageContact = props => (
  <Layout {...props}>
    <Head>
      <title>Contact | Mark Riggan</title>
    </Head>
    <main>
      <article>
        <Sidekick meta="Contact" title="Let's create something together." section />
        <FormFollow />
      </article>
    </main>
  </Layout>
)

export default PageContact
