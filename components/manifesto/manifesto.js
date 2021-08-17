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
            <h1 className="values__title">Core values</h1>
          </div>
          <div className="values__secondary">
            <h2>Commitment to imagination.</h2>
            <p>I believe a foundation for consistent performance in the creative industry is based upon six core values – creativity, empathy, integrity, passion, quality, and simplicity.</p>
            <ul className="values__list">
              <li className="values__listitem">
                <h2>Creativity</h2>
                <p>Embrace a diverse set of perspectives and use your imagination to drive innovation.</p>
              </li>
              <li className="values__listitem">
                <h2>Empathy</h2>
                <p>Infuse your actions and work with respect for the emotions and experiences of others.</p>
              </li>
              <li className="values__listitem">
                <h2>Integrity</h2>
                <p>Consistently demonstrate dignity, honesty, transparency, and accountability.</p>
              </li>
              <li className="values__listitem">
                <h2>Passion</h2>
                <p>Feel the power and love that comes from focusing on what excites you.</p>
              </li>
              <li className="values__listitem">
                <h2>Quality</h2>
                <p>Always seek to produce excellent work that pushes the status quo forward.</p>
              </li>
              <li className="values__listitem">
                <h2>Simplicity</h2>
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
            <h1 className="philosophy__title">Philosophy</h1>
          </div>
          <div className="philosophy__secondary">
            <h2>Design makes everything possible.</h2>
            <p>I believe that good design is not only what you see, but just as important, the feelings it provokes in us.</p>
            <p>Good design is when you evoke passion and emotion into your ideas. The very best ideas come from those in which we empathize the people who express their pain.</p>
            <ol className="philosophy__list">
              <li className="philosophy__listitem">Simplicity wins.</li>
              <li className="philosophy__listitem">Authenticity is everything.</li>
              <li className="philosophy__listitem">Strategy is the brother of creativity.</li>
              <li className="philosophy__listitem">Credibility begins with aesthetics.</li>
              <li className="philosophy__listitem">A focus on culture moves a brand forward.</li>
              <li className="philosophy__listitem">The consumer rules our world.</li>
              <li className="philosophy__listitem">Don’t lose emotion in execution.</li>
              <li className="philosophy__listitem">Design isn’t art – art is a servant to design.</li>
              <li className="philosophy__listitem">Technology is creative.</li>
              <li className="philosophy__listitem">Results matter.</li>
            </ol>
          </div>
        </Wrapper>
      </section>
    </Fragment>
  )
}

export default Manifesto
