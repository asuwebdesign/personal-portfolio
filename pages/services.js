// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../layouts/layout'
import Wrapper from '../layouts/wrapper'

// Import components
import Detour from '../components/detour'
import Sidekick from '../components/sidekick'

// Import vectors
import IconSolutionB from '../public/vectors/solution-b.svg'
import IconSolutionC from '../public/vectors/solution-c.svg'
import IconSolutionR from '../public/vectors/solution-r.svg'
import IconSolutionW from '../public/vectors/solution-w.svg'

// Render component
const Services = props => (
  <Layout>
    <Head>
      <title>Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Services" title="I create progress by designing, developing, and securing digital experiences." />

      <section>
        <Wrapper>
          <div>
            <IconSolutionB />
            <h2>Solution title</h2>
            <div>We know how to create complex and intuitive interface systems that are enjoyable.</div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
          <div>
            <IconSolutionC />
            <h2>Solution title</h2>
            <div>We know how to create complex and intuitive interface systems that are enjoyable.</div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
          <div>
            <IconSolutionR />
            <h2>Solution title</h2>
            <div>We know how to create complex and intuitive interface systems that are enjoyable.</div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
          <div>
            <IconSolutionW />
            <h2>Solution title</h2>
            <div>We know how to create complex and intuitive interface systems that are enjoyable.</div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </Wrapper>
      </section>
    </article>
    <Detour meta="Up Next" title="Let's get up close and personal about me, myself, and I." link="/about" />
  </Layout>
)

export default Services
