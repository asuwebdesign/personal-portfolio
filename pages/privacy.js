// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Sidekick from '../components/sidekick'

// Render component
const PagePrivacy = props => (
  <Layout {...props}>
    <Head>
      <title>Privacy Policy | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Privacy Policy" title="Basically I won't share your personal information to anyone. Like, ever." />
      <section>
        <Wrapper>
          <p>Awwwards are given to the best CSS websites in the world from the top designers, agencies and bloggers working today. Winners receive recognition, prestige and media presence.</p>
          <p>By accessing our website and/or using our services, you agree to be bound by the following terms and conditions.</p>
        </Wrapper>
      </section>
    </article>
  </Layout>
)

export default PagePrivacy
