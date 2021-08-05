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
              <div className="teaser__title">Listen to people.</div>
              <p className="teaser__desc">Innovation driven by a consistent creative thinking process fit for a unicorn.</p>
              <div className="teaser__photo">
                <img
                  //srcSet={require('../../public/images/cards/card-process.jpg').srcSet}
                  //src={require('../../public/images/cards/card-process.jpg')}
                  src="https://www.processmaker.com/wp-content/uploads/2020/04/ProcessMakerBAM-03-768x498.png"
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
              <div className="teaser__title">Make something people love.</div>
              <p className="teaser__desc">Philosophy based on selfless passion for providing quality experiences to all people.</p>
              <div className="teaser__photo">
                <img
                  //srcSet={require('../../public/images/cards/card-process.jpg').srcSet}
                  //src={require('../../public/images/cards/card-process.jpg')}
                  src="https://www.processmaker.com/wp-content/uploads/2020/04/ProcessMakerBAM-03-768x498.png"
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
