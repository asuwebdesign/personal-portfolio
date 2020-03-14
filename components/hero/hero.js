// Import nodes
import React, { useState } from "react"
import Link from 'next/link'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import Dots from '../../public/vectors/graphic-dots.svg'

// Render component
const Hero = props => {

  // states
  const [hideDots, setHideDots] = useState(false)

  useScrollPosition(( { prevPos, currPos } ) => {
    (currPos.y <= -256) ? setHideDots('hero__dots--hide') : setHideDots(false)
  }, [hideDots])

  return (
    <header id="hero" className="hero">
      <h1 className="hero__title">Connecting brands with people through <span>Handcrafted Digital Experiences.</span></h1>

      <div className="hero__highlights">
        <div>
          <h2>Human-centered design.</h2>
          <p>Award-winning designs that are data-influenced and made for humans first.</p>
        </div>
        <div>
          <h2>Top notch code.</h2>
          <p>Architected and built with the latest technologies for scalability and longevity.</p>
        </div>
        <div>
          <h2>Tailored to your business.</h2>
          <p>Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
        </div>
      </div>

      <div className={`hero__dots hero__dots--inverted ${hideDots}`}>
        <Dots />
      </div>

      <video className="hero__video" poster="/videos/dark-matter.jpg" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/videos/dark-matter.m4v" type="video/mp4" />
        <source src="/videos/dark-matter.webm" type="video/webm" />
        <source src="/videos/dark-matter.ogv" type="video/ogg" />
        <source src="/videos/dark-matter.mp4" />
        <img
          srcSet={require('../../public/videos/dark-matter.jpg?resize').srcSet}
          src={require('../../public/videos/dark-matter.jpg?resize').src}
          alt="Dark matter"
        />
      </video>
    </header>
  )
}

export default Hero
