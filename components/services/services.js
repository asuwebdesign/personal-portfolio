// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Button from '../../elements/button'

// Import vectors
import IconSolutionB from '../../public/vectors/solution-b.svg'
import IconSolutionC from '../../public/vectors/solution-c.svg'
import IconSolutionR from '../../public/vectors/solution-r.svg'
import IconSolutionW from '../../public/vectors/solution-w.svg'

// Import styles
import './services.scss'

// Render component
const Services = props => {
  return (
    <section className="services">
      <Wrapper>
        <div className="services__primary">
          <div className="services__meta">In a Nutshell</div>
          <h1 className="services__title">Making the complex simple, then the simple delightful.</h1>
          <p className="services__desc">Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
          <Button label="Explore What I Do" href="/services" />
        </div>
        <div className="services__secondary">
          <div className="services__list">
            <article className="services__type">
              <div className="services__type-icon">
                <IconSolutionC />
              </div>
              <h1 className="services__type-title">Creative &amp; Experience Design</h1>
            </article>
            <article className="services__type">
              <div className="services__type-icon">
                <IconSolutionB />
              </div>
              <h1 className="services__type-title">Branding Strategy &amp; Identity</h1>
            </article>
            <article className="services__type">
              <div className="services__type-icon">
                <IconSolutionR />
              </div>
              <h1 className="services__type-title">Research, Data &amp; Analytics</h1>
            </article>
            <article className="services__type">
              <div className="services__type-icon">
                <IconSolutionW />
              </div>
              <h1 className="services__type-title">Websites &amp; Digital Platforms</h1>
            </article>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Services
