// Import nodes
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Button from '../../elements/button'

// Import images
import ProcessTeaser from '../../public/images/cards/card-process.png'
import ManifestoTeaser from '../../public/images/cards/card-manifesto.jpg'

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
                <Image src={ProcessTeaser} alt="Illustration of creative process" layout="responsive" priority="true" />
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
                <Image src={ManifestoTeaser} alt="Colorful sphere" layout="responsive" priority="true" />
              </div>
            </a>
          </Link>
        </article>
      </Wrapper>
    </div>
  )
}

export default HowWhy
