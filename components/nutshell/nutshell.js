// ============================================================================
// Import nodes
// ============================================================================
import React from "react"
import Link from 'next/link'


// ============================================================================
// Import layouts
// ============================================================================
import Wrapper from '../../layouts/wrapper'


// ============================================================================
// Import elements
// ============================================================================
import Button from '../../elements/button'


// ============================================================================
// Import vectors
// ============================================================================
import IconSolutionB from '../../public/vectors/solution-b.svg'
import IconSolutionC from '../../public/vectors/solution-c.svg'
import IconSolutionR from '../../public/vectors/solution-r.svg'
import IconSolutionW from '../../public/vectors/solution-w.svg'


// ============================================================================
// Render component
// ============================================================================
const Nutshell = () => {
  return (
    <section className="nutshell">
      <Wrapper>
        <div className="nutshell__primary">
          <div className="nutshell__meta">In a Nutshell</div>
          <h1 className="nutshell__title">Making the complex simple, then the simple delightful.</h1>
          <p className="nutshell__desc">Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
          <Button label="Explore What I Do" href="/skills" />
        </div>
        <div className="nutshell__secondary">
          <div className="nutshell__list">
            <article className="nutshell__type">
              <Link href="/skills/branding">
                <a className="nutshell__type-link">
                  <div className="nutshell__type-icon">
                    <IconSolutionB />
                  </div>
                  <h1 className="nutshell__type-title">Branding Strategy<br /> &amp; Identity</h1>
                </a>
              </Link>
            </article>
            <article className="nutshell__type">
              <Link href="/skills/creative">
                <a className="nutshell__type-link">
                  <div className="nutshell__type-icon">
                    <IconSolutionC />
                  </div>
                  <h1 className="nutshell__type-title">Creative &amp;<br /> Experience Design</h1>
                </a>
              </Link>
            </article>
            <article className="nutshell__type">
              <Link href="/skills/research">
                <a className="nutshell__type-link">
                  <div className="nutshell__type-icon">
                    <IconSolutionR />
                  </div>
                  <h1 className="nutshell__type-title">Research, Data<br /> &amp; Analytics</h1>
                </a>
              </Link>
            </article>
            <article className="nutshell__type">
              <Link href="/skills/digital">
                <a className="nutshell__type-link">
                  <div className="nutshell__type-icon">
                    <IconSolutionW />
                  </div>
                  <h1 className="nutshell__type-title">Websites &amp;<br /> Digital Platforms</h1>
                </a>
              </Link>
            </article>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Nutshell
