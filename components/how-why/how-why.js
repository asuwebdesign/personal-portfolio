// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import styles
import './how-why.scss'

// Render component
const HowWhy = props => {
  return (
    <section className="how-why">
      <Wrapper>
        <article>
          <img src="https://source.unsplash.com/random/640x480" />
          <div>How I Do It</div>
          <h1>Our process empowers us to make amazing things.</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <a href="#">Our Process</a>
        </article>
        <article>
          <img src="https://source.unsplash.com/random/640x480" />
          <div>How I Do It</div>
          <h1>Our process empowers us to make amazing things.</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <a href="#">Our Process</a>
        </article>
      </Wrapper>
    </section>
  )
}

export default HowWhy
