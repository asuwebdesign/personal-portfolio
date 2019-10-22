// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Image from '../../elements/image'

// Import styles
import './process.scss'

// Render component
const Process = props => {
  return (
    <section className="process">
      <Wrapper>
      <div className="phase">
        <div className="phase__primary">
          <div className="phase__number" aria-hidden="true">01</div>
          <h2 className="phase__title">Discover</h2>
        </div>
        <div className="phase__secondary">
          <p className="phase__subtitle">Understand your business, industry, and people.</p>
          <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
      </div>

      <div className="phase">
        <div className="phase__primary">
          <div className="phase__number" aria-hidden="true">02</div>
          <h2 className="phase__title">Plan</h2>
        </div>
        <div className="phase__secondary">
          <p className="phase__subtitle">Understand your business, industry, and people.</p>
          <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
      </div>

      <div className="phase">
        <div className="phase__primary">
          <div className="phase__number" aria-hidden="true">03</div>
          <h2 className="phase__title">Create</h2>
        </div>
        <div className="phase__secondary">
          <p className="phase__subtitle">Understand your business, industry, and people.</p>
          <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
      </div>

      <div className="phase">
        <div className="phase__primary">
          <div className="phase__number" aria-hidden="true">04</div>
          <h2 className="phase__title">Build &amp; Deploy</h2>
        </div>
        <div className="phase__secondary">
          <p className="phase__subtitle">Understand your business, industry, and people.</p>
          <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
      </div>

      <div className="phase">
        <div className="phase__primary">
          <div className="phase__number" aria-hidden="true">05</div>
          <h2 className="phase__title">Measure &amp; Evolve</h2>
        </div>
        <div className="phase__secondary">
          <p className="phase__subtitle">Understand your business, industry, and people.</p>
          <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
      </div>
      </Wrapper>
    </section>
  )
}

export default Process
