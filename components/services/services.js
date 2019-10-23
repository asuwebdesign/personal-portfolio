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
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
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
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
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
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
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
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </article>
      </Wrapper>
    </div>
  )
}

export default Services
