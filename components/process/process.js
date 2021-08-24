// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
// import GraphicDiscover from '../../public/vectors/process-learning.svg'
// import GraphicPlan from '../../public/vectors/process-strategy.svg'
// import GraphicCreate from '../../public/vectors/process-designing.svg'
// import GraphicBuild from '../../public/vectors/process-coding.svg'
// import GraphicMeasure from '../../public/vectors/process-metrics.svg'

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
            <p className="phase__subtitle">Understand the business, it's industry, and their people.</p>
            <p className="phase__desc">Great design starts with great research—to gain empathy and understanding, to inspire new ideas, and to test our intuition. We rely on observation, in-context interviews, analogous industries, and, when appropriate, a hybrid approach with qualitative research and quantitative analysis.</p>
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
            <p className="phase__desc">By synthesizing our research, observations, and learnings in the field, we can spot themes and patterns, look for relationships, and discover insights. Once our teams have finished this process, they can explore any hunches through experimentation and rapid prototyping.</p>
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
            <p className="phase__desc">No matter what we're designing, prototyping is an essential stage of the design process. Building a prototype is a quick and risk-averse way to get ideas into the hands of the people we are designing for, and to iterate efficiently.</p>
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
            <p className="phase__desc">In this phase, our solutions begin to really take shape. This is when we can truly define success for our clients and partners, pilot our ideas through live prototyping and roadmapping, and evolve our solutions to keep them relevant and sustainable.</p>
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
            <p className="phase__desc">Launching our ideas for people to use and experience gives us a great opportunity to continue learning. It sparks an evolution in the process as we generate new ideas and reveal insights that help redefine the problem.</p>
          </div>
        </Wrapper>
      </div>
    </section>
  )
}

export default Process
