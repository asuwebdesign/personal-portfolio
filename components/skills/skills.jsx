'use client'

import Link from 'next/link'
import IconSolutionB from '@/public/vectors/solution-b.svg'
import IconSolutionC from '@/public/vectors/solution-c.svg'
import IconSolutionR from '@/public/vectors/solution-r.svg'
import IconSolutionW from '@/public/vectors/solution-w.svg'

export default function Skills() {
  return (
    <section className="skills">
      <div className="wrapper">
        <div className="skills__list">
          <article className="skills__type">
            <Link className="skills__type-link" href="/skills/branding-strategy-identity">
              <div className="skills__type-icon">
                <IconSolutionB />
              </div>
              <h1 className="skills__type-title">Branding Strategy<br /> &amp; Identity</h1>
            </Link>
          </article>
          <article className="skills__type">
            <Link className="skills__type-link" href="/skills/creative-experience-design">
              <div className="skills__type-icon">
                <IconSolutionC />
              </div>
              <h1 className="skills__type-title">Creative &amp;<br /> Experience Design</h1>
            </Link>
          </article>
          <article className="skills__type">
            <Link className="skills__type-link" href="/skills/research-data-analytics">
              <div className="skills__type-icon">
                <IconSolutionR />
              </div>
              <h1 className="skills__type-title">Research, Data<br /> &amp; Analytics</h1>
            </Link>
          </article>
          <article className="skills__type">
            <Link className="skills__type-link" href="/skills/websites-digital-platforms">
              <div className="skills__type-icon">
                <IconSolutionW />
              </div>
              <h1 className="skills__type-title">Websites &amp;<br /> Digital Platforms</h1>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}