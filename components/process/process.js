// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import GraphicDiscover from '../../public/vectors/process-learning.svg'
import GraphicPlan from '../../public/vectors/process-strategy.svg'
import GraphicCreate from '../../public/vectors/process-designing.svg'
import GraphicBuild from '../../public/vectors/process-coding.svg'
import GraphicMeasure from '../../public/vectors/process-metrics.svg'

// Render component
const Process = props => {
  return (
    <section className="process">
      <div className="phase">
        <Wrapper>
          <div className="phase__primary">
            <div className="phase__number" aria-hidden="true">01</div>
            <h1 className="phase__title">Discover</h1>
          </div>
          <div className="phase__secondary">
            <p className="phase__subtitle">Understand your business, industry, and people.</p>
            <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <GraphicDiscover />
          </div>
        </Wrapper>
      </div>

      <div className="phase">
        <Wrapper>
          <div className="phase__primary">
            <div className="phase__number" aria-hidden="true">02</div>
            <h1 className="phase__title">Plan</h1>
          </div>
          <div className="phase__secondary">
            <p className="phase__subtitle">Shape the direction of your brand or product.</p>
            <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <GraphicPlan />
          </div>
        </Wrapper>
      </div>

      <div className="phase">
        <Wrapper>
          <div className="phase__primary">
            <div className="phase__number" aria-hidden="true">03</div>
            <h1 className="phase__title">Create</h1>
          </div>
          <div className="phase__secondary">
            <p className="phase__subtitle">Ideate and prototype designs concepts.</p>
            <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <GraphicCreate />
          </div>
        </Wrapper>
      </div>

      <div className="phase">
        <Wrapper>
          <div className="phase__primary">
            <div className="phase__number" aria-hidden="true">04</div>
            <h1 className="phase__title">Build &amp; Release</h1>
          </div>
          <div className="phase__secondary">
            <p className="phase__subtitle">Mesh design and technology into a brand or product.</p>
            <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <GraphicBuild />
          </div>
        </Wrapper>
      </div>

      <div className="phase">
        <Wrapper>
          <div className="phase__primary">
            <div className="phase__number" aria-hidden="true">05</div>
            <h1 className="phase__title">Measure &amp; Evolve</h1>
          </div>
          <div className="phase__secondary">
            <p className="phase__subtitle">Observe behaviors and iterate to improve.</p>
            <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <GraphicMeasure />
          </div>
        </Wrapper>
      </div>
    </section>
  )
}

export default Process
