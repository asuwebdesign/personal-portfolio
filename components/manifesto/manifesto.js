// Import nodes
import React, { Fragment } from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Render component
const Manifesto = props => {
  return (
    <Fragment>
      <section className="values">
        <Wrapper>
          <div className="values__primary">
            <div className="values__number" aria-hidden="true">01</div>
            <h2 className="values__title">How we act.</h2>
          </div>
          <div className="values__secondary">
            <div>Sharing is Caring</div>
            <div>Work together.</div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <ul>
              <li>
                <h3>Creativity</h3>
                <p>Embrace a diverse set of perspectives and use your imagination to drive innovation.</p>
              </li>
              <li>
                <h3>Empathy</h3>
                <p>Infuse your actions and work with respect for the emotions and experiences of others.</p>
              </li>
              <li>
                <h3>Integrity</h3>
                <p>Consistently demonstrate dignity, honesty, transparency, and accountability.</p>
              </li>
              <li>
                <h3>Passion</h3>
                <p>Feel the power and love that comes from focusing on what excites you.</p>
              </li>
              <li>
                <h3>Quality</h3>
                <p>Always seek to produce excellent work that pushes the status quo forward.</p>
              </li>
              <li>
                <h3>Simplicity</h3>
                <p>Do more with less by striving for clarity, consistency, and focusing on what’s essential.</p>
              </li>
            </ul>
          </div>
        </Wrapper>
      </section>

      <section className="philosophy">
        <Wrapper>
          <div className="philosophy__primary">
            <div className="philosophy__number" aria-hidden="true">02</div>
            <h2 className="philosophy__title">How we think</h2>
          </div>
          <div className="philosophy__secondary">
            <div>Design makes everything possible</div>
            <div>Design philosophy</div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            <ol>
              <li>Simplicity wins.</li>
              <li>Authenticity is everything.</li>
              <li>Strategy is the brother of creativity.</li>
              <li>Credibility begins with aesthetics.</li>
              <li>A focus on culture moves a brand forward.</li>
              <li>The consumer rules our world.</li>
              <li>Don’t lose emotion in execution.</li>
              <li>Design isn’t art – art is a servant to design.</li>
              <li>Technology is creative.</li>
              <li>Results matter.</li>
            </ol>
          </div>
        </Wrapper>
      </section>
    </Fragment>
  )
}

export default Manifesto
