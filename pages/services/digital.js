// Import nodes
import React from 'react'
import Head from 'next/head'

// Import layouts
import Layout from '../../layouts/layout'
import Wrapper from '../../layouts/wrapper'

// Import components
import Detour from '../../components/detour'
import Sidekick from '../../components/sidekick'
import Poster from '../../components/poster'

// Render component
const PageServices = props => (
  <Layout>
    <Head>
      <title>Websites &amp; Digital Platforms - Services | Mark Riggan</title>
    </Head>

    <article>
      <Sidekick meta="Websites &amp; Digital Platforms" title="Branding is what emotionally connects a company with its community." />
      <Poster src={require('../../public/images/banners/banner-dark-hoodie.jpg?resize')} alt="Sample text for the photo." />
        <section>
          <Wrapper>
            <div className="">
              <div>01</div>
              <h2>About</h2>
            </div>
            <div className="">
              <p>Designing the future.</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            </div>
          </Wrapper>
        </section>
        <section>
          <Wrapper>
            <div className="">
              <div>02</div>
              <h2>Services</h2>
            </div>
            <div className="">
              <p>Designing the future.</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <ul>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
              </ul>
            </div>
          </Wrapper>
        </section>
    </article>
    <Detour meta="Up Next" title="Let's get up close and personal about me, myself, and I." link="/about" />
  </Layout>
)

export default PageServices
