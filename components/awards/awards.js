// Import nodes
import React from "react"
import Link from 'next/link'

// Import data
import { awards } from '../../data/awards'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Render component
const Awards = props => {
  return (
    <section className="awards">
      <Wrapper>
        <div className="awards__meta">Awards &amp; Recognitions</div>
        <h1 className="awards__title">These brands aren't trophies, they're friends that were met on the journey.</h1>
        <ul className="awards__list">
          {awards.map((award, key) => {
            return (
              <li key={key} className="award">
                <div className="award__title">{award.title}</div>
                <div className="award__meta">
                  <span className="award__issued">{award.date}</span>
                  <span className="award__organization">{award.organization}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Awards
