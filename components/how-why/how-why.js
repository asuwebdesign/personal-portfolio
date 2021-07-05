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
          <Link href="/about/process">
            <a className="teaser__link">
              <div className="teaser__photo">
                <img
                  srcSet={require('../../public/images/cards/card-process.jpg').srcSet}
                  src={require('../../public/images/cards/card-process.jpg')}
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="teaser__meta">How I Do It</h1>
              <div className="teaser__title">Our process empowers us to make amazing things.</div>
              <p className="teaser__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </a>
          </Link>
        </article>
        <article className="teaser">
          <Link href="/about/manifesto">
            <a className="teaser__link">
              <div className="teaser__photo">
                <img
                  srcSet={require('../../public/images/cards/card-process.jpg').srcSet}
                  src={require('../../public/images/cards/card-process.jpg')}
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="teaser__meta">Why I Do It</h1>
              <div className="teaser__title">We are passionate about providing quality experiences to people.</div>
              <p className="teaser__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </a>
          </Link>
        </article>
      </Wrapper>
    </div>
  )
}

export default HowWhy
