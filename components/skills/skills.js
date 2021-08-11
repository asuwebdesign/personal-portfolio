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
const Skills = props => {
  return (
    <section className="skills">
      <Wrapper>
        <div className="skills__list">
          <article className="skills__type">
            <Link href="/services/branding">
              <a className="skills__type-link">
                <div className="skills__type-icon">
                  <IconSolutionB />
                </div>
                <h1 className="skills__type-title">Branding Strategy<br /> &amp; Identity</h1>
              </a>
            </Link>
          </article>
          <article className="skills__type">
            <Link href="/services/creative">
              <a className="skills__type-link">
                <div className="skills__type-icon">
                  <IconSolutionC />
                </div>
                <h1 className="skills__type-title">Creative &amp;<br /> Experience Design</h1>
              </a>
            </Link>
          </article>
          <article className="skills__type">
            <Link href="/services/research">
              <a className="skills__type-link">
                <div className="skills__type-icon">
                  <IconSolutionR />
                </div>
                <h1 className="skills__type-title">Research, Data<br /> &amp; Analytics</h1>
              </a>
            </Link>
          </article>
          <article className="skills__type">
            <Link href="/services/digital">
              <a className="skills__type-link">
                <div className="skills__type-icon">
                  <IconSolutionW />
                </div>
                <h1 className="skills__type-title">Websites &amp;<br /> Digital Platforms</h1>
              </a>
            </Link>
          </article>
        </div>
      </Wrapper>
    </section>
  )
}

export default Skills
