'use client'

import Media from 'react-media'
import Button from '@/elements/button/button'
import IconSolutionB from '@/public/vectors/solution-b.svg'
import IconSolutionC from '@/public/vectors/solution-c.svg'
import IconSolutionR from '@/public/vectors/solution-r.svg'
import IconSolutionW from '@/public/vectors/solution-w.svg'

export default function Services() {
  return (
    <div className="services">
      <div className="wrapper">
        <article className="service">
          <div className="service__primary">
            <IconSolutionB />
            <div className="service__header">
              <h2 className="service__title">Branding Strategy<br /> &amp; Identity</h2>
              <Button href="/skills/branding-strategy-identity" label="Explore Services" />
            </div>
          </div>
          <Media query="(min-width: 1280px)" render={() => (
            <div className="service__secondary">
              <p>Create identities and platforms that differentiate brands and position them to matter in culture.</p>
              <p>Showing up is not enough to stand out for today's brands. The bottom line of what matters is value.</p>
            </div>
          )} />
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionC />
            <div className="service__header">
              <h2 className="service__title">Creative &amp;<br /> Experience Design</h2>
              <Button href="/skills/creative-experience-design" label="Explore Services" />
            </div>
          </div>
          <Media query="(min-width: 1280px)" render={() => (
            <div className="service__secondary">
              <p>Conceive and create experiences that immerse consumers in the brand through a combination of utility and creativity.</p>
              <p>Let's craft memorable experiences that transform perception, strengthen bonds, and drive change.</p>
            </div>
          )} />
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionR />
            <div className="service__header">
              <h2 className="service__title">Research, Data<br /> &amp; Analytics</h2>
              <Button href="/skills/research-data-analytics" label="Explore Services" />
            </div>
          </div>
          <Media query="(min-width: 1280px)" render={() => (
            <div className="service__secondary">
              <p>Drive superior brand experiences through data-informed design, testing and optimization.</p>
              <p>Learn about your audience and make more informed decisions on where to take your brand next.</p>
            </div>
          )} />
        </article>
        <article className="service">
          <div className="service__primary">
            <IconSolutionW />
            <div className="service__header">
              <h2 className="service__title">Websites &amp;<br /> Digital Platforms</h2>
              <Button href="/skills/websites-digital-platforms" label="Explore Services" />
            </div>
          </div>
          <Media query="(min-width: 1280px)" render={() => (
            <div className="service__secondary">
              <p>Identify and create digital products and services that create revenue channels and help brands thrive in the new economy.</p>
              <p>It starts with clearly defining the consumer journey, business objectives, and what's happening in culture.</p>
            </div>
          )} />
        </article>
      </div>
    </div>
  )
}