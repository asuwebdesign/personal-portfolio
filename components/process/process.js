// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

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
            <img src="https://assets.website-files.com/5d6576034959930c066df612/5d65760349599313b56df8ff_59de92884edc3800017fd9c0_Listen.png" />
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
            <img src="https://www.toolshero.com/wp-content/uploads/2018/12/action-plan-toolshero.jpg" />
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
            <img src="https://ernestbarbaric.com/wp-content/uploads/2013/12/time-space-focus-meaningful-work1.jpg" />
          </div>
        </Wrapper>
      </div>

      <div className="phase">
        <Wrapper>
          <div className="phase__primary">
            <div className="phase__number" aria-hidden="true">04</div>
            <h1 className="phase__title">Build &amp; Deploy</h1>
          </div>
          <div className="phase__secondary">
            <p className="phase__subtitle">Mesh design and technology into a brand or product.</p>
            <p className="phase__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <img src="https://files.realpython.com/media/Build-a-Recommendation-Engine-With-Collaborative-Filtering_Watermarked.451abc4ecb9f.jpg" />
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
            <img src="https://aha3dayblinds.com/image/data/clever-1516084096.jpg" />
          </div>
        </Wrapper>
      </div>
    </section>
  )
}

export default Process
