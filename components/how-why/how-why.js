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
              <h1 className="teaser__meta">Creative Process</h1>
              <div className="teaser__title">Simple. Delightful.</div>
              <p className="teaser__desc">Creating the future doesn't have to be complicated.</p>
              <div className="teaser__photo">
                <img
                  //srcSet={require('../../public/images/cards/card-process.jpg').srcSet}
                  //src={require('../../public/images/cards/card-process.jpg')}
                  src={require('../../public/vectors/card-process.svg')}
                  alt=""
                  loading="lazy"
                />
              </div>
            </a>
          </Link>
        </article>
        <article className="teaser">
          <Link href="/about/manifesto">
            <a className="teaser__link">
              <h1 className="teaser__meta">Personal Manifesto</h1>
              <div className="teaser__title">Design. Uncompromised.</div>
              <p className="teaser__desc">Make something people will love every day.</p>
              <div className="teaser__photo">
                <img
                  srcSet={require('../../public/images/cards/card-manifesto.jpg').srcSet}
                  src={require('../../public/images/cards/card-manifesto.jpg')}
                  //src={require('../../public/vectors/card-manifesto.svg')}
                  alt=""
                  loading="lazy"
                />
              </div>
            </a>
          </Link>
        </article>
      </Wrapper>
    </div>
  )
}

export default HowWhy
