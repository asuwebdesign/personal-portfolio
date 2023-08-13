'use client'

import Link from 'next/link'
import Button from '@/elements/button/button'
import IconSolutionB from '@/public/vectors/solution-b.svg'
import IconSolutionC from '@/public/vectors/solution-c.svg'
import IconSolutionR from '@/public/vectors/solution-r.svg'
import IconSolutionW from '@/public/vectors/solution-w.svg'

export default function Nutshell() {
  return (
    <section className="nutshell">
      <div className="wrapper">
        <div className="nutshell__primary">
          <div className="nutshell__meta">In a Nutshell</div>
          <h1 className="nutshell__title">Making the complex simple, then the simple delightful.</h1>
          <p className="nutshell__desc">Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
          <Button label="Explore What I Do" href="/skills" />
        </div>
        <div className="nutshell__secondary">
          <div className="nutshell__list">
            <article className="nutshell__type">
              <Link className="nutshell__type-link" href="/skills/branding-strategy-identity">
                <div className="nutshell__type-icon">
                  <IconSolutionB />
                </div>
                <h1 className="nutshell__type-title">Branding Strategy<br /> &amp; Identity</h1>
              </Link>
            </article>
            <article className="nutshell__type">
              <Link className="nutshell__type-link" href="/skills/creative-experience-design">
                <div className="nutshell__type-icon">
                  <IconSolutionC />
                </div>
                <h1 className="nutshell__type-title">Creative &amp;<br /> Experience Design</h1>
              </Link>
            </article>
            <article className="nutshell__type">
              <Link className="nutshell__type-link" href="/skills/research-data-analytics">
                <div className="nutshell__type-icon">
                  <IconSolutionR />
                </div>
                <h1 className="nutshell__type-title">Research, Data<br /> &amp; Analytics</h1>
              </Link>
            </article>
            <article className="nutshell__type">
              <Link className="nutshell__type-link" href="/skills/websites-digital-platforms">
                <div className="nutshell__type-icon">
                  <IconSolutionW />
                </div>
                <h1 className="nutshell__type-title">Websites &amp;<br /> Digital Platforms</h1>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}