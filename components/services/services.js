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

// Render component
const Services = props => {
  return (
    <div className="services">
      <Wrapper>
        <article className="service">
          <div className="service__primary">
            <IconSolutionB />
            <div className="service__header">
              <h2 className="service__title">Branding Strategy<br /> &amp; Identity</h2>
              <Button href="/services/branding" label="Explore Services" />
            </div>
          </div>
          <div className="service__secondary">
            <p>Create identities and platforms that differentiate brands and position them to matter in culture.</p>
            <p>Showing up is not enough to stand out for today's brands. The bottom line of what matters is value.</p>
          </div>
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionC />
            <div className="service__header">
              <h2 className="service__title">Creative &amp;<br /> Experience Design</h2>
              <Button href="/services/creative" label="Explore Services" />
            </div>
          </div>
          <div className="service__secondary">
            <p>Conceive and create experiences that immerse consumers in the brand through a combination of utility and creativity.</p>
            <p>It's about crafting memorable experiences that transform perception, strengthen bonds, and drive change.</p>
          </div>
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionR />
            <div className="service__header">
              <h2 className="service__title">Research, Data<br /> &amp; Analytics</h2>
              <Button href="/services/research" label="Explore Services" />
            </div>
          </div>
          <div className="service__secondary">
            <p>Drive superior brand experiences through data-informed design, testing and optimization.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionW />
            <div className="service__header">
              <h2 className="service__title">Websites &amp;<br /> Digital Platforms</h2>
              <Button href="/services/digital" label="Explore Services" />
            </div>
          </div>
          <div className="service__secondary">
            <p>Identify and create digital products and services that create revenue channels and help brands thrive in the new economy.</p>
            <p>It starts with clearly defining the consumer journey, business objectives, and what's happening in culture.</p>
          </div>
        </article>
      </Wrapper>
    </div>
  )
}

export default Services
