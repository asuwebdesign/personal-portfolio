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
              <div className="teaser__title">Innovation driven by a consistent creative thinking process fit for a unicorn.</div>
              <p className="teaser__desc">Learn about the process that's been tested over time to achieve results regardless of the size or complexity of the project.</p>
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
              <div className="teaser__title">Philosophy based on selfless passion for providing quality experiences to all people.</div>
              <p className="teaser__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </a>
          </Link>
        </article>
      </Wrapper>
    </div>
  )
}

export default HowWhy
