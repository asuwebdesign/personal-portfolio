// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Button from '../../elements/button'

// Render component
const HowWhy = props => {
  return (
    <div className="how-why">
      <Wrapper>
        <article className="teaser">
          <div className="teaser__photo">
            <img src="https://images.unsplash.com/photo-1532101780307-8f873ece858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80" />
          </div>
          <h1 className="teaser__meta">How I Do It</h1>
          <div className="teaser__title">Our process empowers us to make amazing things.</div>
          <p className="teaser__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <Button href="/about/process" label="My Process" />
        </article>
        <article className="teaser">
          <div className="teaser__photo">
            <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80" />
          </div>
          <h1 className="teaser__meta">Why I Do It</h1>
          <div className="teaser__title">We are passionate about providing quality experiences to people.</div>
          <p className="teaser__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <Button href="/about/manifesto" label="My Manifesto" />
        </article>
      </Wrapper>
    </div>
  )
}

export default HowWhy
