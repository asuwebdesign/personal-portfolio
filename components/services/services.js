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
        <article className="service">
          <div className="service__primary">
            <IconSolutionB />
            <h2>Solution title</h2>
            <Button href="#" label="Explore Services" />
          </div>
          <div className="service__secondary">
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionC />
            <h2>Solution title</h2>
            <Button href="#" label="Explore Services" />
          </div>
          <div className="service__secondary">
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionR />
            <h2>Solution title</h2>
            <Button href="#" label="Explore Services" />
          </div>
          <div className="service__secondary">
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionW />
            <h2>Solution title</h2>
            <Button href="#" label="Explore Services" />
          </div>
          <div className="service__secondary">
            <p>We know how to create complex and intuitive interface systems that are enjoyable.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </article>
      </Wrapper>
    </section>
  )
}

export default Services
